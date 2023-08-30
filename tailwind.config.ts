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
        'black-olive': '#424342',
        'cp-green': '#244f26',
        'office-green': '#256d1b',
        'forest-green': '#149911',
        'google-green': '#367a27',
        'green': '#1efc1e',

        'delft': '#2f3061',
        'jet': '#343434',
        'mint-cream': '#f7fff7',
        'naples-yellow': '#ffe66d',
        'deep-green': '#0a1c0f'
      },
      zIndex: {
        'n1': '-1',
        '0': '0'
      },
      width: {
        '128': '32rem',
        '144': '40rem',
        '160': '48rem',
        '176': '56rem',
        '192': '64rem',
        '500': '500px',
        '9/10': '90%'
      },
      height: {
        'hs': '538px'
      },
      lineHeight: {
        '16': '4rem'
      },
      dropShadow: {
        'burn': '8px 8px 0px black',
        'nav': '4px 4px 0px black',
      },
      scale: {
        '55': '55%',
        '40': '40%',
        '30': '30%',
        '45': '45%'
      },
      spacing: {
        '22': '88px'
      },
      animation: {
        'cardLeft': 'floatLeft 4s ease-in-out infinite',
        'cardRight': 'floatRight 4s ease-in-out infinite',

      },
      keyframes: {
        floatLeft: {
          '0%, 100%': { transform: 'rotate(-7deg) translateX(-10px)'},
          '50%': { transform: 'rotate(-5deg) scale(105%)' }
        },
        floatRight: {
          '0%, 100%': { transform: 'rotate(7deg) translateX(10px)'},
          '50%': { transform: 'rotate(5deg) scale(105%)' }
        },
      }
    },
  },
  plugins: [],
}
export default config
