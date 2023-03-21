import './App.scss'
import React, { useState } from 'react';
import Sun from './sun.svg'
import Moon from './half-moon.svg'

function App() {

    const [isLightTheme, setIsLightTheme] = useState(
        JSON.parse(localStorage.getItem("isLightTheme"))
    )
    console.log(isLightTheme)
    console.log(isLightTheme ? 'Good Morgin' : 'Good Night')
    const toggleTheme = () => {
        localStorage.setItem("isLightTheme", !isLightTheme)
        setIsLightTheme(!isLightTheme)
    }
    return (

        <div className={`theme-container theme__${isLightTheme ? 'light' : 'dark'}`} >
            {isLightTheme ? 'Good Morgin' : 'Good Night'}
            <span className='theme--icon'>{isLightTheme ? <Sun /> : <Moon style={{ fill: "#fafafa" }} />}</span>
            <input checked={isLightTheme} type='checkbox' onChange={toggleTheme}></input>
        </div>

    );
}

export default App;
