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
                "dark-blue": "#243B87",
                "pale-gray": "#f3f3f3",
                "light-gray": "#E0E0E0",
            },
        },
    },
    plugins: [],
};
