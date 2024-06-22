import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../Api/Api";

export const getAllFeedBacks = createAsyncThunk(
  "feedbacks/getAllFeedBackstype",
  async (_, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.get(`${baseURL}/Admin-FeedBack`, {
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
export const deleteFeedBack = createAsyncThunk(
  "feedbacks/delete",
  async (id, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.delete(`${baseURL}/Admin-FeedBack/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth?.token}`,
        },
      });

      const data = response.data;
      if (data.error) {
        return rejectWithValue(data);
      }

      return { data, id };
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
  feedbacks: [],
  deleted: false,
};

const feedbacksSlice = createSlice({
  name: "feedbacks",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.error = null;
      state.deleted = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllFeedBacks.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllFeedBacks.fulfilled, (state, action) => {
        state.loading = false;
        state.feedbacks = action.payload?.data;
        state.error = null;
      })
      .addCase(getAllFeedBacks.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      })
      .addCase(deleteFeedBack.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteFeedBack.fulfilled, (state, action) => {
        const NewData = state.feedbacks.filter(
          (ele) => ele?.id !== action.payload?.id
        );
        state.loading = false;
        state.feedbacks = NewData;
        state.deleted = true;
        state.error = null;
      })
      .addCase(deleteFeedBack.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      });
  },
});

export const { reset } = feedbacksSlice.actions;
const feedbacksReducer = feedbacksSlice.reducer;

export default feedbacksReducer;
