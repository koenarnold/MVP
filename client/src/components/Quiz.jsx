import React, {useState} from 'react';
import QuizQuestion1 from './Questions/QuizQuestion1.jsx'
import QuizQuestion2 from './Questions/QuizQuestion2.jsx'
import QuizQuestion3 from './Questions/QuizQuestion3.jsx'
import QuizQuestion4 from './Questions/QuizQuestion4.jsx'
import QuizQuestion5 from './Questions/QuizQuestion5.jsx'

const Quiz = ({setCurrentPage, questionsArr}) => {

  var [currQuestion, setCurrQuestion] = useState(1)

  const handleNextQuestion = (e) => {
    e.preventDefault;
    if (currQuestion === 5) {
      setCurrentPage(3)
    } else {
      setCurrQuestion(currQuestion+=1)
    }
  }

  if (questionsArr.length > 0) {
    switch (currQuestion) {
      case 1:
        return (
          <div>
            <h1>QUIZ</h1>
            <QuizQuestion1 questionsArr={questionsArr}/>
            <button onClick={handleNextQuestion}>next</button>
            <button onClick={(e)=>{e.preventDefault; setCurrentPage(1) }}>new game</button>
          </div>
        )
        break;
      case 2:
        return (
          <div>
            <h1>QUIZ</h1>
            <QuizQuestion2 questionsArr={questionsArr}/>
            <button onClick={handleNextQuestion}>next</button>
          </div>
        )
        break;
      case 3:
        return (
          <div>
            <h1>QUIZ</h1>
            <QuizQuestion3 questionsArr={questionsArr}/>
            <button onClick={handleNextQuestion}>next</button>
          </div>
        )
        break;
      case 4:
        return (
          <div>
            <h1>QUIZ</h1>
            <QuizQuestion4 questionsArr={questionsArr}/>
            <button onClick={handleNextQuestion}>next</button>
          </div>
        )
        break;
      case 5:
        return (
          <div>
            <h1>QUIZ</h1>
            <QuizQuestion5 questionsArr={questionsArr}/>
            <button onClick={handleNextQuestion}>next</button>
          </div>
        )
        break;
    }
  } else {
    return (
      <div>
        Loading...
      </div>
    )
  }

}

export default Quiz;