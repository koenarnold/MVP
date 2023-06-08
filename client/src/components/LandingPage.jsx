import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LandingPage = ({setCurrentPage, setUsername}) => {

  const handleLogin = (e) => {
    e.preventDefault
    setCurrentPage(1)
    var user = document.getElementById('login-box').value
    setUsername(user);
  }

  return (
    <div className="landing-page">
      <div className="login-main">
        <h3 style={{display: "flex", flexDirection: "column", alignItems: "center"}}>Hey There! Please Log-in</h3>
        <div className="login">
          <TextField id="login-box"></TextField>
          <Button sx={{backgroundColor: "#ff6534", margin: "0 0 0 1vw"}} variant="contained" onClick={handleLogin}>Log In</Button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;