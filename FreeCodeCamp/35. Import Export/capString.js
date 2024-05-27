const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString }; // export function

export const foo = "bar"; // export variables
export const bar = "foo"; // export variables