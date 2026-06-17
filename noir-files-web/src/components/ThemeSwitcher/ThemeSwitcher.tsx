import { useTheme } from "../../contexts/ThemeContext";

export function ThemeSwitcher() {
    const {
        theme,
        setTheme,
    } = useTheme();

    return (
        <button
            onClick={() => 
                setTheme(
                    theme === "noir"
                        ? "pulp"
                        : "noir"
                )
            }
        >
            Tema atual: {theme}
        </button>
    );
}