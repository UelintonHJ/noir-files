import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import { themes } from "../themes";
import type { Theme, ThemeName } from "../themes";

type ThemeContextData = {
    theme: ThemeName;

    currentTheme: Theme;

    setTheme: (
        theme: ThemeName
    ) => void;
};

const ThemeContext = 
    createContext({} as ThemeContextData);

export function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setThemeState] =
        useState<ThemeName>(() => {
            const saved =
                localStorage.getItem(
                    "theme"
                );

                if (
                    saved &&
                    saved in themes
                ) {
                    return saved as ThemeName;
                }

            return "noir";
        });

    function setTheme(
        newTheme: ThemeName
    ) {
        setThemeState(newTheme);

        localStorage.setItem(
            "theme",
            newTheme
        );
    }

    useEffect(() => {
        document.body.dataset.theme = 
            theme;
    }, [theme]);

    const currentTheme = themes[theme];

    return (
        <ThemeContext.Provider
            value={{
                theme,
                currentTheme,
                setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(
        ThemeContext
    );
}