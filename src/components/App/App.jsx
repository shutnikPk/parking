import './App.scss'
import React, { useState } from 'react';
import Sun from './Assets/sun.svg'
import Moon from './Assets/half-moon.svg'

function App() {

    const [isLightTheme, setIsLightTheme] = useState(
        localStorage.getItem("isLightTheme") || false
    )
    if (!localStorage.isLightTheme) {
        localStorage.setItem("isLightTheme", true)
    }
    const toggleTheme = () => {
        localStorage.setItem("isLightTheme", !isLightTheme)
        setIsLightTheme(!isLightTheme)
    }

    return (
        <div className={`theme-container theme__${isLightTheme ? 'light' : 'dark'}`} >
            {isLightTheme ? 'Good Morgin' : 'Good Night'}
            <span className='theme--icon'>{isLightTheme ? <Sun /> : <Moon />}</span>
            < input type='checkbox' onChange={toggleTheme}></input >
        </div >
    );
}

export default App;
