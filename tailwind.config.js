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
                    DEFAULT: '#76D4FF',
                    dark: '#5CCBFF',
                },
            },
        },
    },
    plugins: [],
}
