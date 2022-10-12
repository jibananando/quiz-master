import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizPage = () => {
    const quizData = useLoaderData().data;
    console.log(quizData);
    // const { name, id, questions } = quizData;


    return (
        <div>
            <h3>question {quizData.questions[0].question} </h3>
            <p></p>
            <p></p>
            <p></p>
        </div>
    );
};

export default QuizPage; <h1>this is quiz page</h1>