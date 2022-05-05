import React from 'react';
import styled from 'styled-components';
import { AiOutlineLike } from 'react-icons/ai';
import ExerciseCard from './ExerciseCard.jsx';

export default function ExerciseList({ exercises, bodyPart, updateBigImg }) {
  return (
    <Container>
      <h1 style={{ textTransform: 'capitalize' }}>{bodyPart + ' '}Exercises</h1>
      <List>
        {exercises.map((exercise) => (
          <ExerciseCard
            id={'card' + JSON.stringify(exercise.id)}
            key={exercise.id}
            exercise={exercise}
            saved={false}
            updateBigImg={updateBigImg}
          />
        ))}
      </List>
    </Container>
  );
}

const List = styled.div`
  display: flex;
  height:100%;
  flex-direction: column;
  align-items: normal;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Container = styled.div`

padding: 0 40px;
width: 25%;
overflow:hidden;

`;
