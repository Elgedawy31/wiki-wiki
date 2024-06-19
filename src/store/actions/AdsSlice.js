import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../Api/Api";

export const getAds = createAsyncThunk(
  "ads/getadstype",
  async (type, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.get(`${baseURL}/Admin-Ads-view/${type}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth?.token}`,
        },
      });

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
  ads: [],
};

const adsSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.error = null;
      state.isWarning = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAds.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAds.fulfilled, (state, action) => {
        state.loading = false;
        state.ads = action.payload?.data;
        state.error = null;
      })
      .addCase(getAds.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      });
  },
});

export const { reset } = adsSlice.actions;
const adsReducer = adsSlice.reducer;

export default adsReducer;
