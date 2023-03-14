import React from 'react';
import './First.scss'
function First() {
    return (
        <div className="div">            
            {process.env.NODE_ENV === 'production' ? <div className="first">First Component in {process.env.NODE_ENV} mode</div> : <div className="first">First Component in {process.env.NODE_ENV} mode</div>}
        </div>
    );
}

export default First;
