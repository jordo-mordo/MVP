var router = require('./routes.js');
const express = require ('express');
const path = require("path");
const {findExercices, findExerciseById} = require('../db');

const app = express();

const savedExercises = [];

//middleware
app.use(express.json());
app.use(express.static('client/dist'));
app.use(express.urlencoded({extended: true}));

const PORT = 3000 || process.env.PORT;

app.get('/exercises/:bodyPart', (req, res) => {
  const bodyPart = req.params.bodyPart;
  findExercices(bodyPart)
  .then(data => res.send(data))
  .catch(err => {throw err});
})

app.post('/exercises/', (req, res) => {
  const exerciseId = req.body.id;
  findExerciseById(exerciseId)
  .then(data => savedExercises.push(data[0]))
  .then(() => res.send(savedExercises))
  .catch(err => {throw err});
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})