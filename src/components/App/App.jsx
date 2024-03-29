import React, { useState } from 'react';
import Sun from './sun.svg'
import Moon from './half-moon.svg'
import './App.scss'

const theme = localStorage.getItem('isLightTheme') === null ?
    true : JSON.parse(localStorage.getItem('isLightTheme'))

function App() {

    const [isLightTheme, setIsLightTheme] = useState(theme)

    const onChangeTheme = () => {
        localStorage.setItem('isLightTheme', !isLightTheme)
        setIsLightTheme(!isLightTheme)
    }

    return (
        <div role='container' className={`theme-container theme__${isLightTheme ? 'light' : 'dark'}`} >
            {isLightTheme ? 'Good Morgin' : 'Good Night'}
            {isLightTheme ? <Sun className='theme--icon' /> : <Moon className='theme--icon moon' />}
            <input checked={isLightTheme}
                type='checkbox'
                onChange={onChangeTheme}>
            </input>
        </div>
    );
}

export default App
