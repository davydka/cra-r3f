import React, {useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/app'
import {decrement, increment, toggleIsPlaying} from '../../../features/shared/controls/controlsSlice';
import {toggleAmbientLight, toggleCube, toggleFloorHelpers} from '../../../features/canvas/canvasSlice';
// import styles from './Counter.module.css';

const Controls: React.FC = () => {
    const {value: count, isPlaying} = useAppSelector((state) => state.controls);
    const {enableAmbientLight, enableCube, enableFloorHelpers} = useAppSelector((state) => state.canvas);
    const dispatch = useAppDispatch();

    // const handleKey: { current: any } = useRef(null);
    // useEffect(() => {
    //     handleKey.current = (e: KeyboardEvent) => {
    //         console.log('e', e)
    //         if (e.code !== 'Space') {
    //             return
    //         }
    //         // setFrameloop(!frameloop)
    //         console.log('hello')
    //         toggleIsPlaying()
    //     }
    //     window.addEventListener('keydown', handleKey.current)
    //
    //     return () => handleKey.current && window.removeEventListener('keydown', handleKey.current)
    // }, [handleKey])

    return (
        <div
          data-auto='Controls'
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '20px',
            border: '1px solid black'
        }}>
            <button
              aria-label="Play"
              onClick={() => dispatch(toggleIsPlaying())}
            >
                {isPlaying ? 'Pause': 'Play'}
            </button>

            <div style={{padding: '4px'}}>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span style={{ padding: '0 8px' }}>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
            <div style={{padding: '4px'}}>
                <input id="enableAmbientLight" type="checkbox" defaultChecked={enableAmbientLight} onClick={() => dispatch(toggleAmbientLight())} />{' '}
                <label htmlFor="enableAmbientLight">Toggle Ambient Light</label>
            </div>
            <div style={{padding: '4px'}}>
                <input id="enableCube" type="checkbox" defaultChecked={enableCube} onClick={() => dispatch(toggleCube())} />{' '}
                <label htmlFor="enableCube">Toggle Helper Cube</label>
            </div>
            <div style={{padding: '4px'}}>
                <input id="enableFloorHelpers" type="checkbox" defaultChecked={enableFloorHelpers} onClick={() => dispatch(toggleFloorHelpers())} />{' '}
                <label htmlFor="enableFloorHelpers">Toggle Floor Helpers</label>
            </div>
        </div>
    )
};

export default Controls;
