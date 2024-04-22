import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
    const [foo, setFoo] = useState(0);


    useEffect(() => {
        if (foo === 1) {

        }
        // react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
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