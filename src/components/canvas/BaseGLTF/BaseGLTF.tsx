import React, {useEffect} from 'react'
import {useGLTF, useAnimations} from '@react-three/drei'
import * as THREE from 'three';
import {AnimationAction, Object3D} from 'three';

import useShadow from '../../../hooks/useShadow'

interface Props extends Partial<Object3D> {
  url: string,

  isPlaying: boolean,
}

const BLENDDURATION = 4
const SCALE = 1

const BaseGLTF: React.FC<Props> = ({url, isPlaying, ...props}) => {
  const {scene, animations} = useGLTF(url)
  const {actions, names, mixer} = useAnimations(animations, scene)

  useShadow({scene})

  useEffect(() => {
    console.log('names', names)
    console.log('actions', actions)

    if (!actions || !names.length) return

    const animation = actions[names[0]] as AnimationAction

    // animation.reset()
    // animation.setLoop(THREE.LoopPingPong, Infinity)
    // animation.setLoop(THREE.LoopRepeat, 2)
    // animation.setLoop(THREE.LoopOnce, 1)

    // .paused()
    // animation.play()
    if(isPlaying) {
      // animation.setLoop(THREE.LoopPingPong, Infinity)
      // animation.fadeIn(BLENDDURATION)
      animation.play()
      console.log('animation', animation)
      // animation.play()
    } else {
      // animation.setLoop(THREE.LoopOnce, 1)
      // animation.fadeOut(BLENDDURATION)
      // animation.play()
      // animation.halt(1)
    }
    // animation.paused = !isPlaying
    console.log('isPlaying', isPlaying)

    // In the clean-up phase, fade it out
    return () => {
      // (actions[names[0]] as AnimationAction).fadeOut(BLENDDURATION)
      // animation.fadeOut(BLENDDURATION)
      // mixer.addEventListener( 'finished', function( e ) {
      //   console.log('finished', e)
      // })
      // (actions[names[0]] as AnimationAction).addEventListener( 'finished', function( e ) {
      //   console.log('finished', e)
      // })
    }
  }, [actions, isPlaying, names])

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
