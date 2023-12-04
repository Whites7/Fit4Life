import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
        50: '#E6F1F5',
        100: '#E6F1F5',
        200: '#CCE3EB',
        300: '#99C8D7',
        400: '#66ADC3',
        500: '#3381A3',
        600: '#27657D',
        700: '#1B4957',
        800: '#0F2D31',
        },
      },
    },
  },
  plugins: [],
}
export default config
