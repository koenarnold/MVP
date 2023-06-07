import React, {useState} from 'react';

const Quiz = ({setCurrentPage, questionsArr}) => {

  var [questionIndex, setQuestionIndex] = useState(0)

  const handleNextQuestion = (e) => {
    e.preventDefault;
    if (questionIndex === 4) {
      setCurrentPage(3)
    } else {
      setQuestionIndex(questionIndex+=1)
    }
  }

  if (questionsArr.length > 0) {
    return (
      <div>
        <h1>Quiz</h1>
        <h3 class="">{questionsArr[questionIndex][0]}</h3>
        <p>{questionsArr[questionIndex][1]}</p>
        <p>{questionsArr[questionIndex][2]}</p>
        <p>{questionsArr[questionIndex][3]}</p>
        <p>{questionsArr[questionIndex][4]}</p>
        <p>{questionsArr[questionIndex][5]}</p>
        {questionIndex === 4 ? <button onClick={handleNextQuestion}>submit</button> : <button onClick={handleNextQuestion}>next</button> }
      </div>
    )
  } else {
    return (
      <div>
        Loading...
      </div>
    )
  }

}

export default Quiz;