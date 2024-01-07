/** @type {import('tailwindcss').Config} */
export default {
    purge: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    safelist: [
        // this is to load in all background colors for select panel background selection
        'bg-black',
        'bg-transparent',
        'bg-white',
        {
            pattern: /bg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)/
        }
    ],
    theme: {
        extend: {
            colors: {
                'four-star-purple': '#7A4E92',
                'five-star-gold': '#CAA367',
                'five-star-gold-light': '#734440',
                'five-star-gold-dark': '#CBA368',
                'four-star-purple-light': '#373658',
                'four-star-purple-dark': '#7650B1'
            },
            height: {
                '128': '32rem',
                '82%': '82vh',
            }
        },
    },
    plugins: [],
}