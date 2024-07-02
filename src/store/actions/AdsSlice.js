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
export const getAdsDetails = createAsyncThunk(
  "ads/getadsdetails",
  async (id, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.get(`${baseURL}/Admin-Ads/${id}`, {
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
export const updateAdDetails = createAsyncThunk(
  "ads/updateadddetails",
  async ({ type, id }, { rejectWithValue, getState }) => {
    const { auth } = getState();
    const body = {
      _mothod: "PATCH",
      status: type,
    };
    try {
      const response = await axios.patch(`${baseURL}/Admin-Ads/${id}`, body, {
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
export const deleteAd = createAsyncThunk(
  "ads/deletead",
  async (id, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.delete(`${baseURL}/Admin-Ads/${id}`, {
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
  adsDetails: {},
  deleted: false,
  updated: false,
};

const adsSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.error = null;
      state.isWarning = false;
      state.deleted = false;
      state.updated = false;
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
      })
      .addCase(getAdsDetails.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAdsDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.adsDetails = action.payload;
        state.error = null;
      })
      .addCase(getAdsDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      })
      .addCase(deleteAd.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAd.fulfilled, (state, action) => {
        state.loading = false;
        state.deleted = true;
        state.error = null;
      })
      .addCase(deleteAd.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      })
      .addCase(updateAdDetails.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAdDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.updated = true;
        state.error = null;
      })
      .addCase(updateAdDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      });
  },
});

export const { reset } = adsSlice.actions;
const adsReducer = adsSlice.reducer;

export default adsReducer;
