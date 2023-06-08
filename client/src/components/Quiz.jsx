import React, {useState} from 'react';

const Quiz = ({setCurrentPage, questionsArr, userScore, setUserScore}) => {

  var [questionIndex, setQuestionIndex] = useState(0)
  const [hasSelected, setHasSelected] = useState(false)

  const handleNextQuestion = (e) => {
    e.preventDefault;
    if (questionIndex === 4) {
      setCurrentPage(3)
    } else {
      setHasSelected(false)
      document.getElementById('result').innerHTML = ''
      setQuestionIndex(questionIndex+=1)
    }
  }

  const handleAnswerSelect = (e) => {
    e.preventDefault;
    if (hasSelected) {
      alert('cant choose two answers')
    } else {
      var selectedAnswer = document.getElementById(e.target.id).innerHTML;
      if (selectedAnswer === questionsArr[questionIndex][5]) {
        document.getElementById('result').innerHTML = 'CORRECT'
        setUserScore(userScore += 100)
      } else {
        document.getElementById('result').innerHTML = 'WRONG'
      }
      setHasSelected(true)
    }
  }

  if (questionsArr.length > 0) {
    return (
      <div>
        <h1>Quiz</h1>
        <p>Score: {userScore}</p>
        <h3 className="question">{questionsArr[questionIndex][0]}</h3>
        <p className="answer" id="1" onClick={handleAnswerSelect}>{questionsArr[questionIndex][1]}</p>
        <p className="answer" id="2" onClick={handleAnswerSelect}>{questionsArr[questionIndex][2]}</p>
        <p className="answer" id="3" onClick={handleAnswerSelect}>{questionsArr[questionIndex][3]}</p>
        <p className="answer" id="4" onClick={handleAnswerSelect}>{questionsArr[questionIndex][4]}</p>
        <p id="result" ></p>
        {hasSelected ? <p className="correct-answer">{questionsArr[questionIndex][5]}</p> : null}
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