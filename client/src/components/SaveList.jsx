import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import ExerciseCard from './ExerciseCard.jsx';

export default function SaveList (props) {
  const [exercises, setExercises] = useState([]);

  const drop = (e) => {
    e.preventDefault();
    const exerciseId = e.dataTransfer.getData('exerciseId');
    // const card_data = e.dataTransfer.getData('card_data');

    // const card = document.getElementById(card_id);
    // card.style.display = 'block';

    // e.target.appendChild(card);

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

  console.log(exercises);
  return(
    <Container onDrop={drop} onDragOver={dragOver}>
      {exercises.map(exercise => (
        <ExerciseCard exercise={exercise} />
      ))}
    </Container>
  )

}

const Container = styled.div`
  height: 100%;
  width:25%;
  background: yellow;
`;