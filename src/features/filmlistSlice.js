import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getPopularFilms } from '../filmAPI/APIBase';

const initialState = {
  posts: [],
  page: 1,
  status: 'idle',
  error: null,
};
const popularFilmsUrl = getPopularFilms(1);

export const fetchPopularFilms = createAsyncThunk(popularFilmsUrl, () => {
  const response = axios.get(getPopularFilms);
  return response.posts;
});
