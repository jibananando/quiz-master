import React from 'react';
import './Quiz.css'

const Quiz = ({ dataTopic }) => {
    const { id, name, logo, total } = dataTopic;

    return (
        <div className='topic'>
            <img src={logo}></img>
            <h2>{name}</h2>
            <p>{total}</p>
            <button>Start Practice</button>
        </div>
    );
};

export default Quiz;