/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary_1: 'hsl(0, 36%, 70%)',
        primary_2: 'hsl(0, 93%, 68%)',
        secondary_3: 'hsl(0, 6%, 24%)',
        gradient_1: 'hsl(0, 0%, 100%)',
        gradient_2: 'hsl(0, 100%, 98%)',
        gradient_3: 'hsl(0, 80%, 86%)',
        gradient_4: 'hsl(0, 74%, 74%)',
      },
    },
  },
  plugins: [],
};
