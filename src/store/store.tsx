import {  configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slice/UserSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, UserSlice);

export const store = configureStore({
  reducer: {
    userinfo: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
