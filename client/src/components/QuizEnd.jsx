import React, {useState} from 'react';

const QuizEnd = ({setCurrentPage}) => {

  return (
    <div>
      TEST 4
      <button onClick={(e)=>{e.preventDefault; setCurrentPage(0)}}>next</button>
    </div>
  )
}

export default QuizEnd;