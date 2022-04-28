import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk('api/gallery',async(obj,{state,error})=>{
  const response = await fetch(
    "https://fakestoreapi.com/products"
  );
  
  const formattedResponse = await response.json();
  console.log(formattedResponse)
  return formattedResponse;
})  
export const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    photos: [],
    isLoading: false,
  },
  extraReducers: {
    [getPhotos.fulfilled]: (state, action) => {
      state.photos = action.payload;
      state.isLoading = false;
    },
    [getPhotos.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const actions = gallerySlice.actions;
export default gallerySlice;
