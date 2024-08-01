import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { thunk } from "redux-thunk"; // Correctly import thunk as a named export
import { Reducer } from "./Reducer";

const rootReducer = combineReducers({ user: Reducer });

const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, logger), // Use a callback to add custom middleware
});

export default Store;
