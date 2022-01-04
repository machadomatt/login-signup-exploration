const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ["'Poppins'", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    100: '#F2F7FF',
                    200: '#E5EFFF',
                    DEFAULT: '#76D4FF',
                    dark: '#5CCBFF',
                },
            },
        },
    },
    plugins: [],
}
