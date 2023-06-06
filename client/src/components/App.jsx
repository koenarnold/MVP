import React, { useState } from 'react';
import LandingPage from './LandingPage.jsx'
import HomePage from './HomePage.jsx'
import Quiz from './Quiz.jsx'
import QuizEnd from './QuizEnd.jsx'

const App = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const [username, setUsername] = useState('')
  const [questionsArr, setQuestionsArr] = useState([])

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
          <HomePage setCurrentPage={setCurrentPage} username={username} setQuestionsArr={setQuestionsArr}/>
        </div>
      )
      break;
    case 2:
      return (
        <div>
          <Quiz setCurrentPage={setCurrentPage} questionsArr={questionsArr}/>
        </div>
      )
      break;
    case 3:
      return (
        <div>
          <QuizEnd setCurrentPage={setCurrentPage}/>
        </div>
      )
      break;
  }
}

export default App;