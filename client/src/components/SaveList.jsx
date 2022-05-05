import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import ExerciseCard from './ExerciseCard.jsx';

export default function SaveList (props) {
  const [exercises, setExercises] = useState([]);

  const drop = (e) => {
    e.preventDefault();
    const exerciseId = e.dataTransfer.getData('exerciseId');
    saveExercise(exerciseId);
  }

  const dragOver = e => {
    e.preventDefault();
  }

  const saveExercise = (id) => {
    Axios.post('/exercises', {id: id})
    .then(savedExercises => setExercises(savedExercises.data))
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    Axios.get('/saved')
    .then(({data}) => {
      setExercises(data)
    })
    .catch(err => {throw err})
  }, [])

  return(
    <Container onDrop={drop} onDragOver={dragOver}>
      <h1>Saved Exercises</h1>
      <List>
        {exercises.map(exercise => (
          <ExerciseCard saved={true} key={exercise.id} exercise={exercise} />
        ))}
      </List>
    </Container>
  )
}

const Container = styled.div`
  width:25%;
  height:100%;
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  overflow-y: scroll;
  overflow-x: hidden;
  overflow: hidden;
`;

const List = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
`