import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0e0e0f',
        'secondary': '#ae45ff',
      },
      dropShadow: {
        'custom': '0 0 8px #ae45ff ',
      },
      boxShadow: {
        'button': '0 0px 8px 0px #ae45ff'
      },
      screens: {
        'sm': '480px',
        'lg': '968px',
      }
    },
  },
  
  plugins: [],
}
export default config
