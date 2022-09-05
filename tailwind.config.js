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
                800: '800px',
                content: 'calc(-50px + 60vw)'
            },
            height: {
                25: '25px',
                30: '30px',
                35: '35px',
                45: '45px',
                50: '50px',
                90: '90px',
                100: '100px',
                150: '150px',
                750: '750px',
                desktop: 'calc(-50px + 100vh)',
                content: 'calc(-50px + 80vh)'
            },
            minWidth: {
                800: '800px'
            },
            minHeight: {
                500: '500px'
            },
            maxWidth: {
                15: '15px',
                20: '20px',
                30: '30px',
                45: '45px',
                110: '110px'
            },
            maxHeight: {
                15: '15px',
                20: '20px',
                30: '30px',
                45: '45px'
            },
            backgroundImage: {
                desktop: 'url(\'assets/desktop.jpg\')'
            }
        },
    },
    plugins: [],
};
