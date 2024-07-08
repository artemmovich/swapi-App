import {configureStore} from '@reduxjs/toolkit';
import swapiReducer from '../store/reducers/swapiSlice';
export const store = configureStore ({
   reducer: {
      swapi: swapiReducer,
   },
});