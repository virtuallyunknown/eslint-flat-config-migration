import eslintPluginTailwindCss from 'eslint-plugin-tailwindcss';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export const eslintPluginTailwindCssConfig = [
    {
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        plugins: {
            'tailwindcss': eslintPluginTailwindCss
        },
        rules: eslintPluginTailwindCss.configs.recommended.rules

        /**
         * or manually add rules like so:
         * 
         * rules: {
         *     'tailwindcss/classnames-order': 'warn',
         *     'tailwindcss/enforces-negative-arbitrary-values': 'warn
         *     'tailwindcss/enforces-shorthand': 'warn',
         *     'tailwindcss/migration-from-tailwind-2': 'warn',
         *     'tailwindcss/no-arbitrary-value': 'off',
         *     'tailwindcss/no-custom-classname': 'warn',
         *     'tailwindcss/no-contradicting-classname': 'error',
         *     'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
         * }
         */
    }
];