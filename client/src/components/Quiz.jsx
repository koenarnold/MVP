import React, {useState} from 'react';
import Button from '@mui/material/Button';

const Quiz = ({setCurrentPage, questionsArr, userScore, setUserScore, quizName}) => {

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
      var selectedAnswer = document.getElementById(e.target.id).innerText;
      if (selectedAnswer === questionsArr[questionIndex][5].toUpperCase()) {
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
        <div style={{display: "flex", marginLeft: "5vw"}}>
          <div className="quiz-title">
            <h1>{quizName} Quiz</h1>
            <h3 className="question">{questionsArr[questionIndex][0]}</h3>
          </div>
          <div style={{display: 'flex', alignSelf: "self-end", position: "absolute", right: "30%"}}>
            <p>Score: {userScore}</p>
          </div>
        </div>
        <div className="answers-section">
          <Button sx={{backgroundColor: "#00BFFF", margin: "3vh", width: "40vw", height: "10vh"}} variant="contained" id="1" onClick={handleAnswerSelect}>{questionsArr[questionIndex][1]}</Button>
          <Button sx={{backgroundColor: "#00BFFF", margin: "3vh", width: "40vw", height: "10vh"}} variant="contained" id="2" onClick={handleAnswerSelect}>{questionsArr[questionIndex][2]}</Button>
          <Button sx={{backgroundColor: "#00BFFF", margin: "3vh", width: "40vw", height: "10vh"}} variant="contained" id="3" onClick={handleAnswerSelect}>{questionsArr[questionIndex][3]}</Button>
          <Button sx={{backgroundColor: "#00BFFF", margin: "3vh", width: "40vw", height: "10vh"}} variant="contained" id="4" onClick={handleAnswerSelect}>{questionsArr[questionIndex][4]}</Button>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <div style={{position: "absolute",  right: "40%"}} id="result" ></div>
          {hasSelected ? <div style={{color: "green", fontWeight: "700", display: "flex", justifyContent: "center", position: "absolute", left: "40%"}} >{questionsArr[questionIndex][5]}</div> : null}
          {questionIndex === 4 ?<div style={{display: "flex", justifyContent: "center"}}> <Button variant="contained" onClick={handleNextQuestion}>submit</Button> </div> : <div style={{display: "flex", justifyContent: "center"}}> <Button variant="contained" onClick={handleNextQuestion}>next</Button> </div>}
        </div>
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