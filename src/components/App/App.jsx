import './App.scss'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sun from './sun.svg'
import Moon from './half-moon.svg'

function App({ isLightTheme, setUserTheme }) {
    const [isCheck, setIsCheck] = useState(isLightTheme)
    const onChangeTheme = () => {
        setUserTheme(isLightTheme)
        setIsCheck(!isCheck)
    }

    return (
        <div className={`theme-container theme__${isCheck ? 'light' : 'dark'}`} >
            {isCheck ? 'Good Morgin' : 'Good Night'}
            <span className='theme--icon'>{isCheck ? <Sun /> : <Moon style={{ fill: "#fafafa" }} />}</span>
            <input checked={isCheck} type='checkbox' onChange={onChangeTheme}></input>
        </div>

    );
}

App.propTypes = {
    isLightTheme: PropTypes.bool,
    setUserTheme: PropTypes.func
};

export default App;
