/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{ejs, js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            width: {
                45: '45px',
                50: '50px',
                100: '100px',
                150: '150px',
                800: '800px'
            },
            height: {
                30: '30px',
                35: '35px',
                45: '45px',
                50: '50px',
                90: '90px',
                100: '100px',
                150: '150px',
                750: '750px',
                desktop: 'calc(-50px + 100vh)'
            },
            maxWidth: {
                45: '45px',
                110: '110px'
            },
            maxHeight: {
                45: '45px'
            },
            backgroundImage: {
                desktop: 'url(\'assets/desktop.jpg\')'
            }
        },
    },
    plugins: [],
};
