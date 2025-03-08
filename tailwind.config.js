/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        secondary: '#6366f1',
        accent: '#4f46e5',
        dark: {
          DEFAULT: '#111827',
          100: '#1f2937',
          200: '#374151',
          300: '#4b5563',
          900: '#0f172a',
        },
        light: {
          DEFAULT: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          900: '#ffffff',
        },
        'dark-blue': '#1e3a8a',
        'light-blue': '#93c5fd',
        'dark-purple': '#4c1d95',
        'light-purple': '#c4b5fd',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}; 