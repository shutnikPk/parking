import React from 'react';
import './First.scss'
function First() {
    return (
        <div className="div">
            <div className="second"></div>
            {process.env.NODE_ENV === 'production' ? <div className="first">HELLO WORLD!</div> : <div className="first">{process.env.NODE_ENV}</div>}
        </div>
    );
}

export default First;
