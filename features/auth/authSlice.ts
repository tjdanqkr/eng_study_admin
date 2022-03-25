import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { AppState, AppThunk } from '../../app/store';
import { getToken, saveToken } from '../../lib/token';
import { getAllUser, login } from './authApi';

export interface AuthState {
  id: string;
  name: string;
  status: 'idle' | 'loading' | 'failed';
  token: string | null | undefined;
  rejectMessage: string;
}

export interface User {
  id: string;
  name: string;
  phoneNum: number;
  isAdmin: boolean;
  endTime: string;
  startTime: string;
  middleCategory: number;
  bigCategory: number;
}
export interface UserState {
  user: {
    id: string;
    name: string;
    phoneNum: number;
    isAdmin: boolean;
    endTime: string;
    startTime: string;
    middleCategory: number;
    bigCategory: number;
  }[];
  status: 'idle' | 'loading' | 'failed';
}
export interface CombineUserState {
  id: string;
  name: string;
  phoneNum: number;
  isAdmin: boolean;
  endTime: string;
  startTime: string;
  middleCategory: string;
  bigCategory: string;
}

export interface InitialAuthState {
  auth: AuthState;
  user: UserState;
  combineUser: CombineUserState[];
}

export interface SignIn {
  id: string;
  password: string;
}

const initialState: InitialAuthState = {
  auth: {
    id: '',
    name: '',
    status: 'loading',
    token: getToken(),
    rejectMessage: '',
  },
  user: { user: [], status: 'loading' },
  combineUser: [],
};

export interface userInfomation {
  name: '';
  token: '';
}

export const LoginAsync = createAsyncThunk(
  'auth/signin',
  async (signin: SignIn, { rejectWithValue }) => {
    const response = await login(signin);
    if (response.status === 201) {
      saveToken(response.data.accessToken);
      return response.data.name;
    } else {
      return rejectWithValue('Login fail');
    }
  },
);

export const getAllUserAsync = createAsyncThunk('auth/allUser', async () => {
  const response = await getAllUser();
  return response.data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    saveCombineData: (state, action) => {
      state.combineUser = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(LoginAsync.pending, (state) => {
        state.auth.status = 'loading';
        state.auth.rejectMessage = '';
      })
      .addCase(LoginAsync.fulfilled, (state, action) => {
        state.auth.status = 'idle';
        state.auth.name = action.payload;
        state.auth.rejectMessage = '';
      })
      .addCase(LoginAsync.rejected, (state) => {
        state.auth.status = 'failed';
        state.auth.rejectMessage = 'Login fail';
      })
      .addCase(getAllUserAsync.pending, (state) => {
        state.user.status = 'loading';
      })
      .addCase(getAllUserAsync.fulfilled, (state, action) => {
        state.user.status = 'idle';

        state.user.user = action.payload;
      })
      .addCase(getAllUserAsync.rejected, (state) => {
        state.user.status = 'failed';
      });
  },
});

export const selectToken = (state: AppState) => state.auth.auth.token;
export const selectRejectMessage = (state: AppState) =>
  state.auth.auth.rejectMessage;
export const { saveCombineData } = authSlice.actions;
export default authSlice.reducer;
