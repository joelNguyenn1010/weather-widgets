import {theme} from '../theme';

export const initialState = {
    currentTheme: theme.dark
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE-THEME": {
            const newThemeKey = state.currentTheme.id === "dark" ? "light" : "dark";
            return { ...state, currentTheme: theme[newThemeKey] };
        }
        default:
            throw new Error();
    }
}