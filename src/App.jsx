
import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Trivia from './components/Trivia';
import Timer from './components/Timer';

function App() {

  const [questionNumber , setQuestionNumber] = useState(1);
  const [timeOut , setTimeOut] = useState(false);
  const [stop , setStop] = useState(false);
  const [earned , setEarned] = useState('$0');

  const data = [
    {
      id : 1 ,
      question : 'کمپانی رولکس چه محصولی را تولید میکند؟',
      answers : [
        {
          text : 'موبایل',
          correct : false
        },
        {
          text : 'ساعت',
          correct : true
        },
        {
          text : 'غذا',
          correct : false
        },
        {
          text : 'فرش',
          correct : false
        }
      ]
    },
    {
      id : 2 ,
      question : 'چه زمانی فیس بوک راه اندازی شد؟',
      answers : [
        {
          text : '2004',
          correct : true
        },
        {
          text : '2005',
          correct : false
        },
        {
          text : '2006',
          correct : false
        },
        {
          text : '2007',
          correct : false
        }
      ]
    },
    {
      id : 3 ,
      question : 'بازیگر نقش هری پاتر که بود؟',
      answers : [
        {
          text : 'daniel radcliffe',
          correct : true
        },
        {
          text : 'johny depp',
          correct : false
        },
        {
          text : 'decaprio',
          correct : false
        },
        {
          text : 'ema watson',
          correct : false
        }
      ]
    },
    {
      id : 4 ,
      question : 'کمپانی رولکس چه محصولی را تولید میکند؟',
      answers : [
        {
          text : 'موبایل',
          correct : false
        },
        {
          text : 'ساعت',
          correct : true
        },
        {
          text : 'غذا',
          correct : false
        },
        {
          text : 'فرش',
          correct : false
        }
      ]
    },
    {
      id : 5 ,
      question : 'کمپانی رولکس چه محصولی را تولید میکند؟',
      answers : [
        {
          text : 'موبایل',
          correct : false
        },
        {
          text : 'ساعت',
          correct : true
        },
        {
          text : 'غذا',
          correct : false
        },
        {
          text : 'فرش',
          correct : false
        }
      ]
    },
    {
      id : 6 ,
      question : 'کمپانی رولکس چه محصولی را تولید میکند؟',
      answers : [
        {
          text : 'موبایل',
          correct : false
        },
        {
          text : 'ساعت',
          correct : true
        },
        {
          text : 'غذا',
          correct : false
        },
        {
          text : 'فرش',
          correct : false
        }
      ]
    },
    {
      id : 7 ,
      question : 'کمپانی رولکس چه محصولی را تولید میکند؟',
      answers : [
        {
          text : 'موبایل',
          correct : false
        },
        {
          text : 'ساعت',
          correct : true
        },
        {
          text : 'غذا',
          correct : false
        },
        {
          text : 'فرش',
          correct : false
        }
      ]
    },
    {
      id : 8 ,
      question : 'کمپانی رولکس چه محصولی را تولید میکند؟',
      answers : [
        {
          text : 'موبایل',
          correct : false
        },
        {
          text : 'ساعت',
          correct : true
        },
        {
          text : 'غذا',
          correct : false
        },
        {
          text : 'فرش',
          correct : false
        }
      ]
    },
  ];

  const moneyPyramid = useMemo(()=>
    [
      {id : 1 , amount : '$100'},
      {id : 2 , amount : '$200'},
      {id : 3 , amount : '$300'},
      {id : 4 , amount : '$500'},
      {id : 5 , amount : '$1000'},
      {id : 6 , amount : '$2000'},
      {id : 7 , amount : '$4000'},
      {id : 8 , amount : '$8000'},
      {id : 9 , amount : '$16000'},
      {id : 10 , amount : '$32000'},
      {id : 11 , amount : '$64000'},
      {id : 12 , amount : '$125000'},
      {id : 13 , amount : '$250000'},
      {id : 14 , amount : '$500000'},
      {id : 15 , amount : '$1000000'}
    ].reverse()
   , [])

  useEffect(()=>{
    questionNumber > 1 && setEarned(moneyPyramid.find((m)=>m.id === questionNumber - 1).amount);
  },[moneyPyramid , questionNumber]);


  return (
    <div className="App">
      <div className='main'>
        {stop ? (
          <h1 className='endText'>برنده شدی : {earned}</h1>
        ) : (
          <>
          <div className="top">
          <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
        </div>
        <div className="bottom">
          <Trivia data={data} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} setTimeOut={setTimeOut} setStop={setStop} />
        </div></>
        )}
      </div>
      <div className='pyramid'>
        <ul className='moneyList'>
          {moneyPyramid.map(m=>(
            <li className={questionNumber === m.id ? 'moneyListItem active' : 'moneyListItem'}>
            <span className='moneyListItemNumber'>{m.id}</span>
            <span className='moneyListItemAmount'>{m.amount}</span>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
