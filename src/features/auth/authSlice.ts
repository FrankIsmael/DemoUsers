import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface AuthState {
  isAuth: string | null;
  status: 'idle' | 'loading' | 'failed';
  error: string | undefined;
}

const initialState: AuthState = {
  isAuth: window.sessionStorage.getItem('token') || null,
  status: 'idle',
  error: undefined,
};

interface RequestBody {
  email: string;
  password: string;
}

interface LoginAsyncResponse {
  token: string;
}

interface ErrorResponse {
  message: string;
}
// The function below is called a thunk and allows us to perform async logic.
export const loginAsync = createAsyncThunk<
  LoginAsyncResponse,
  RequestBody,
  {
    rejectValue: ErrorResponse;
  }
>('auth/fetchAuth', async (body, thunkApi) => {
  const response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(body),
  });

  if (response.status !== 200) {
    // Return the error message:
    return thunkApi.rejectWithValue({
      message: 'Failed to Login',
    });
  }
  const data = response.json();
  // The value we return becomes the `fulfilled` action payload
  return data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    removeAuth: (state) => {
      state.isAuth = null;
      window.sessionStorage.removeItem('token');
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.isAuth = action.payload.token;
        window.sessionStorage.setItem('token', action.payload.token);
      })
      .addCase(loginAsync.rejected, (state, { payload }) => {
        state.error = payload?.message;
        state.status = 'idle';
      });
  },
});

export const { removeAuth } = authSlice.actions;

// The function below is called a selector and allows us to select a value from the state
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;