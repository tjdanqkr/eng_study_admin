import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
  PayloadAction,
} from "@reduxjs/toolkit";

import type { AppState, AppThunk } from "../../app/store";
import { saveToken } from "../../lib/token";
import { fetchLogin } from "./authApi";

export interface AuthState {
  id: string;
  name: string;
  status: "idle" | "loading" | "failed";
  token: string;
  rejectMessage: string;
}

export interface user {
  id: string;
  password: string;
}

const initialState: AuthState = {
  id: "",
  name: "",
  status: "idle",
  token: "",
  rejectMessage: "",
};
export interface userInfomation {
  name: "";
  token: "";
}

export const LoginAsync = createAsyncThunk(
  "login/signin",
  async (user: user, { rejectWithValue }) => {
    const response = await fetchLogin(user);
    console.log(response);
    if (response.status === 201) {
      saveToken(response.data.accessToken);
      return response.data.name;
    } else {
      return rejectWithValue("Login fail");
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(LoginAsync.pending, (state) => {
        state.status = "loading";
        state.rejectMessage = "";
      })
      .addCase(LoginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.name = action.payload;
        state.rejectMessage = "";
      })
      .addCase(LoginAsync.rejected, (state) => {
        state.status = "failed";
        state.rejectMessage = "Login fail";
      });
  },
});

export const selectToken = (state: AppState) => state.auth.token;
export const selectRejectMessage = (state: AppState) =>
  state.auth.rejectMessage;

export default authSlice.reducer;
