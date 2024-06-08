import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./actions/AuthSlice";
import usersReducer from "./actions/UsersSlice";
import homeReducer from "./actions/HomeSlice";
import { setupListeners } from '@reduxjs/toolkit/query';
import { TransactionApi } from './actions/Transaction';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    home: homeReducer,
    [TransactionApi.reducerPath]: TransactionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TransactionApi.middleware),
});

setupListeners(store.dispatch);
