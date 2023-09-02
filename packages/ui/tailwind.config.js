/** @type {import('tailwindcss').Config} */
const { tailwindConfig } = require("tailwindcss-config");

module.exports = {
    ...tailwindConfig,
    content: ['./**/*.{js,ts,jsx,tsx,mdx}', ...tailwindConfig.content],
};
