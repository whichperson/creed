/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{ejs, js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            width: {
                800: '800px'
            },
            height: {
                50: '50px',
                750: '750px'
            },
        },
    },
    plugins: [],
};
