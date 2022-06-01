const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/MVP');

const exerciseSchema = new mongoose.Schema({
  id: Number,
  name: String,
  bodyPart: String,
  gif: String,
  target: String,
  equipment: String
});

const Exercise = mongoose.model('Exercises', exerciseSchema);

const findExercices = (bodyPart) => {
  return Exercise.find({bodyPart})
  .then((data) => data)
  .catch((err) => {throw err});
}

const findExerciseById = (id) => {
  return Exercise.find({id})
  .then(data => data)
  .catch(err => {throw err});
}

const deleteExercise = (id) => {
  return Exercise.findOneAndDelete({id})
}

exports.findExercices = findExercices;
exports.findExerciseById = findExerciseById;
exports.deleteExercise = deleteExercise;
