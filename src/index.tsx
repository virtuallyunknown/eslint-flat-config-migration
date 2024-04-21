import { createRoot } from 'react-dom/client';

const App = () => {
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

}