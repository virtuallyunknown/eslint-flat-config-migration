// @ts-check

import stylistic from '@stylistic/eslint-plugin';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export const eslintPluginStylisticConfig = [
    {
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            '@stylistic/semi': ['error', 'always']
        }
    }
]