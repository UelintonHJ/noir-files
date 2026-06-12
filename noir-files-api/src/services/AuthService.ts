import "dotenv/config";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserRepository } from "../repositories/UserRepository.js";
import type { RegisterDTO, LoginDTO } from "../validations/auth.schema.js";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export class AuthService {
    constructor(private userRepo = new UserRepository()) {}

    async register(data: RegisterDTO) {
        const userExists = await this.userRepo.findByEmail(data.email);

        if (userExists) {
            throw new Error("User already exists");
        }

        const hash = await bcrypt.hash(data.password, 10);

        const user = await this.userRepo.create({
            name: data.name,
            email: data.email,
            password: hash,
        });

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        };
    }

    async login(data: LoginDTO) {
        const user = await this.userRepo.findByEmail(data.email);

        if (!user) {
            throw new Error("Invalid credentials");
        }

        const passwordMatch = await bcrypt.compare(
            data.password,
            user.password
        );

        if (!passwordMatch) {
            throw new Error("Invalid credentials");
        }

        const token = jwt.sign(
            {
                sub: user.id,
                role: user.role,
            },
            JWT_SECRET,
            { expiresIn: "1d" }
        );

        return {
            token,
            user: {
                id: user.id,
                name: user.name,
                role: user.role,
            },
        };
    }
}