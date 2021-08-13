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
  (page) => {
    const response = axios.get(getPopularFilmsUrl(page));
    return response;
  }
);

const filmListSlice = createSlice({
  name: FILMS,
  initialState,
  reducers: {
    nextPage(state) {
      state.page++;
      console.log(state.page, 'page inside [next page]');
    },
    previousPage(state) {
      if (state.page > 0) {
        state.page++;
        return;
      }
      state.page = 0;
    },
  },
  extraReducers: {
    [getPopularFilms.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getPopularFilms.fulfilled]: (state, { payload }) => {
      const {
        data: { results },
      } = payload;
      state.status = 'success';
      state.popularFilmList = [...state.popularFilmList, ...results];
    },
    [getPopularFilms.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});
export const { previousPage, nextPage } = filmListSlice.actions;
export default filmListSlice.reducer;
