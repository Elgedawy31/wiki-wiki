import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../Api/Api";

export const adminLives = createAsyncThunk(
  "performance/adminLives",
  async (_, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.get(`${baseURL}/Admin-lives`, {
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
export const addCategory = createAsyncThunk(
  "performance/addCategory",
  async (formData, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.post(
        `${baseURL}/Admin-target-categories`,
        formData,
        {
          headers: {
            // "Content-Type": "application/json",
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
export const addTarget = createAsyncThunk(
  "performance/addtarget",
  async (formData, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.post(
        `${baseURL}/Admin-targets`,
        formData,
        {
          headers: {
            // "Content-Type": "application/json",
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
export const updateTarget = createAsyncThunk(
  "performance/updatetarget",
  async ({formData , id}, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.post(
        `${baseURL}/Admin-targets/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "_method": "PATCH",
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
export const deleteTargetCat = createAsyncThunk(
  "performance/deleteTarget",
  async (id, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.delete(
        `${baseURL}/Admin-targets/${id}`,
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
export const getAllCategories = createAsyncThunk(
  "performance/getAllCategories",
  async (_, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.get(`${baseURL}/Admin-target-categories`, {
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
  livesDetails: {},
  allCategories: [],
  categoryAdded: false,
  targetAdded: false,
  targetDeleted: false,
  targetUpdated: false,
};

const performanceSlice = createSlice({
  name: "performance",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.error = null;
      state.categoryAdded = false;
      state.targetAdded= false;
      state.targetDeleted= false;
      state.targetUpdated= false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLives.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(adminLives.fulfilled, (state, action) => {
        state.loading = false;
        state.livesDetails = action.payload;
        state.error = null;
      })
      .addCase(adminLives.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      })
      .addCase(addCategory.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryAdded = true;
        state.error = null;
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      })
      .addCase(addTarget.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTarget.fulfilled, (state, action) => {
        state.loading = false;
        state.targetAdded = true;
        state.error = null;
      })
      .addCase(addTarget.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      })
      .addCase(updateTarget.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTarget.fulfilled, (state, action) => {
        state.loading = false;
        state.targetUpdated = true;
        state.error = null;
      })
      .addCase(updateTarget.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      })
      .addCase(deleteTargetCat.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTargetCat.fulfilled, (state, action) => {
        state.loading = false;
        state.targetDeleted = true;
        state.error = null;
      })
      .addCase(deleteTargetCat.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      })
      .addCase(getAllCategories.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.allCategories = action?.payload;
        state.error = null;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      });
  },
});

export const { reset } = performanceSlice.actions;
const performanceReducer = performanceSlice.reducer;

export default performanceReducer;
