import { createSlice } from '@reduxjs/toolkit'

export const keyPressSlice = createSlice({
  name: 'keyPress',
  initialState: {
    keyPressed: null,
    timeStamp: 0,
  },
  reducers: {
    setKeyPressed: (state, action) => {
      state.keyPressed = action.payload
      state.timeStamp = Date.now()
    },
  },
})

// Action creators are generated for each case reducer function
export const { setKeyPressed } = keyPressSlice.actions

export default keyPressSlice.reducer
