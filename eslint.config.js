import { eslintBaseConfig } from './configs/base.js';
import { globals } from './configs/globals.js';
import { eslintPluginReactConfig } from './configs/react.js';
import { eslintPluginStylisticConfig } from './configs/stylistic.js';
import { eslintPluginTailwindCssConfig } from './configs/tailwind.js';
import { eslintPluginTypescriptConfig } from './configs/typescript.js';
import { eslintPluginUnicornConfig } from './configs/unicorn.js';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
    ...eslintBaseConfig,
    ...eslintPluginTypescriptConfig,
    ...eslintPluginReactConfig,
    ...eslintPluginUnicornConfig,
    ...eslintPluginStylisticConfig,
    ...eslintPluginTailwindCssConfig,
    {
        files: ['src/**/*.{ts,tsx}'],
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.json'],
                tsconfigRootDir: import.meta.dirname,
            },
            globals: {
                ...globals.browser,
            }
        },
        linterOptions: {
            noInlineConfig: false,
            reportUnusedDisableDirectives: true
        }
    },
    {
        ignores: ['**/*.{js,cjs}'],
    }
];