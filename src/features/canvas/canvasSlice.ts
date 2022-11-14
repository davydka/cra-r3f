import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState: {
        value: 0,
        enableCube: false,
        enableAmbientLight: true,
        enableFloorHelpers: false,
    },
    reducers: {
        toggleCube: (state, {payload}: PayloadAction<boolean | undefined>) => {
            state.enableCube = typeof payload !== 'undefined' ? payload : !state.enableCube
        },
        toggleAmbientLight: (state, {payload}: PayloadAction<boolean | undefined>) => {
            state.enableAmbientLight = typeof payload !== 'undefined' ? payload : !state.enableAmbientLight
        },
        toggleFloorHelpers: (state, {payload}: PayloadAction<boolean | undefined>) => {
            state.enableFloorHelpers = typeof payload !== 'undefined' ? payload : !state.enableFloorHelpers
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggleAmbientLight, toggleCube, toggleFloorHelpers } = canvasSlice.actions

export default canvasSlice.reducer