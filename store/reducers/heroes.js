import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isHeroesLoading: true,
  currentHero: {},
  currentHeroLoading: true,
};

const heroesReducer = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    setHeroes: (state, action) => {
      state.items = action.payload;
      state.isHeroesLoading = false;
    },
    setCurrentHero: (state, action) => {
      state.currentHero = action.payload;
      state.currentHeroLoading = false;
    }
  }
});

export const heroesMethods = heroesReducer.actions;

export default heroesReducer;
