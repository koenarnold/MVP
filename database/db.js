const mongoose = require('mongoose');
require('dotenv').config()


async function main() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);
}

const qandaSchema = new mongoose.Schema({
  question: String,
  answer1: String,
  answer2: String,
  answer3: String,
  answer4: String,
  correctAnswer: String
})

const quizSchema = new mongoose.Schema({
  quizName: String,
  quiz: [[qandaSchema]],
  score: Number,
  username: String
})

const Quiz = mongoose.model('Quiz', quizSchema);

const saveQuiz = (data) => {
  Quiz.collection.insertOne({
    quizName: data.quizName, quiz: data.quiz, score: data.score, username: data.username
  })
}

const getQuizzes = async (username) => {
  const data = await Quiz.collection.find({"username": username}).toArray()
  return data;
}

const checkDB = async () => {
  const data = await Quiz.collection.find().toArray()
  console.log(data)
}

const clearDB = () => {
  Quiz.collection.deleteMany({})
}

main().catch(err => console.log(err));

module.exports.saveQuiz = saveQuiz;
module.exports.checkDB = checkDB;
module.exports.clearDB = clearDB;
module.exports.getQuizzes = getQuizzes;