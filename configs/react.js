// @ts-check

import eslintPluginReact from 'eslint-plugin-react';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
    {
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        plugins: {
            react: eslintPluginReact
        },
        rules: {
            'react/void-dom-elements-no-children': 'error'
        }
    }
]