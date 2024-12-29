import type { Config } from "tailwindcss";

export default {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            keyframes: {
                'scale-up': {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.025)' },
                    '100%': { transform: 'scale(1)' },
                },
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            animation: {
                'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scale-up': 'scale-up 2s ease-in-out infinite',
            },
        },
    },
    variants: {
        extend: {
            animation: ['hover', 'focus'],
        },
    },
    plugins: [],
} satisfies Config;
