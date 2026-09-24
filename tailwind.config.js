/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      colors: {
        primary: {
          50: '#f0fde8',
          100: '#ddfbc9',
          200: '#c2f796',
          300: '#a1f25a',
          400: '#83f24b',
          500: '#5fd91f',
          600: '#46b316',
          700: '#378d14',
          800: '#2e6d15',
          900: '#275a15',
        },
        secondary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        lime: {
          DEFAULT: '#82FF00',
          hover: '#6CE600',
          dark: '#5AA300',
          5: 'rgba(130,255,0,0.05)',
          10: 'rgba(130,255,0,0.10)',
          15: 'rgba(130,255,0,0.15)',
        },
        ink: '#0C1219',
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F8F9FA',
          muted: '#F1F3F5',
        },
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in',
        'slideInRight': 'slideInRight 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}