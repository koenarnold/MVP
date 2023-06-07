import React, {useState} from 'react';

const QuizEnd = ({setCurrentPage, username}) => {

  return (
    <div>
      <h1>CONGRATS {username} - you failed</h1>
      <button onClick={(e)=>{e.preventDefault; setCurrentPage(0)}}>go back home</button>
    </div>
  )
}

export default QuizEnd;