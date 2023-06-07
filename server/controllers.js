const axios = require('axios')
require('dotenv').config()
const db = require('../database/db.js')
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



exports.createQuiz = (req, res) => {
  (async ()=>{
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: `Hey there, I would like you to act as a professional online quiz creator. I will provide you with a topic and you will respond with a list of 5 trivia questions related to the topic. For each question, you will also respond with 4 answers, each answer on its own line. Each of these answers will be in the following format: "A: " followed by the answer. 3 of these answers will be close to be being correct, but they will be wrong. Exactly one answer will be correct, and it will appear with the 3 incorrect as well as at the bottom below the four answers. Remember, exactly one answer for each question will be the correct answer, and it will be shown under the four answers in the following format: "CA: " followed by the correct answer. The correct answer will only have "CA: " preceding it, no other values. The topic is ${req.body.videogame}`}],
    });
    res.send(completion.data.choices[0].message.content)
  }
  )();
}

exports.saveQuiz = async (req, res)  => {
  await db.saveQuiz(req.body)
  res.send('works I think')
}

exports.getQuizzes = async (req, res)  => {
  var quizzes = await db.getQuizzes(req.body.username)
  res.send(quizzes)
}


exports.testDB = async (req, res)  => {
  db.checkDB()
  res.send('works I think')
}

exports.testDBClear = async (req, res)  => {
  db.clearDB()
  res.send('works I think')
}