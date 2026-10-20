import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-roboto)',
          'Roboto',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
        roboto: ['var(--font-roboto)', 'Roboto', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: {
            950: '#0B192C',
            900: '#112240',
            800: '#1E3E62',
            700: '#2A5288',
            600: '#3466A8',
            50: '#F0F4F8',
          },
          amber: {
            100: '#FEF3C7',
            400: '#FBBF24',
            500: '#F59E0B',
            600: '#D97706',
            700: '#B45309',
          },
          blue: {
            logo: '#0A3868', // Logo Royal Navy Blue
            500: '#3B82F6',
            600: '#2563EB',
            700: '#1D4ED8',
          },
          teal: {
            50: '#F0FDFA',
            100: '#CCFBF1',
            200: '#99F6E4',
            300: '#5EEAD4',
            400: '#20959E',
            500: '#15828A', // Logo Teal
            600: '#0F737A',
            700: '#0D5F65',
            800: '#0B4E53',
            900: '#083D41',
          },
        },
        surface: {
          canvas: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
        },
      },
    },
  },
  plugins: [],
};

export default config;
