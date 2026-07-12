import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        accent: '#dc2626',
        midnight: '#0f0f0f',
      },
      boxShadow: {
        premium: '0 20px 50px -12px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config
