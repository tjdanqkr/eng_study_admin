import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCategory } from "./categoryApi";

export interface CategoryState {
  num: number;
  title: string;
  type: number;
  precedence: number;
  isEnd: boolean;
}

export type Problem = {
  survey: string[];
  translation: string[];
};
export interface CategoryInitialState {
  category: CategoryState[];
  status: "idle" | "loading" | "failed";
}

const initialState: CategoryInitialState = {
  status: "loading",
  category: [],
};

export const getAllCategoryAsync = createAsyncThunk(
  "category/allCategory",
  async () => {
    const response = await getAllCategory();
    return response.data;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategoryAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllCategoryAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.category = action.payload;
      })
      .addCase(getAllCategoryAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default categorySlice.reducer;
