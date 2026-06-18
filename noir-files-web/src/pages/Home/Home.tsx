import { ThemeSwitcher } from "../../components/ThemeSwitcher/ThemeSwitcher";
import { Hero } from "../../components/Hero/Hero";

export function Home() {
    return (
        <>
            <ThemeSwitcher />
            <Hero/>
        </>
    );
}