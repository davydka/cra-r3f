import React, {useEffect} from 'react'
import {useGLTF, useAnimations} from '@react-three/drei'
import * as THREE from 'three';
import {AnimationAction} from 'three';

import useShadow from '../../../hooks/useShadow'

interface Props {
  url: string
}

const BLENDDURATION = 4
const SCALE = 1

const BaseGLTF: React.FC<Props> = ({url, ...props}) => {
  const {scene, animations} = useGLTF(url)
  const {actions, names, mixer} = useAnimations(animations, scene)

  useShadow({scene})

  useEffect(() => {
    console.log('names', names)
    console.log('actions', actions)

    if (!actions || !names.length) return

    (actions[names[0]] as AnimationAction)
      .reset()
      .setLoop(THREE.LoopPingPong, Infinity)
      .fadeIn(BLENDDURATION)
      .play()

    // In the clean-up phase, fade it out
    return () => {
      (actions[names[0]] as AnimationAction).fadeOut(BLENDDURATION)
    }
  }, [actions, names])

  return (
    <React.Suspense fallback={null}>
      <primitive
        object={scene}
        {...props}
        scale={[SCALE, SCALE, SCALE]}
        dispose={null}
      />
    </React.Suspense>
  )
}

export default BaseGLTF
