// @ts-check

import typescriptEslint from 'typescript-eslint';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
    {
        languageOptions: {
            parser: typescriptEslint.parser,
        },
        plugins: {
            '@typescript-eslint': typescriptEslint.plugin,
        },
        rules: {
            '@typescript-eslint/ban-types': 'error',
            '@typescript-eslint/await-thenable': 'error'
        }
    }
];