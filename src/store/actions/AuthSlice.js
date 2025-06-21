import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookie from "cookie-universal";
import { baseURL } from "../../Api/Api";
const cookie = Cookie();


export const loginAction = createAsyncThunk(
  "auth/login",
  async ({ values }, { rejectWithValue, getState }) => {
    try {
    
      const body = {email:values.email , password:values.password}
      
      const response = await axios.post(
        `${baseURL}/email-sign-in`,

        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      if (data.error) {
        return rejectWithValue(data);
      }else if (!data.is_admin) {
      
        return rejectWithValue({
          message: "You are not authorized to access this page",
        });

      }

      return data;
    } catch (error) {
      if (error?.response.data?.error) {
        return rejectWithValue({
          message: error?.response?.data?.error,
        });
      } else if (error?.response?.data?.message) {
        return rejectWithValue({
          message: error?.response?.data?.message,
        });
      }else if (error?.response?.data?.errors?.password) {
        return rejectWithValue({
          message: error?.response?.data?.errors?.password,
        });
      }
    }
  }
);


const initialState= {
  loading: false,
  error:null ,
  token:cookie.get('token') || null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.error = null;
    },
    removeToken(state) {
      state.token = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      cookie.set('token' , action?.payload?.token)
      state.loading = false;
      state.token = action.payload?.token
      state.error = null;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload?.message;
    });
  },
});

export const { reset ,removeToken } = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
