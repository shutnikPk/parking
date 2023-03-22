import './index.scss'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

if (typeof JSON.parse(localStorage.getItem("isLightTheme")) !== "boolean") {
    localStorage.setItem("isLightTheme", true)
}

let isLightTheme = JSON.parse(localStorage.getItem("isLightTheme"))

const setUserTheme = (theme) => {
    localStorage.setItem("isLightTheme", !theme)
    isLightTheme = !isLightTheme
}

root.render(

    <React.StrictMode>
        <App
            isLightTheme={isLightTheme}
            setUserTheme={setUserTheme}
        />
    </React.StrictMode>
);
