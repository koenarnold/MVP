import React, {useState} from 'react';
import axios from 'axios';

const HomePage = ({setCurrentPage, username, setQuestionsArr}) => {

  const handleCreateQuiz = (e) => {
    e.preventDefault;
    var videogame = document.getElementById('videogame-box').value;
    if (videogame !== '' && typeof videogame !== 'Number') {
      axios.post('/createQuiz', {"videogame": videogame}).then((res) => {
        var splitData = res.data.split("\n").filter((string) => string.length > 0)
        console.log('before removing first line: ', splitData)
        if (!splitData[0].indexOf('?')) {
          splitData = splitData.shift()
        }
        console.log('after removing first line: ', splitData)
        if (splitData.length === 30) {
          var groupedSplitDataArr = [];
          for (var i = 0; i < splitData.length; i += 6) {
            var temp = []
            temp.push(splitData[i], splitData[i + 1], splitData[i + 2], splitData[i + 3], splitData[i + 4], splitData[i + 5])
            groupedSplitDataArr.push(temp)
          }
          console.log('HERE', groupedSplitDataArr)
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

  return (
    <div>
      <div>Hey there {username}!</div>
      <div>Please enter a video game you would like to take a quiz on: </div>
      <input type="text" id="videogame-box"/>
      <button onClick={handleCreateQuiz}>Create Quiz</button>
    </div>
  )
}

export default HomePage