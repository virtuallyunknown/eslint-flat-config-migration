import eslintreact from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
const eslintConfig = [
    {
        rules: {
            'no-console': 'error',
        }
    }
];

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
const tseslintConfig = [
    {
        languageOptions: {
            parser: tseslint.parser,
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
        },
        rules: {
            '@typescript-eslint/await-thenable': 'error'
        }
    }
];

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
const reactConfig = [
    {
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        plugins: {
            react: eslintreact
        },
        rules: {
            'react/void-dom-elements-no-children': 'error',
        }
    }
];

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
    ...eslintConfig,
    ...tseslintConfig,
    ...reactConfig,
    {
        files: ['src/**/*.{ts,tsx}'],
        languageOptions: {
            parserOptions: {
                project: true,
            },
            // globals: {
            //     ...globals.browser
            // }
        }
    }
]; 