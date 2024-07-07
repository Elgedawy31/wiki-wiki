import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../Api/Api";

export const profile = createAsyncThunk(
  "profile/getprofile",
  async (_, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.get(`${baseURL}/profile`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth?.token}`,
        },
      });

      const data = response?.data;
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
  profileDetails: {},
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(profile.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(profile.fulfilled, (state, action) => {
        state.loading = false;
        state.profileDetails = action.payload?.data;
        state.error = null;
      })
      .addCase(profile.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      })
  },
});

export const { reset } = profileSlice.actions;
const profileReducer = profileSlice.reducer;

export default profileReducer;
