import './App.scss'
import React, { useState } from 'react';
import Sun from './Assets/sun.svg'
import Moon from './Assets/half-moon.svg'

function App() {
    const [isMornig, setIsMorning] = useState(true)
    const text = isMornig ? 'Good Morgin' : 'Good Night'
    return (
        <div className={`wrap wrap__${isMornig ? 'light' : 'dark'}`} >
            {text}
            <span className='wrap--icon'>{isMornig ? <Sun /> : <Moon />}</span>
            < input type='checkbox' onChange={() => { setIsMorning(!isMornig) }}></input >
        </div >
    );
}

export default App;
