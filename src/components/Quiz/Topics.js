import React from 'react';
import { Link } from 'react-router-dom';
import './Topics.css'

const Topics = ({ dataTopic }) => {
    const { id, name, logo, total } = dataTopic;

    return (
        <div className='topic'>
            <img src={logo}></img>
            <h2>{name}</h2>
            <p>Total Question: {total}</p>
            <button>
                <Link to={`/quizpage/${id}`}>Start Practice</Link>
            </button>
        </div>
    );
};

export default Topics;