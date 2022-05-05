import React from 'react';
import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';

export default function ExerciseCard({exercise, saved}) {
  const dragStart = (e, exerciseId) => {
    const target = e.target;
    e.dataTransfer.setData('exerciseId', exerciseId);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <Container
      draggable={true}
      onDragStart={(e) => dragStart(e, exercise.id)}
      onDragOver={dragOver}
    >
      <ExerciseImg src={exercise.gifUrl} />
      <div style={{ paddingLeft: '10px', wordWrap: 'break-all' }}>
        <a
          href={`https://www.youtube.com/results?search_query=${exercise.name.replace(
            ' ',
            '+',
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>{exercise.name}</h2>
        </a>
        {saved && <Close />}
        <p>Equipment: {exercise.equipment} </p>
        <p>Target: {exercise.target}</p>
      </div>
    </Container>
  );
}

const ExerciseImg = styled.img`
  width: auto;
  height: 100%;
  display: block;
  border-radius: 20px;
`;

const Close = styled(IoIosClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Container = styled.div`
  padding: 10px;
  width: 90%;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 20px;
  filter: drop-shadow(10px 10px 4px #832626);

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
