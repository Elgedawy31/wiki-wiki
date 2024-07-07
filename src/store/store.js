import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./actions/AuthSlice";
import usersReducer from "./actions/UsersSlice";
import homeReducer from "./actions/HomeSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TransactionApi } from "./actions/Transaction";
import performanceReducer from "./actions/performanceSlice";
import notificationReducer from "./actions/NotificationSlice";
import managementReducer from "./actions/ManagementSlice";
import adsReducer from "./actions/AdsSlice";
import feedbacksReducer from "./actions/FeefBackSlice";
import interestsReducer from "./actions/InterestsSlice";
import profileReducer from "./actions/ProfileSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    home: homeReducer,
    performance: performanceReducer,
    notifications: notificationReducer,
    management: managementReducer,
    ads: adsReducer,
    feedback: feedbacksReducer,
    interests: interestsReducer,
    profile: profileReducer,
    [TransactionApi.reducerPath]: TransactionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TransactionApi.middleware),
});

setupListeners(store.dispatch);
