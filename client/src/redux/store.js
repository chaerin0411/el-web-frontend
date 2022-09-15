import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice';
import postsReducer from './features/posts/postsSlice';
import usersReducer from './features/users/usersSlice';


const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer,
    }
});

export default store;