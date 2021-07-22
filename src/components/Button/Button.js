import React from 'react';
import './Button.scss';


const Button = ({win, label, action, isEndGame}) => {
    let btnStyle = 'button ';
    let disable = false;
    if (isEndGame) {
        disable = false;
    }
    if (!win && !isEndGame) {
        btnStyle += 'disabled';
        disable = true;
    }

    return (
        <button className={btnStyle} disabled={disable} onClick={action}>
            {label}
        </button>
    );
};

export default Button;
