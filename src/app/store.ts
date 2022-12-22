import { configureStore } from '@reduxjs/toolkit';
import controlsReducer from '../features/shared/controls/controlsSlice';
import keyPressReducer from '../features/shared/keyPressSlice';
import canvasReducer from '../features/canvas/canvasSlice';

const store = configureStore({
    reducer: {
        controls: controlsReducer,
        canvas: canvasReducer,
        keyPress: keyPressReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
