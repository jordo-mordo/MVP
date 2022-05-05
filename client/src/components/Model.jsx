import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import Head from './Parts/Head.js';
import Neck from './Parts/Neck.js';
import Back from './Parts/Back.js';
import Chest from './Parts/Chest.js';
import Shoulders from './Parts/Shoulders.js';
import Cardio from './Parts/Cardio.js';
import UpperArms from './Parts/Upper_arms.js';
import LowerArms from './Parts/Lower_arms.js';
import Waist from './Parts/Waist.js';
import UpperLegs from './Parts/Upper_legs.js';
import LowerLegs from './Parts/Lower_legs.js';

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

export default function Model({updateBodyPart, bodyPart}) {
  const color = 'rgb(0,255,0)'
  const clickHandler = () => {
    // console.log('test');
  }

  return (
    <Canvas style={{ height: '100%', cursor:'pointer' }}>
      <mesh position={[0,-3.3,0]} rotation={[0,0,0]} scale={1.5}>
        <Head onClick={() => updateBodyPart('neck')} bodyPart={bodyPart} color={color}/>
        <Neck onClick={() => updateBodyPart('neck')} bodyPart={bodyPart} color={color}/>
        <Back onClick={() => updateBodyPart('back')} bodyPart={bodyPart} color={color}/>
        <Chest onClick={() => updateBodyPart('chest')} bodyPart={bodyPart} color={color}/>
        <Shoulders onClick={() => updateBodyPart('shoulders')} bodyPart={bodyPart} color={color}/>
        <Cardio onClick={() => updateBodyPart('cardio')} bodyPart={bodyPart} color={color}/>
        <UpperArms onClick={() => updateBodyPart('upper arms')} bodyPart={bodyPart} color={color}/>
        <LowerArms onClick={() => updateBodyPart('lower arms')} bodyPart={bodyPart} color={color}/>
        <Waist onClick={() => updateBodyPart('waist')} bodyPart={bodyPart} color={color}/>
        <UpperLegs onClick={() => updateBodyPart('upper legs')} bodyPart={bodyPart} color={color}/>
        <LowerLegs onClick={() => updateBodyPart('lower legs')} bodyPart={bodyPart} color={color}/>
      </mesh>
        {/* <Box /> */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <OrbitControls />
    </Canvas>
  );
}