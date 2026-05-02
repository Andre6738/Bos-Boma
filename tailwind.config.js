/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './client/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#faf6ef',
          100: '#f3ebdc',
          200: '#e6d5b6',
          300: '#d4b888'
        },
        copper: {
          DEFAULT: '#b86b3a',
          light: '#d68a55',
          dark: '#8c4d24'
        },
        bush: {
          DEFAULT: '#3a4a32',
          light: '#5a6e4d',
          dark: '#23301d'
        },
        ember: {
          DEFAULT: '#c44a2a',
          glow: '#e8763d'
        },
        ink: {
          DEFAULT: '#1f1a14',
          soft: '#3a322a',
          mute: '#7a6e62'
        },
        bone: {
          50: '#fdfaf3',
          100: '#f7f0e1'
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(31, 26, 20, 0.25)',
        card: '0 24px 60px -24px rgba(31, 26, 20, 0.45)',
        glow: '0 0 40px -8px rgba(232, 118, 61, 0.45)'
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(180deg, rgba(31,26,20,0.45) 0%, rgba(31,26,20,0.55) 55%, rgba(31,26,20,0.85) 100%)',
        'ember-radial':
          'radial-gradient(ellipse at center, rgba(232,118,61,0.25) 0%, rgba(232,118,61,0) 65%)'
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1) translate3d(0,0,0)' },
          '100%': { transform: 'scale(1.12) translate3d(-1.5%,-1%,0)' }
        },
        flicker: {
          '0%,100%': { opacity: '1', filter: 'brightness(1)' },
          '45%': { opacity: '0.85', filter: 'brightness(0.92)' },
          '70%': { opacity: '0.95', filter: 'brightness(1.05)' }
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'blob-drift': {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(4%,-3%,0) scale(1.08)' },
          '66%': { transform: 'translate3d(-3%,4%,0) scale(0.95)' }
        },
        'gradient-pan': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        shine: {
          '0%': { transform: 'translateX(-120%) skewX(-20deg)' },
          '100%': { transform: 'translateX(220%) skewX(-20deg)' }
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        kenburns: 'kenburns 22s ease-in-out infinite alternate',
        flicker: 'flicker 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'blob-drift': 'blob-drift 18s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 12s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        shine: 'shine 1.4s ease-out',
        'spin-slow': 'spin-slow 30s linear infinite'
      }
    }
  },
  plugins: []
};
