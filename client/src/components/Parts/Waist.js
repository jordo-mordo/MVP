/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({onClick, bodyPart, color}) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/waist.glb')
  const selectColor = (bodyPart === 'waist') ? color : 'rgb(255,255,255)';

  return (
    <group ref={group} onClick={onClick} dispose={null}>
      <mesh geometry={nodes.BaseSpiderMan006.geometry} material={materials['Material.001']} rotation={[Math.PI / 2, 0, 0]} scale={2.11}>
        <meshStandardMaterial color={selectColor} />
      </mesh>    </group>
  )
}

useGLTF.preload('/waist.glb')
