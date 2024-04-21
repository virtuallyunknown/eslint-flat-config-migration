ESLint searches for .js, .mjs, and .cjs files - With eslintrc, ESLint only ever searched for .js files when you passed a directory name on the command line, and you would need to use the --ext flag to define more. With flat config, all three of the most common JavaScript filename extensions are automatically searched.

https://eslint.org/blog/2022/08/new-config-system-part-2/#setting-logical-defaults-for-linting

---

Tip

Most of the time, you’ll want to export an array of config objects from your shareable config. However, you can also export a single config object. Make sure your documentation clearly shows an example of how to use your shareable config inside of an eslint.config.js file to avoid user confusion.

https://eslint.org/docs/latest/extend/shareable-configs#creating-a-shareable-config

---

You can use a combination of files and ignores to determine which files should apply the configuration object and which should not. By default, ESLint matches **/\*.js, **/_.cjs, and \*\*/_.mjs. Because config objects that don’t specify files or ignores apply to all files that have been matched by any other configuration object, those config objects apply to any JavaScript files passed to ESLint by default. For example:

https://eslint.org/docs/latest/use/configure/configuration-files#specifying-files-and-ignores
