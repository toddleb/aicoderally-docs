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
        'brand': {
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          orange: '#f97316',
          purple: '#9333ea',
        }
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.brand.violet'),
              '&:hover': {
                color: theme('colors.brand.purple'),
              },
            },
            h1: {
              fontWeight: '900',
              background: 'linear-gradient(to right, #06b6d4, #8b5cf6, #f97316)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            },
            h2: {
              fontWeight: '800',
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '700',
              color: theme('colors.gray.800'),
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '600',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
