import './App.scss'
import React from 'react';
import First from './First/First';
import Second from './Second/Second';


function App() {
    return (
        <div>
            <First />
            <div><h1>HELLO_WORLD!!!!!</h1></div>
            <Second text={'I`m the second Component'} />
        </div>
    );
}

export default App;
