/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'bg-accent-whatsapp',
    'hover:bg-accent-whatsapp',
    'text-accent-whatsapp',
    'border-accent-whatsapp',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFA500', // Orange
          light: '#FFD700',   // Gold
          dark: '#FF8C00',    // Dark Orange
        },
        secondary: {
          DEFAULT: '#1a1a1a', // Black
          light: '#333333',   // Dark Gray
          lighter: '#666666', // Gray
        },
        accent: {
          whatsapp: '#25D366', // WhatsApp Green
          emergency: '#DC2626', // Red for emergency calls
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          900: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 2s infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
