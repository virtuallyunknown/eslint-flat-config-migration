// @ts-check

import { dirname } from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log('DIRNAME:', __dirname);


/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
    ...tseslint.configs.recommendedTypeChecked.map(conf => ({
        ...conf,
        languageOptions: {
            parserOptions: {
                project: true,

            },
            parser: tseslint.parser,
        },
        linterOptions: {
            noInlineConfig: true,
            reportUnusedDisableDirectives: true,
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
        },
        files: ["**/*.ts"],

    })),
    // {
    //     languageOptions: {
    //         parserOptions: {
    //             project: true,
    //         },
    //         parser: tseslint.parser,
    //         sourceType: 'module'
    //     },
    //     linterOptions: {
    //         noInlineConfig: true,
    //         reportUnusedDisableDirectives: true,
    //     },
    //     plugins: {
    //         '@typescript-eslint': tseslint.plugin,
    //     },
    //     files: ["**/*.ts"],
    //     // rules: {
    //     //     "@typescript-eslint/await-thenable": "error"
    //     // },
    // },
];      