import React from 'react';
import './error-list.css';
import icon from './death-star.png';

const Error = () => {
    return (
        <div className="error-main">
            <img src={icon} alt="erro icon"/>
            <div className="span-msg">
                <span>BOOM!</span>
            </div>
            <span className="smt-wrong">Something is wrong</span>
            <div className="last-span">
                <span>(We send dron to fix that problem)</span>
            </div>
        </div>
    );
}

export default Error;