import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: null,
  content: null,
  featuredImage: null,
  status: null,
  postId: null,
  createdAt: null,
  createdBy: null,
  userAvatar: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    createPost: (state, action) => {},
    updatePost: (state, action) => {},
    deletePost: (state, action) => {},
  },
});

export const { createPost, updatePost, deletePost } = postSlice.actions;

export default postSlice.reducer;
