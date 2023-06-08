import React, { useState } from 'react';
import LandingPage from './LandingPage.jsx'
import HomePage from './HomePage.jsx'
import Quiz from './Quiz.jsx'
import QuizEnd from './QuizEnd.jsx'


const App = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const [quizName, setQuizName] = useState('')
  const [username, setUsername] = useState('')
  const [questionsArr, setQuestionsArr] = useState([])
  const [oldQuizzes, setOldQuizzes] = useState(0)
  var [userScore, setUserScore] = useState(0)

  switch(currentPage) {
    case 0:
      return (
      <div>
        <LandingPage setCurrentPage={setCurrentPage} setUsername={setUsername}/>
      </div>)
      break;
    case 1:
      return (
        <div>
          <HomePage setCurrentPage={setCurrentPage} username={username} setQuestionsArr={setQuestionsArr} setQuizName={setQuizName} setOldQuizzes={setOldQuizzes} oldQuizzes={oldQuizzes} questionsArr={questionsArr}/>
        </div>
      )
      break;
    case 2:
      return (
        <div>
          <Quiz setCurrentPage={setCurrentPage} questionsArr={questionsArr} userScore={userScore} setUserScore={setUserScore} quizName={quizName}/>
        </div>
      )
      break;
    case 3:
      return (
        <div>
          <QuizEnd setCurrentPage={setCurrentPage} username={username} userScore={userScore} questionsArr={questionsArr} quizName={quizName} setUserScore={setUserScore}/>
        </div>
      )
      break;
  }
}

export default App;