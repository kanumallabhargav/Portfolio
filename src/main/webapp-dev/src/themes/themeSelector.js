import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

const themes = {
    light: lightTheme,
    dark: darkTheme,
};

export function themeSelector(themeName) {
    return themes[themeName] ?? lightTheme;
}