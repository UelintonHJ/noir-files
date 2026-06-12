import { FavoriteRepository } from "../repositories/FavoriteRepository.js";
import { CaseRepository } from "../repositories/CaseRepository.js";

export class FavoriteService {
    constructor(
        private repository = new FavoriteRepository(),
        private caseRepository = new CaseRepository()
    ) { }

    async create(userId: string, caseId: string) {
        const favoriteExists =
            await this.repository.findByUserAndCase(
                userId,
                caseId
            );

        if (favoriteExists) {
            throw new Error("Already favorited");
        }

        return this.repository.create(userId, caseId);
    }

    async delete(id: string, userId: string) {
        const favorite = await this.repository.findById(id);

        if (!favorite) {
            throw new Error("Favorite not found");
        }

        if (favorite.userId !== userId) {
            throw new Error("Access denied");
        }

        return this.repository.delete(id);
    }
}