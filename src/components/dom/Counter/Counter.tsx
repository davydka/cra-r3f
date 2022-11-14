import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/app'
import {decrement, increment} from '../../../features/counter/counterSlice';
import {toggleAmbientLight, toggleCube, toggleFloorHelpers} from '../../../features/canvas/canvasSlice';
// import styles from './Counter.module.css';

const Counter: React.FC = () => {
    const count = useAppSelector((state) => state.counter.value);
    const {enableAmbientLight, enableCube, enableFloorHelpers} = useAppSelector((state) => state.canvas);
    const dispatch = useAppDispatch();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '20px',
            border: '1px solid black'
        }}>
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

export default Counter;