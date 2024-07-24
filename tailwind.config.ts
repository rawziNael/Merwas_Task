import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3F485E',
        secondary: '#EB6B2A',
        tertiary: '#999999',
        footerColor: '#8C98A4',
      },
      fontFamily: {
        alef: ['Alef', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        nobile: ['Nobile', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        special: '100px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
export default config
