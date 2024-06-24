import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../Api/Api";

export const addSticker = createAsyncThunk(
  "interests/addSticker",
  async (values, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.post(`${baseURL}/Stickers`, values, {
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
  StickerAdded:false,
};

const interestsSlice = createSlice({
  name: "interests",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.error = null;
      state.StickerAdded = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addSticker.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addSticker.fulfilled, (state, action) => {
        state.loading = false;
        state.StickerAdded = true;
        state.error = null;
      })
      .addCase(addSticker.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      });
  },
});

export const { reset } = interestsSlice.actions;
const interestsReducer = interestsSlice.reducer;

export default interestsReducer;
