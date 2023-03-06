/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                'mytheme': {
                    'primary': '#8E6ECA',
                    'secondary': '#F68B71',
                    'accent': '#5C4580',
                    'neutral': '#878499',
                    'base-100': '#EBE8EF',
                    'info': '#FFA800',
                    'success': '#8EB83E',
                    'warning': '#FFA800',
                    'error': '#B83E51',
                }
            }
        ]
    }
}
