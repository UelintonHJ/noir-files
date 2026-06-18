import { useTheme } from "../../contexts/ThemeContext";

export function ThemeSwitcher() {
    const {
        theme,
        setTheme,
    } = useTheme();

    return (
        <button
            type="button"
            onClick={() => 
                setTheme(
                    theme === "noir"
                        ? "pulp"
                        : "noir"
                )
            }
            aria-label={`Alternar para tema ${
                theme === "noir"
                    ? "pulp"
                    : "noir"
            }`}
        >
            Tema atual: {theme}
        </button>
    );
}