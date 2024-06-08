import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookie from "cookie-universal";
import { baseURL } from "../../Api/Api";

export const HomeData = createAsyncThunk(
  "home/getall",
  async ({ type }, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.post(
        `${baseURL}/Admin-home`,
        { type },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth?.token}`,
          },
        }
      );

      const data = response.data;
      if (data.error) {
        return rejectWithValue(data);
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
      }
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  homeDetails: {},
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(HomeData.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(HomeData.fulfilled, (state, action) => {
        state.loading = false;
        state.homeDetails = action.payload;
        state.error = null;
      })
      .addCase(HomeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      });
  },
});

export const { reset } = homeSlice.actions;
const homeReducer = homeSlice.reducer;

export default homeReducer;
