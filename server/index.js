var router = require('./routes.js');
const express = require ('express');
const path = require("path");
const {findExercices, findExerciseById, deleteExercise} = require('../db');

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

app.get('/saved', (req, res) => {
  // console.log('get request', savedExercises)
  res.send(savedExercises);
})

app.put('/saved', (req, res) => {
  const exerciseId = req.body.id;
  deleteExercise(exerciseId)
  .then(() => res.end())
  .catch((err) => {throw err});
})

app.post('/exercises/', (req, res) => {
  const exerciseId = req.body.id;
  findExerciseById(exerciseId)
  .then(data => {
    let add = true;
    let stringedExercises = savedExercises.map(exercise => (JSON.stringify(exercise)))
    if (stringedExercises.includes(JSON.stringify(data[0]))) {
      add = false;
    }
    if (add) {
    savedExercises.push(data[0])
    }
  })
  // .then(() => console.log('servers saved data is ',savedExercises))
  .then(() => res.send(savedExercises))
  .catch(err => {throw err});
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})