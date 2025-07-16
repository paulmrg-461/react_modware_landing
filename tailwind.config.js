/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f9ff',
          100: '#ccf3ff',
          200: '#99e7ff',
          300: '#66dbff',
          400: '#33cfff',
          500: '#05C0F4',
          600: '#049ac4',
          700: '#037394',
          800: '#024d63',
          900: '#012633',
        },
        secondary: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e3e5e8',
          300: '#d4d6da',
          400: '#a8aaae',
          500: '#7c7e82',
          600: '#58595B',
          700: '#4a4b4d',
          800: '#3c3d3f',
          900: '#2e2f31',
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}