import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import correct from '../assets/correct.mp3';
import wrong from '../assets/wrong.mp3';

const Trivia = ({data , questionNumber , setQuestionNumber , setTimeOut , setStop}) => {
    const [question , setQuestion] = useState(null);
    const [selectedAnswer , setSelectedAnswer] = useState();
    const [className , setClassName] =useState('answer');
    const [soundCorrect] = useSound(correct);
    const [soundWrong] = useSound(wrong);

    useEffect(()=>{
        setQuestion(data[questionNumber - 1]);
    } , [data , questionNumber]);

    const delay = (duration,callback) => {
        setTimeout(()=>{
            callback();
        },duration)
    }

    const handleClick = (answer) => {
        setSelectedAnswer(answer);
        setClassName('answer active');
        delay(3000 , () => setClassName(answer.correct ? 'answer correct' : 'answer wrong'));
        delay(6000 , () => {
            if(answer.correct) {
                soundCorrect();
                setQuestionNumber(prev => prev + 1);
                setSelectedAnswer(null);
            }else {
                soundWrong();
                setStop(true);
            }
        });
    }

  return (
    <div className='trivia'>
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map(answer => {
            return (
                <div className={selectedAnswer === answer ? className : 'answer'} onClick={() => handleClick(answer)}>{answer.text}</div>
            )
        })}
      </div>
    </div>
  )
}

export default Trivia;
