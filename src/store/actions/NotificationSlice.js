import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../Api/Api";

export const AddNotification = createAsyncThunk(
  "notification/add",
  async (values , { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();

      const response = await axios.post(
        `${baseURL}/Admin-send-notifications`,

        values,
        {
          headers: {
            "Content-Type": 'multipart/form-data',
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
  notificationSent: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.error = null;
      state.notificationSent = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AddNotification.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(AddNotification.fulfilled, (state, action) => {
      state.loading = false;
      state.notificationSent = true;
      state.error = null;
    });
    builder.addCase(AddNotification.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload?.message;
    });
  },
});

export const { reset, removeToken } = notificationSlice.actions;
const notificationReducer = notificationSlice.reducer;

export default notificationReducer;
