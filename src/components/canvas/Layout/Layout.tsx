import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Stats } from '@react-three/drei'
import { animated, config, useSpring } from 'react-spring'

import {env} from '../../../constants';

import './style.module.scss';

const LControl = () => {
  const control = useRef(null)
  const noLimit = true;

  return (
    <OrbitControls
      ref={control}
      maxDistance={noLimit ? 900 : 40}
      minDistance={1.8}
      // maxPolarAngle={Math.PI / 2 - 0.05} // prevent user from looking below
      enablePan={false}
      //
      addEventListener={undefined}
      dispatchEvent={undefined}
      hasEventListener={undefined}
      removeEventListener={undefined}
    />
  )
}

const Layout: React.FC = ({children}) => {
  const [loaded, setLoaded] = useState(false)
  const loadTimeout: { current: NodeJS.Timeout | null } = useRef(null)

   const [frameloop, setFrameloop] = useState(false)

  // todo: setup a real loader
  useEffect(() => {
    loadTimeout.current = setTimeout(() => {
      setLoaded(true)
    }, 200)
  }, [])

  const handleKey: { current: any } = useRef(null);

  useEffect(() => {
    handleKey.current = (e: KeyboardEvent) => {
      if (e.code !== 'Space') {
        return
      }
      setFrameloop(!frameloop)
    }
    window.addEventListener('keydown', handleKey.current)

    return () => handleKey.current && window.removeEventListener('keydown', handleKey.current)
  }, [frameloop, handleKey])

  const { opacity } = useSpring({
    opacity: loaded ? 1 : 0,
    config: config.default,
  })

  // @ts-ignore
    // @ts-ignore
    return (
    <animated.div
      className="layout"
      style={{
        // backgroundColor: 'black',
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '100%',
        opacity,
        zIndex: 0
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <button
          onClick={() => setFrameloop(!frameloop)}
        >
          {frameloop ? 'pause' : 'play'}
        </button>
      </div>
      <Canvas
        frameloop={frameloop ? 'always' : 'never'}
        camera={{ position: [0, 2, 12], fov: 35 }}
        // gl={{ antialias: false }}
        mode='concurrent'
        dpr={typeof window === 'undefined' ? 2 : window.devicePixelRatio}
        shadows={true}
        style={{
          // backgroundColor: 'black',
        }}
      >
        <Suspense fallback={null}>
          <LControl />
          <Preload all />
          {process.env.NODE_ENV !== env.prod && <Stats showPanel={0} className="stats" />}
          {children}
        </Suspense>
      </Canvas>
    </animated.div>
  );
}

export default Layout;
