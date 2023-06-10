import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodoListProvider from "./context/context";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <TodoListProvider>
            <App/>
        </TodoListProvider>
    </React.StrictMode>
);

