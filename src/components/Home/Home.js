import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Quiz/Topics';
import './Home.css'

const Home = () => {
    const dataTopics = useLoaderData().data;

    return (
        <div>
            <div className='header-container'>
                <div>
                    <h2>Are You Ready</h2>
                </div>
                <div>
                    <img src="https://www.professionalbeauty.com.au/wp-content/uploads/2020/08/question-mark-on-green-pastel-color-background-with-shadow-and-blank-picture-id860048958.jpg" className='img-fluid' alt="..."></img>
                </div>
            </div>
            <div className='home-container'>
                {
                    dataTopics.map(datatopic => <Topics
                        key={datatopic.id}
                        dataTopic={datatopic}
                    ></Topics>)
                }
            </div>
        </div>
    );
};

export default Home;