import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    return <>
        <h1>Hello World!</h1>
        <p>Welcome to React!</p>
    </>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <App />
</React.StrictMode>);