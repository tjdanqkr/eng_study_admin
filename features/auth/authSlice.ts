import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppState, AppThunk } from '../../app/store';
import { fetchLogin } from './authApi';

export interface AuthState {
  id: string;
  name: string;
  status: 'idle' | 'loading' | 'failed';
  token: string;
  rejectMessage: string;
}

export interface user {
  id: string;
  password: string;
}

const initialState: AuthState = {
  id: '',
  name: '',
  status: 'idle',
  token: '',
  rejectMessage: '',
};
export interface userInfomation {
  name: '';
  token: '';
}

export const LoginAsync = createAsyncThunk(
  'login/signin',
  async (user: user) => {
    const response = await fetchLogin(user);
    return response.data;
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    loginAction: (state, action: PayloadAction<userInfomation>) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(LoginAsync.pending, (state) => {
        state.status = 'loading';
        state.rejectMessage = '';
      })
      .addCase(LoginAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.token = action.payload.token;
        state.name = action.payload.name;
        state.rejectMessage = '';
      })
      .addCase(LoginAsync.rejected, (state) => {
        state.rejectMessage = 'Login fail';
      });
  },
});

export const { loginAction } = authSlice.actions;

export const selectToken = (state: AppState) => state.auth.token;
export const selectRejectMessage = (state: AppState) =>
  state.auth.rejectMessage;

export default authSlice.reducer;
