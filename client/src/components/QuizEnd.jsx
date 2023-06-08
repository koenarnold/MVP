import React, {useState} from 'react';
import axios from 'axios';

const QuizEnd = ({setCurrentPage, username, userScore, questionsArr, quizName, setUserScore}) => {

  const [hasSaved, setHasSaved] = useState(false)

  const handleSaveQuiz = (e) => {
    e.preventDefault;
    if (!hasSaved) {
      var quizArr = []
      for (var i = 0; i < questionsArr.length; i++) {
        var temp = {question: questionsArr[i][0], answer1: questionsArr[i][1], answer2: questionsArr[i][2], answer3: questionsArr[i][3], answer4: questionsArr[i][4], correctAnswer: questionsArr[i][5]}
        quizArr.push(temp)
      }
      axios.post('/saveQuiz', {"quizName": quizName, quiz: quizArr, score: userScore, username: username})
      setHasSaved(true)
    } else {
      alert('you have already saved this')
    }
  }

  var adjective = 'ok';

  switch(userScore) {
    case 100:
      adjective = 'terrible'
      break;
    case 200:
      adjective = 'pretty bad'
      break;
    case 400:
      adjective = 'really good'
      break;
    case 500:
      adjective = 'ABSOLUTELY AMAZING'
      break;
  }

  return (
    <div>
      <h1>CONGRATS {username} - you got {userScore} points! Wow, you did {adjective}!</h1>
      <p>would you like to save this quiz?</p>
      <button onClick={handleSaveQuiz}>save</button>
      <button onClick={(e)=>{e.preventDefault; setHasSaved(false); setCurrentPage(0); setUserScore(0)}}>go back home</button>
    </div>
  )
}

export default QuizEnd;