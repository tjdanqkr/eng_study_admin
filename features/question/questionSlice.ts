import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllQuestion } from "./questionApi";

export interface QuestionState {
  num: number;
  title: string;
  question: Problem;
  bigCategory: number;
  middleCategory: number;
  endCategory: number;
}

export type Problem = {
  survey: string[];
  translation: string[];
};
export interface QuestionInitialState {
  question: QuestionState[];
  status: "idle" | "loading" | "failed";
}

const initialState: QuestionInitialState = {
  status: "loading",
  question: [],
};

export const getAllQuestionAsync = createAsyncThunk(
  "question/allQuestion",
  async () => {
    const response = await getAllQuestion();
    return response.data;
  }
);

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllQuestionAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllQuestionAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.question = action.payload;
      })
      .addCase(getAllQuestionAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default questionSlice.reducer;
