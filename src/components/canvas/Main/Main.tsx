import React, {useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import {PointLightHelper, Vector3} from 'three'
import {GroupProps, useFrame} from '@react-three/fiber'
import {Circle, GradientTexture, useHelper} from '@react-three/drei'
import { animated } from '@react-spring/three'
import {useAppDispatch, useAppSelector} from '../../../hooks/app'

import BaseGLTF from '../BaseGLTF/BaseGLTF'

import {isiOS} from '../../../helpers/browsers'

const FLOOR_POSITION = new THREE.Vector3(0, 0, 0)
const FLOOR_ROTATION = new THREE.Euler(-Math.PI / 2, 0, 0)
const FLOOR_SIZE = 40
const URL = `${process.env.PUBLIC_URL}/assets/Animation_Node_01.gltf`

const SHADOW_MAP_SIZE = isiOS() ? 1024 : 4096

interface Props {
  enableAmbientLight: boolean;
  enableCube: boolean;
  enableFloorHelpers: boolean;
  isPlaying: boolean;
}

const Main: React.FC<Props> = ({enableAmbientLight, enableCube, enableFloorHelpers, isPlaying, ...rest}) => {
  const cubeRef = useRef<THREE.Mesh>(null)

  const pointLightRef1 = useRef()
  useHelper(pointLightRef1, PointLightHelper, 4, 'teal') // color only affects helper

  const pointLightRef2 = useRef()
  useHelper(pointLightRef2, PointLightHelper, 4, 'GoldenRod') // color only affects helper

  const pointLightRef3 = useRef()
  useHelper(pointLightRef3, PointLightHelper, 4, 'red') // color only affects helper

  useFrame(() => {
    if (!cubeRef.current || !isPlaying) return
    cubeRef.current.rotation.y += 0.01; // note: naive animation runs differently at 30/60/120 fps
  });

  return (
    <group {...rest}>
      <pointLight
        shadow-mapSize-height={SHADOW_MAP_SIZE}
        shadow-mapSize-width={SHADOW_MAP_SIZE}
        castShadow={true}
        ref={pointLightRef1}
        position={[6, 4, 8]}
        intensity={.5}
        distance={60}
      />

      <pointLight
        shadow-mapSize-height={SHADOW_MAP_SIZE}
        shadow-mapSize-width={SHADOW_MAP_SIZE}
        castShadow={true}
        ref={pointLightRef2}
        position={[-6, 4, 8]}
        intensity={.5}
        distance={60}
      />

      <pointLight
        shadow-mapSize-height={1024} // lower value
        shadow-mapSize-width={1024} // lower value
        // castShadow={true}
        ref={pointLightRef3}
        position={[0, -4, 0]}
        intensity={1}
        distance={45}
      />

      {enableAmbientLight && <ambientLight intensity={0.15}/>}

      {enableCube && (
        <mesh ref={cubeRef} castShadow={true} receiveShadow={true} position={[0, 1, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]}/>
          <meshStandardMaterial color={'orange'}/>
        </mesh>
      )}

      <BaseGLTF url={URL} position={new Vector3(0, 0.301, 0)} isPlaying={isPlaying} />

      <animated.group
        position={FLOOR_POSITION}
        rotation={[0, 0, 0]}
      >
        <Circle
          receiveShadow
          rotation={FLOOR_ROTATION}
          args={[FLOOR_SIZE, 96]}
          position={[
            0,
            enableFloorHelpers ? -0.01 : 0,
            0
          ]}
        >
          <meshPhongMaterial attach='material' side={THREE.DoubleSide}>
            <GradientTexture
              stops={[0, .5, 1]} // As many stops as you want
              colors={['#aa00ff', '#009780', '#d05794']} // Colors need to match the number of stops
              size={2048} // Size is optional, default = 1024
            />
          </meshPhongMaterial>
        </Circle>
      </animated.group>

      {enableFloorHelpers && <gridHelper args={[FLOOR_SIZE, FLOOR_SIZE, FLOOR_SIZE]} />}
    </group>
  );
}

export default Main;
