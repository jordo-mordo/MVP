import React from 'react';
import styled from 'styled-components';
import { AiOutlineLike } from 'react-icons/ai';
import ExerciseCard from './ExerciseCard.jsx';

export default function ExerciseList({ exercises }) {

  return (
    <List>
      {exercises.map((exercise) => (
        <ExerciseCard
          id={'card' + JSON.stringify(exercise.id)}
          key={exercise.id}
          // draggable={true}
          // onDragStart={(e) => dragStart(e, exercise.id)}
          // onDragOver={dragOver}
          exercise = {exercise}
        >
          {/* <ExerciseImg draggable={false} src={exercise.gifUrl} />
          <div style={{ paddingLeft: '10px', wordWrap: 'break-all' }}>
            <h2>{exercise.name}</h2>
            <p>Equipment: {exercise.equipment} </p>
            <p>Target: {exercise.target}</p>

            <StyledLike />
          </div> */}
        </ExerciseCard>
      ))}
    </List>
  );
}

const List = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-around;
  padding: 0 40px;
  overflow-y: scroll;
  overflow-x: hidden;
`;
