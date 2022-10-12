import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../../QuizDetails/QuizDetails';

const QuizPage = () => {
    const quizData = useLoaderData().data;
    // console.log(quizData);
    const { name, total, logo, questions } = quizData;

    return (
        <div>
            {
                questions.map(question => <QuizDetails
                    questionData={question}
                ></QuizDetails>)
            }
        </div>
    );
};

export default QuizPage; <h1>this is quiz page</h1>