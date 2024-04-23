import type { Config } from "tailwindcss";

const config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--inter-font)", "ui-sans-serif"],
                header: ["var(--poppins-font)", "ui-sans-serif"],
            },
            colors: {
                banana: {
                    "50": "#fffdea",
                    "100": "#fff6c5",
                    "200": "#ffee85",
                    "300": "#ffde46",
                    "400": "#ffcb1b",
                    "500": "#ffaa01",
                    "600": "#e28000",
                    "700": "#bb5902",
                    "800": "#984408",
                    "900": "#7c380b",
                    "950": "#481c00",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;

export default config;
