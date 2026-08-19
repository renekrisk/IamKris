/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF9F6",
        canvas: "#F2F1EC",
        ink: {
          DEFAULT: "#0F0F0F",
          secondary: "#555553",
          tertiary: "#888884",
        },
        editorial: {
          border: "#E5E4DE",
          line: "#DCDAD2",
        }
      },
      fontFamily: {
        sans: [
          '"Geist Sans"',
          '"Geist"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"Geist Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      letterSpacing: {
        tightest: '-0.035em',
        tighter: '-0.02em',
        widest: '0.12em',
        editorial: '0.05em',
      },
      maxWidth: {
        '6xl': '72rem',
        '7xl': '80rem',
      }
    },
  },
  plugins: [],
}
