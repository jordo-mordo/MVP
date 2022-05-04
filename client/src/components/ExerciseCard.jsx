import React from 'react';
import styled from 'styled-components';
import { AiOutlineLike } from 'react-icons/ai';

export default function ExerciseCard(props) {

  const dragStart = (e, exerciseId) => {
    const target = e.target;
    e.dataTransfer.setData('exerciseId', exerciseId);
  }

  const dragOver = e => {
    e.stopPropagation();
  }

  const exercise = props.exercise;
  return(
    <Container draggable={true} onDragStart={(e) => dragStart(e, exercise.id)}
    onDragOver={dragOver}>
      <ExerciseImg  src={exercise.gifUrl} />
      <div style={{ paddingLeft: '10px', wordWrap: 'break-all' }}>
        <h2>{exercise.name}</h2>
        <p>Equipment: {exercise.equipment} </p>
        <p>Target: {exercise.target}</p>
        <StyledLike />
      </div>
    </Container>
  );
};

const StyledLike = styled(AiOutlineLike)`
  width: 2em;
  height: auto;
  margin: 5px 5px 0 0;
  cursor: pointer;
`;

const ExerciseImg = styled.img`
  width: 50%;
  height: 50%;
  display: inline-block;
  border-radius: 20px;
`;

const Container = styled.div`
  padding:10px;
  width: 45%;
  min-width: 300px;
  /* min-height: 300px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
  background-color: rgba(250, 223, 225, 0.8);
  border-radius: 20px;
  filter: drop-shadow(10px 10px 4px #832626);

  p {
    margin: 0;
  }
`;