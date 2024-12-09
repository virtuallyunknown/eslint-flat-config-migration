// @ts-check

import typescriptEslint from 'typescript-eslint';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export const eslintPluginTypescriptConfig = [
    {
        languageOptions: {
            parser: typescriptEslint.parser,
            parserOptions: {
                project: true
            }
        },
        plugins: {
            '@typescript-eslint': typescriptEslint.plugin,
        },
        rules: {
            // '@typescript-eslint/ban-types': 'error',
            '@typescript-eslint/await-thenable': 'error'
        }
    }
]