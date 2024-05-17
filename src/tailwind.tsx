/**
 * tailwindcss/classnames-order
 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/classnames-order.md
 */
const Component1 = () => {
    return (
        <>
            {/* ❌ incorrect */}
            <div className="p-3 border-gray-300 m-4 h-24 lg:p-4 flex border-2 lg:m-4"></div>

            {/* ✅ correct */}
            <div className="m-4 flex h-24 border-2 border-gray-300 p-3 lg:m-4 lg:p-4"></div>
        </>
    );
};

/**
 * enforces-negative-arbitrary-values
 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/enforces-negative-arbitrary-values.md
 */
const Component2 = () => {
    return (
        <>
            {/* ❌ incorrect */}
            <div className="-top-[-10px] -right-[var(--my-var)] -left-[5px] -right-[var(--my-var)*-1]">
                Negative arbitrary values
            </div>

            {/* ✅ correct */}
            <div className="top-[10px] right-[var(--my-var)*-1] left-[-5px] right-[var(--my-var)]">
                Negative arbitrary values
            </div>
        </>
    );
};

/**
 * enforces-shorthand
 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/enforces-shorthand.md
 */
const Component3 = () => {
    return (
        <>
            {/* ❌ incorrect */}
            <div className="border-t-4 border-r-4 border-b-4 border-l-4">border shorthand</div>

            {/* ✅ correct */}
            <div className="border-4">border shorthand</div>
        </>
    );
};

/**
 * migration-from-tailwind-2
 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/migration-from-tailwind-2.md
 */
const Component4 = () => {
    return (
        <>
            {/* ❌ incorrect */}
            <div className="transform scale-50 filter grayscale backdrop-filter backdrop-blur-sm">
                Automatic transforms and filters
            </div>
            <div className="overflow-clip overflow-ellipsis">overflow-clip/ellipsis</div>
            <div className="bg-opacity-50 bg-black">bg-opacity</div>

            {/* ✅ correct */}
            <div className="scale-50 grayscale backdrop-blur-sm">
                Automatic transforms and filters
            </div>
            <div className="text-clip text-ellipsis">overflow-clip/ellipsis</div>
            <div className="bg-black/50">bg-opacity</div>
        </>
    );
};

/**
 * no-arbitrary-value
 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-arbitrary-value.md
 */
const Component5 = () => {
    return (
        <>
            {/* ❌ incorrect */}
            <div className="border-[4px]">border width</div>

            {/* ✅ correct */}
            <div className="border-4">border width</div>
        </>
    );
};

/**
 * no-contradicting-classname
 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-contradicting-classname.md
 */
const Component6 = () => {
    return (
        <>
            {/* ❌ incorrect */}
            <div className="container w-1 w-2">which is the correct width ?</div>

            {/* ✅ correct */}
            <div className="container p-1 lg:p-4">padding is defined once per variant max.</div>
        </>
    );
};

/**
 * no-custom-classname
 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-custom-classname.md
 */
const Component7 = () => {
    return (
        <>
            {/* ❌ incorrect */}
            <div className="w-12 my-custom">my-custom is not defined in Tailwind CSS!</div>

            {/* ✅ correct */}
            <div className="container box-content lg:box-border">
                Only Tailwind CSS classnames
            </div>
        </>
    );
};

/**
 * no-unnecessary-arbitrary-value
 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-unnecessary-arbitrary-value.md
 */
const Component8 = () => {
    return (
        <>
            {/* ❌ incorrect */}
            <div className="h-[auto]">height</div>
            <div className="h-[0%]">Use `h-0` (`0px`) instead</div>
            <div className="m-[-1.25rem] -z-[-10]">[Double] negative values</div>

            {/* ✅ correct */}
            <div className="h-auto">height</div>
            <div className="h-0">Use `h-0` (`0px`) instead</div>
            <div className="-m-5 z-10">[Double] negative values</div>
        </>
    );
};