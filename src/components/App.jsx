import './App.scss'
import React from 'react';
import First from './First/First';
import Second from './Second/Second';


function App() {
    console.log({ var: process.env })
    return (
        <div>
            <First />
            <div><h1>aaa</h1></div>
            <Second text={'I`m the second Component'} />
        </div>
    );
}

export default App;
