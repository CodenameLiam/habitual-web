// ------------------------------------------------------------------------------------
// Theme
// ------------------------------------------------------------------------------------
export interface ITheme {
    text: string;
    background: string;
    card: string;
    grey: string;
    disabled: string;
}

interface IThemeColours {
    dark: ITheme;
    light: ITheme;
}

export const Theme: IThemeColours = {
    dark: {
        text: '#FFFFFF',
        background: '#0F2028',
        card: '#223843',
        grey: '#c5c5c5',
        disabled: '#474747',
    },
    light: {
        text: '#0F2028',
        background: '#f4f4f4',
        card: '#fff',
        grey: '#c5c5c5',
        disabled: '#c5c5c5',
    },
};
