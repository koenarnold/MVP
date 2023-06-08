import React, {useState, useEffect} from 'react';
import axios from 'axios';

const HomePage = ({setCurrentPage, username, setQuestionsArr, setQuizName, setOldQuizzes, oldQuizzes, questionsArr}) => {

  const [showNuke, setShowNuke] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{axios.post('/getQuizzes', {'username': username}).then((res)=>{setOldQuizzes(res.data)})}, [])

  const handleCreateQuiz = (e) => {
    e.preventDefault;
    setLoading(true)
    var videogame = document.getElementById('videogame-box').value;
    setQuizName(videogame)
    if (videogame !== '' && typeof videogame !== 'Number') {
      axios.post('/createQuiz', {"videogame": videogame}).then((res) => {
        var splitData = res.data.split("\n").filter((string) => string.length > 0)
        console.log('before removing first line: ', splitData)
        console.log('does the first line contain a ?:', splitData[0].indexOf('?'))
        if (splitData[0].indexOf('?') === -1) {
          splitData.shift()
        }
        console.log('after removing first line: ', splitData)
        if (splitData.length === 30) {
          var groupedSplitDataArr = [];
          for (var i = 0; i < splitData.length; i += 6) {
            var temp = []
            splitData[i + 5] = splitData[i + 5].replace('CA: ', '')
            switch(splitData[i + 5][0] + splitData[i + 5][1] + splitData[i + 5][2]) {
              case "A: ":
                splitData[i + 5] = splitData[i + 5].replace('A: ', '')
                break;
              case "B: ":
                splitData[i + 5] = splitData[i + 5].replace('B: ', '')
                break;
              case "C: ":
                splitData[i + 5] = splitData[i + 5].replace('C: ', '')
                break;
              case "D: ":
                splitData[i + 5] = splitData[i + 5].replace('D: ', '')
                break;
              default:
                break;
            }
            splitData[i + 1] = splitData[i + 1].replace('A: ', '')
            splitData[i + 2] = splitData[i + 2].replace('B: ', '')
            splitData[i + 3] = splitData[i + 3].replace('C: ', '')
            splitData[i + 4] = splitData[i + 4].replace('D: ', '')
            temp.push(splitData[i], splitData[i + 1], splitData[i + 2], splitData[i + 3], splitData[i + 4], splitData[i + 5])
            groupedSplitDataArr.push(temp)
          }
          console.log('HERE', groupedSplitDataArr)
          setLoading(false)
          setQuestionsArr(groupedSplitDataArr)
          setCurrentPage(2)
        } else {
          alert('try again please, there was an issue with the API')
        }
      })
    } else {
      alert('Please enter valid video game')
    }
  }

  const handleOldQuiz = (e) => {
    e.preventDefault;
    var tempArr = []
    for (var i = 0; i < oldQuizzes[e.target.id].quiz.length; i++) {
      var temp = [oldQuizzes[e.target.id].quiz[i].question, oldQuizzes[e.target.id].quiz[i].answer1, oldQuizzes[e.target.id].quiz[i].answer2, oldQuizzes[e.target.id].quiz[i].answer3, oldQuizzes[e.target.id].quiz[i].answer4, oldQuizzes[e.target.id].quiz[i].correctAnswer];
      tempArr.push(temp)
    }
    setQuestionsArr(tempArr)
    setCurrentPage(2)
  }

  if (!showNuke) {
    return (
      <div>
        <div>Hey there {username}!</div>
        <div>Please enter a topic you would like to take a quiz on: </div>
        <input type="text" id="videogame-box"/>
        {oldQuizzes ? oldQuizzes.map((quiz, index) => (<div className="old-quiz" onClick={handleOldQuiz} id={index} >{quiz.quizName} ----- Previous Score: {quiz.score} </div>)) : null}
        {username === "koen" ?
        <div>
              <button onClick={(e)=>{e.preventDefault; axios.get('/testdb')}}>test db</button>
              <button onClick={(e)=>{e.preventDefault; axios.get('/testdbclear')}}>test clear db</button>
        </div> : null}
        <button className="create-quiz-btn" onClick={handleCreateQuiz}>Create Quiz</button>
        {loading ? <div> <img src="https://media.tenor.com/FawYo00tBekAAAAC/loading-thinking.gif" alt="loading" height="250vh" width="250vw"/> <p>Loading...</p></div> : null}
        <button class="Nuclear" onClick={(e)=>{e.preventDefault; setShowNuke(true)}}>nuke server</button>
      </div>
    )
  } else {
    return (
      <div>
        <img src="https://media.tenor.com/mBvN3LJ0Q5AAAAAC/%D0%B2%D0%B5%D0%BB%D1%8C%D0%B7%D0%B5%D0%B2%D1%83%D0%BB%D0%B3%D0%BE%D0%B2%D0%BD%D0%BE%D0%BF%D0%BE%D0%BD%D0%BE%D1%81-beelzebub.gif" alt="face" height="1000vh" width="100%"/>
      </div>
    )
  }
}

export default HomePage