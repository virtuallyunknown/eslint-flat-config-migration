import eslintBase from './configs/base.js';
import eslintPluginReact from './configs/react.js';
import stylistic from './configs/stylistic.js';
import typescriptEslint from './configs/typescript.js';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
    ...eslintBase,
    ...typescriptEslint,
    ...eslintPluginReact,
    ...stylistic,
    {
        files: ['src/**/*.{ts,tsx}'],
        languageOptions: {
            parserOptions: {
                project: true,
                ecmaFeatures: {
                    jsx: true
                }
            }
        }
    },
    // {
    //     ignores: ['**/*.{js,cjs}'],
    // }
];  