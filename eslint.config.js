import { eslintBaseConfig } from './configs/base.js';
import { eslintPluginReactConfig } from './configs/react.js';
import { eslintPluginStylisticConfig } from './configs/stylistic.js';
import { eslintPluginTypescriptConfig } from './configs/typescript.js';
import { eslintPluginUnicornConfig } from './configs/unicorn.js';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
    ...eslintBaseConfig,
    ...eslintPluginTypescriptConfig,
    ...eslintPluginReactConfig,
    ...eslintPluginUnicornConfig,
    ...eslintPluginStylisticConfig,
    {
        files: ['src/**/*.{ts,tsx}'],
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.json'],
                tsconfigRootDir: import.meta.dirname
            }
        },
        linterOptions: {
            noInlineConfig: true,
            reportUnusedDisableDirectives: true
        }
    },
    {
        ignores: ['**/*.{js,cjs}'],
    }
];