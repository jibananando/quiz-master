import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOption from '../QuizOption/QuizOption';

const QuizDetails = ({ questionData }) => {
    // console.log(question);
    const { options, correctAnswer, question } = questionData;
    return (
        <div>

            <p>{question}</p>
            <div>
                {
                    options.map(option => <QuizOption
                        option={option}
                    ></QuizOption>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;