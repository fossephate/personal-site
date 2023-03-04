import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

const colors = require('windicss/colors')
const typography = require('windicss/plugin/typography')

export default defineConfig({
  darkMode: 'class',
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  extract: {
    // include: ['src/**/*.{vue,html,jsx,tsx}', 'pages/**/*.{vue,html,jsx,tsx}'],
    include: ['src/**/*.{vue,html,jsx,tsx}', 'pages/**/*'],
    exclude: ['node_modules', '.git'],
  },
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1100px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [formsPlugin, typography, require("tw-elements/dist/plugin"), require('flowbite/plugin')],
  safelist: 'sm md lg xl 2xl',
})
