import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
    const [foo, setFoo] = useState(0);

    if (true) {
        // react-hooks/rule-of-hooks
        useState(1);
    }

    useEffect(() => {
        foo;
        // react-hooks/exhaustive-deps
    }, []);

    return (
        // tailwindcss/classnames-order
        <div className='flex gap-2'>
            {/* 'react/void-dom-elements-no-children' */}
            <br>hello</br>
        </div>
    );
};

const root = document.getElementById('root') as HTMLDivElement;

createRoot(root).render(<App />);

// @typescript-eslint/await-thenable
await 'some promise';

// eqeqeq
if (Math.random() == 2) {
    // unicorn/error-message
    throw Error();
}