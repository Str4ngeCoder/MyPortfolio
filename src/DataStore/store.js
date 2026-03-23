import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './Slice';

export const store = configureStore({
    reducer:{
        theme: themeReducer
    }
});