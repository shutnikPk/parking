import './App.scss'
import React, { useState } from 'react';
import Sun from './sun.svg'
import Moon from './half-moon.svg'

class LocalStorageMock {
    constructor() {
        this.store = {};
    }

    clear() {
        this.store = {};
    }

    getItem(key) {
        return this.store[key] || null;
    }

    setItem(key, value) {
        this.store[key] = String(value);
    }

    removeItem(key) {
        delete this.store[key];
    }
}

global.localStorage = new LocalStorageMock;

const theme = localStorage.getItem('isLightTheme') === null ?
    true : JSON.parse(localStorage.getItem('isLightTheme'))

export default () => {

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
