/** @type {import('tailwindcss').Config} */
export default {
  // files that Tailwind should scan (watch) for classes (previously `purge` option)
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        'ss-7-3': '70% 28%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

