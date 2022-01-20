import React, {useRef, useState} from 'react';
import * as THREE from 'three';
import {useFrame} from '@react-three/fiber'

import BaseGLTF from '../BaseGLTF/BaseGLTF';

const URL = `${process.env.PUBLIC_URL}/assets/Animation_Node_01.gltf`;

const App: React.FC = ({children}) => {
  const cubeRef = useRef<THREE.Mesh>(null)
  const [enableCube] = useState(true)
  const [enableAmbientLight] = useState(true)

  useFrame(() => {
    if (!cubeRef.current) return
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <>
      <pointLight position={[10, 10, 10]} />
      {enableAmbientLight && <ambientLight intensity={0.5}/>}
      {enableCube && (
        <mesh ref={cubeRef} castShadow={true} position={[0, 1, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]}/>
          <meshStandardMaterial color={'orange'}/>
        </mesh>
      )}
      <BaseGLTF url={URL} />
    </>
  );
}

export default App;
