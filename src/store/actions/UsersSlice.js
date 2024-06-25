import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookie from "cookie-universal";
import { baseURL } from "../../Api/Api";
const cookie = Cookie();

export const getAllUsers = createAsyncThunk(
  "users/getall",
  async (value, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.get(`${baseURL}/Admin-users?name=${value}`, {
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
export const getUser = createAsyncThunk(
  "users/getUser",
  async (value, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.get(`${baseURL}/Admin-users/${value}`, {
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
export const getUsersVerified = createAsyncThunk(
  "users/verified",
  async ({ type, value }, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.get(
        `${baseURL}/Admin-users?type=${type}&name=${value}`,
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
export const makeUserWarning = createAsyncThunk(
  "users/makeWarning",
  async ({ user_id }, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.post(
        `${baseURL}/Admin-users-warning`,
        { user_id, text: "make user warning" },
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
export const makeUserBanned = createAsyncThunk(
  "users/makeBanned",
  async ({ user_id }, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const response = await axios.post(
        `${baseURL}/Admin-users-ban`,
        { user_id, text: "make user warning" },
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
  userDetails: {},
  allUsers: [],
  isWarning: false,
  isBanned: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.error = null;
      state.isWarning = false;
      state.isBanned = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.allUsers = action.payload?.data;
        state.error = null;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      })

      .addCase(getUsersVerified.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsersVerified.fulfilled, (state, action) => {
        state.loading = false;
        state.allUsers = action.payload?.data;
        state.error = null;
      })
      .addCase(getUsersVerified.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      })
      .addCase(getUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userDetails = action.payload?.data;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      })
      .addCase(makeUserWarning.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(makeUserWarning.fulfilled, (state, action) => {
        state.loading = false;
        state.isWarning = true;
        state.error = null;
      })
      .addCase(makeUserWarning.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      })
      .addCase(makeUserBanned.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(makeUserBanned.fulfilled, (state, action) => {
        state.loading = false;
        state.isBanned = true;
        state.error = null;
      })
      .addCase(makeUserBanned.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      });
  },
});

export const { reset } = usersSlice.actions;
const usersReducer = usersSlice.reducer;

export default usersReducer;
