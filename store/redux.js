import { configureStore } from '@reduxjs/toolkit';

import heroesReducer from './reducers/heroes';

const store = configureStore({
  reducer: {
    heroes: heroesReducer.reducer
  }
});

export default store;