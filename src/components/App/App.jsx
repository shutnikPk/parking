import './App.scss'
import React, { useState } from 'react';
import Sun from './sun.svg'
import Moon from './half-moon.svg'

const theme = localStorage.getItem('isLightTheme') === null ?
    true : JSON.parse(localStorage.getItem('isLightTheme'))

function App() {

    const [isLightTheme, setIsLightTheme] = useState(theme)

    const onChangeTheme = () => {
        localStorage.setItem('isLightTheme', !isLightTheme)
        setIsLightTheme(!isLightTheme)
    }

    return (
        <div className={`theme-container theme__${isLightTheme ? 'light' : 'dark'}`} >
            {isLightTheme ? 'Good Morgin' : 'Good Night'}
            <span className='theme--icon'>{isLightTheme ? <Sun /> : <Moon className='moon' />}</span>
            <input checked={isLightTheme}
                type='checkbox'
                onChange={onChangeTheme}>
            </input>
            <p>Hello World!</p>
        </div>
    );
}

export default App;
