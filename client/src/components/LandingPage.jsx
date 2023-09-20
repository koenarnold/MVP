import React, {useState, useRef} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LandingPage = ({setCurrentPage, setUsername}) => {

  const chatEnterRef = useRef(null)

  const handleLogin = (e) => {
    e.preventDefault
    setCurrentPage(1)
    var user = document.getElementById('login-box').value
    setUsername(user);
  }
  const chatInputOnKeyDown =(e)=> {
    console.log(e.key)
    if(e.key === 'Enter') {
      e.preventDefault();
      chatEnterRef.current.click();
    }
  }


  return (
    <div className="landing-page background">
      <div className="login-main">
        <h1 style={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "-1.5vh"}}>AI Quiz Game</h1>
        <h3 style={{display: "flex", flexDirection: "column", alignItems: "center"}}>Hey There! Please Log-in</h3>
        <div className="login">
          <TextField onKeyPress={chatInputOnKeyDown} ref={chatEnterRef} id="login-box" color="success"></TextField>
          <Button sx={{backgroundColor: "#33AEE3", margin: "0 0 0 1vw", color: "black", "&:hover": {backgroundColor: "#40c6ff", outline: "1px solid rgba(255, 255, 255, 0.5)", outlineOffset: "0.1vw"}}} variant="contained" onClick={handleLogin}>Log In</Button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;