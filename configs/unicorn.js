// @ts-check

import eslintPluginUnicorn from 'eslint-plugin-unicorn';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export const eslintPluginUnicornConfig = [
    {
        plugins: {
            'unicorn': eslintPluginUnicorn
        },
        rules: {
            'unicorn/error-message': 'error'
        }
    }
]