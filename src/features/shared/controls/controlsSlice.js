import { createSlice } from '@reduxjs/toolkit'

export const controlsSlice = createSlice({
    name: 'controls',
    initialState: {
        value: 0,
        isPlaying: false,
    },
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        toggleIsPlaying: (state) => {
            console.log('state.isPlaying', state.isPlaying)
            console.log('state.isPlaying', !state.isPlaying)
            state.isPlaying = !state.isPlaying
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, toggleIsPlaying } = controlsSlice.actions

export default controlsSlice.reducer
