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
            keyframes: {
                fadeInCardUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                tableAnimation: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
            animation: {
                fadeInCardUp: "fadeInCardUp 0.6s ease-out",
                tableAnimation: "tableAnimation 0.5s ease-in forwards",
            },
        },
    },
    plugins: [],
};
