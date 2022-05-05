/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useState, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model({onClick, bodyPart, color}) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/chest.glb');
  const selectColor = (bodyPart === 'chest') ? color : 'rgb(255,255,255)';


  return (
    <group ref={group} onClick={onClick} dispose={null}>
      <mesh geometry={nodes.BaseSpiderMan008.geometry} material={materials['Material.001']} rotation={[Math.PI / 2, 0, 0]} scale={2.11}>
        <meshStandardMaterial color={selectColor} />
      </mesh>
    </group>
  );
}

useGLTF.preload('/chest.glb');
