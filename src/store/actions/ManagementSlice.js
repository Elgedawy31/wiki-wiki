import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../Api/Api";

export const PickAPost = createAsyncThunk(
  "management/pickapost",
  async ({ search }, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.get(
        `${baseURL}/Admin-Content-search?name=${search}`,
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
export const deleteContent = createAsyncThunk(
  "management/deletecontent",
  async ({ id, reason }, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.delete(
        `${baseURL}/Admin-Contents/${id}?reason=${reason}`,
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
export const getContent = createAsyncThunk(
  "management/getcontent",
  async ({ id }, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.get(`${baseURL}/Admin-Contents/${id}`, {
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
  postDetails: {},
  contentDetails: {},
  deleted: false,
};

const managementSlice = createSlice({
  name: "management",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.error = null;
      state.postDetails = {};
      state.deleted = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(PickAPost.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(PickAPost.fulfilled, (state, action) => {
        state.loading = false;
        state.postDetails = action.payload;
        state.error = null;
      })
      .addCase(PickAPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      })
      .addCase(deleteContent.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContent.fulfilled, (state, action) => {
        state.loading = false;
        state.deleted = true;
        state.error = null;
      })
      .addCase(deleteContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      })
      .addCase(getContent.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getContent.fulfilled, (state, action) => {
        state.loading = false;
        state.contentDetails = action?.payload;
        state.error = null;
      })
      .addCase(getContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      });
  },
});

export const { reset } = managementSlice.actions;
const managementReducer = managementSlice.reducer;

export default managementReducer;
