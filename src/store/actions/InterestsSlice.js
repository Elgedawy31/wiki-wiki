import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../Api/Api";

export const getAllInterests = createAsyncThunk(
  "interests/getallinterests",
  async (_, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.get(`${baseURL}/admin/categories`, {
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
export const addInterest = createAsyncThunk(
  "interests/addinterest",
  async (values, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.post(`${baseURL}/admin/categories`, values, {
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
export const deleteInterest = createAsyncThunk(
  "interests/deleteinterest",
  async (id, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.delete(`${baseURL}/admin/categories/${id}`, {
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
export const deleteSticker = createAsyncThunk(
  "interests/deletesticker",
  async (id, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.delete(`${baseURL}/admin/stikers/${id}`, {
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
export const getAllStickers = createAsyncThunk(
  "interests/getallstickers",
  async (_, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.get(`${baseURL}/admin/stikers`, {
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
export const addSticker = createAsyncThunk(
  "interests/addSticker",
  async (values, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.post(`${baseURL}/admin/stikers`, values, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${auth?.token}`,
        },
      });

      const data = response.data;
  
      if (data.error) {
        return rejectWithValue(data);
      }else if (data.status ===409){
        return rejectWithValue({
          message: data?.message || "Sticker already exists",
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
      }else if (error.response.data?.errors['img.0'][0]){
        return rejectWithValue({
          message: error?.response?.data?.errors['img.0'][0],
        });
      }
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  StickerAdded: false,
  InterestAdded: false,
  allInterests: [],
  allStickers: [],
  DeleteInterest: false,
  DeleteSticker: false,
};

const interestsSlice = createSlice({
  name: "interests",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.error = null;
      state.StickerAdded = false;
      state.InterestAdded = false;
      state.DeleteInterest = false;
      state.DeleteSticker= false;
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
      })
      .addCase(addInterest.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addInterest.fulfilled, (state, action) => {
        state.loading = false;
        state.InterestAdded = true;
        state.error = null;
      })
      .addCase(addInterest.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      })
      .addCase(getAllInterests.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllInterests.fulfilled, (state, action) => {
        state.loading = false;
        state.allInterests = action?.payload;
        state.error = null;
      })
      .addCase(getAllInterests.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      })
      .addCase(getAllStickers.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllStickers.fulfilled, (state, action) => {
        state.loading = false;
        state.allStickers = action?.payload?.data;
        state.error = null;
      })
      .addCase(getAllStickers.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      })
      .addCase(deleteInterest.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteInterest.fulfilled, (state, action) => {
        state.loading = false;
        state.DeleteInterest = true;
        state.error = null;
      })
      .addCase(deleteInterest.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      })
      .addCase(deleteSticker.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSticker.fulfilled, (state, action) => {
        state.loading = false;
        state.DeleteSticker = true;
        state.error = null;
      })
      .addCase(deleteSticker.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      });
  },
});

export const { reset } = interestsSlice.actions;
const interestsReducer = interestsSlice.reducer;

export default interestsReducer;
