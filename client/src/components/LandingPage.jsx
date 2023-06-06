import React, {useState} from 'react'

const LandingPage = ({setCurrentPage, setUsername}) => {

  const handleLogin = (e) => {
    e.preventDefault;
    setCurrentPage(1)
    var user = document.getElementById('login-box').value
    setUsername(user)
  }

  return (
    <div>
      <input type="text" id="login-box"></input>
      <button onClick={handleLogin}>Log In</button>
    </div>
  )
}

export default LandingPage;