import React from 'react';

interface ButtonProps {
    label: string;
}

function Button({label}: ButtonProps){
    return <button
    className='dse-button-container'
    >{label}</button>
}

export default Button;