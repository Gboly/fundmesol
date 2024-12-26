// const theme: string | undefined | null = document.querySelector("html")?.getAttribute("data-theme")
// export const isDarkMode: boolean = theme === "dark"
// export const isLightMode: boolean = theme === "light"
// console.log(theme);

// This file loads before the html element mounts so this would be a fxn just so that the theme is fetched at the point of need where the the mounting must have been done.
type getAttributeFxn = () => string | undefined | null
export const getTheme: getAttributeFxn = () => document.querySelector("html")?.getAttribute("data-theme")
export const ifDarkMode: () => boolean = () => getTheme() === "dark"
export const ifLightMode: () => boolean = () => getTheme() === "light"
export function isEmail(value: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return typeof value === 'string' && emailRegex.test(value);
}