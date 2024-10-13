import {configureStore} from '@reduxjs/toolkit'
import courseReducer from './reducers/courseReducer.js'
import sliderReducer from './reducers/sliderReducers.js';
import miscReducers from './reducers/miscReducers.js';

const store=configureStore(
    {
       reducer:{
        course:courseReducer,
        slider:sliderReducer,
        misc:miscReducers
       }
    }
)

export default store;