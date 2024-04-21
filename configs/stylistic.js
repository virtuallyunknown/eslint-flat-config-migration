// @ts-check

import stylistic from '@stylistic/eslint-plugin';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
    {
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            '@stylistic/semi': ['error', 'always']
        }
    }
];