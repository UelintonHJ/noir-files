import { useTheme } from "../../contexts/ThemeContext";
import "./ThemeSwitcher.css";

export function ThemeSwitcher() {
    const {
        theme,
        setTheme,
    } = useTheme();

    return (
        <div className="themeSwitcher">
            <button
                className={theme === "noir" ? "active" : ""}
                onClick={() => setTheme("noir")}
            >
                {theme === "noir" ? "[ NOIR ]" : "NOIR"}
            </button>

            <button
                className={theme === "pulp" ? "active" : ""}
                onClick={() => setTheme("pulp")}
            >
                {theme === "pulp" ? "[ PULP ]" : "PULP"}
            </button>
        </div>
    );
}