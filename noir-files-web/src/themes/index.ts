import { noirTheme } from "./noir";
import { pulpTheme } from "./pulp";

export const themes = {
    noir: noirTheme,
    pulp: pulpTheme,
};

export type ThemeName = 
    keyof typeof themes;

export type Theme =
    typeof themes.noir;