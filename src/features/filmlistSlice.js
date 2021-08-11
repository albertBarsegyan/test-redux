import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getPopularFilmsUrl } from '../filmAPI/APIBase';

const FILMS = 'films';
const initialState = {
  popularFilmList: [],
  page: 1,
  status: 'idle',
  error: null,
};
export const getPopularFilms = createAsyncThunk(
  `${FILMS}/getPopularFilms`,
  () => {
    const response = axios.get(getPopularFilmsUrl(initialState.page));
    return response;
  }
);

const filmListSlice = createSlice({
  name: FILMS,
  initialState,

  extraReducers: {
    [getPopularFilms.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getPopularFilms.fulfilled]: (state, { payload }) => {
      const {
        data: { results },
      } = payload;
      state.status = 'success';

      state.popularFilmList = results;
    },
    [getPopularFilms.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default filmListSlice.reducer;
