/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-generalsans)', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#1F2933',
                icon: '#292D32',
                secondary: '#2E8381',
            },
            backgroundImage: {
                'hero-pattern':
                    "linear-gradient(0, rgba(0, 76, 165, .3), rgba(0, 76, 165, .3)), url('/images/background.jpg')",
            },
        },
    },
    plugins: [],
};
