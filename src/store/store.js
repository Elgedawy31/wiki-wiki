import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./actions/AuthSlice";
import usersReducer from "./actions/UsersSlice";
import homeReducer from "./actions/HomeSlice";
import { setupListeners } from '@reduxjs/toolkit/query';
import { TransactionApi } from './actions/Transaction';
import performanceReducer from "./actions/performanceSlice";
import notificationReducer from "./actions/NotificationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    home: homeReducer,
    performance: performanceReducer,
    notifications: notificationReducer,
    [TransactionApi.reducerPath]: TransactionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TransactionApi.middleware),
});

setupListeners(store.dispatch);
