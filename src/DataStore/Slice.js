import {createSlice} from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'theme',
  initialState: {
    value: window.matchMedia("(prefers-color-scheme: light)").matches ? 'light-theme' : 'dark-theme'
  },
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === 'light-theme' ? 'dark-theme' : 'light-theme';
    }
  }
});

export const { toggleTheme } = slice.actions;
export default slice.reducer;