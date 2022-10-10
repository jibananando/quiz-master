import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const quizTopics = useLoaderData();
    const dataTopics = quizTopics.data;

    return (
        <div className='home-container'>
            {
                dataTopics.map(datatopic => <Quiz
                    key={datatopic.id}
                    dataTopic={datatopic}
                ></Quiz>)
            }
        </div>
    );
};

export default Home;