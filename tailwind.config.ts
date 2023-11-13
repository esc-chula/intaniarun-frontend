import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: '#941214',
                    200: '#CE2C43',
                    300: '#F998B9',
                    400: '#FEF0F5',
                },
            },
        },
    },
    plugins: [],
};
export default config;
