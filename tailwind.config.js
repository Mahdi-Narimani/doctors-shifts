/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        fontFamily: {
            sans: ["iranSans"],
        },
        extend: {
            colors: {
                "light-white": "#ffffff",
                "light-blue": "#93c5fd",
                "dark-blue": "#3b82f6",
                "pale-gray": "#FAFAFA",
                "light-gray": "#E0E0E0",
            },
        },
    },
    plugins: [],
};
