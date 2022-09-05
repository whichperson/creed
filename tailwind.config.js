/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{ejs, js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            width: {
                10: '10px',
                15: '15px',
                35: '35px',
                40: '40px',
                45: '45px',
                50: '50px',
                100: '100px',
                150: '150px',
                200: '200px',
                800: '800px',
                content: 'calc(-50px + 60vw)'
            },
            height: {
                10: '10px',
                15: '15px',
                25: '25px',
                30: '30px',
                35: '35px',
                40: '40px',
                45: '45px',
                50: '50px',
                90: '90px',
                100: '100px',
                150: '150px',
                200: '200px',
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
                35: '35px',
                45: '45px',
                110: '110px',
                150: '150px',
                200: '200px',
                250: '250px',
                800: '800px',
            },
            maxHeight: {
                15: '15px',
                20: '20px',
                30: '30px',
                35: '35px',
                45: '45px',
                150: '150px',
                200: '200px',
                250: '250px'
            },
            backgroundImage: {
                desktop: 'url(\'assets/desktop.jpg\')'
            }
        },
    },
    plugins: [],
};
