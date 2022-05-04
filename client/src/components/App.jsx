// Packages
import React from 'react';
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import Axios from 'axios';
import styled from 'styled-components';

// Components
import Model from './Model.jsx';
import ExerciseList from './ExerciseList.jsx';
import SaveList from './SaveList.jsx';

const fetchData = (bodyPart) => {
  console.log('fetch body part is ', bodyPart);
  return Axios.get(`/exercises/${bodyPart}`)
    .then(({ data }) => data)
    .catch((err) => console.log(err));
};

export default function App() {
  const [bodyPart, setBodyPart] = useState('');
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    setBodyPart('waist');
  }, []);

  useEffect(() => {
    if (bodyPart.length >= 1) {
      fetchData(bodyPart)
        .then((data) => setExercises(data))
        .catch((err) => console.log(err));
    }
  }, [bodyPart]);

  const updateBodyPart = (bodyPart) => {
    setBodyPart(bodyPart);
  };

  return (
    <MainContainer>
      <ContentContainer>
        <ModelContainer>

      <Title>CLICK WHERE IT HURTS</Title>
          <Model updateBodyPart={updateBodyPart} bodyPart={bodyPart} />
        </ModelContainer>
        {bodyPart.length >= 1 && (
          <ExerciseList id="ExerciseList" exercises={exercises} />
        )}
        <SaveList />
      </ContentContainer>
    </MainContainer>
  );
}

const Title = styled.h1`
  color: white;
  position: relative;
  margin: auto;
  margin-bottom:10px;
  text-align: center;
  font-size: 3em;
`;

const ContentContainer = styled.div`
  display: flex;
  grid-template-columns: 1fr 4fr;
  height: 80vh;
`;

const MainContainer = styled.div`
  padding: 50px 6%;
  height: 100vh;
`;

const ModelContainer = styled.div`
  height: '100%';
  width:50%;
`;
