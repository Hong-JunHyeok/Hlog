import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Post } from "types/post";

export const fetchPost = createAsyncThunk(`post/fetchPost`, async () => {
  const response = await axios.get("http://localhost:8080/api/v1/post");
  return response.data;
});

export interface PostState {
  data: Post[];
  loading: boolean;
  error: boolean;
}

const initialState: PostState = {
  data: [],
  loading: false,
  error: true,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPost.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchPost.fulfilled.type]: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    },
    [fetchPost.rejected.type]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
