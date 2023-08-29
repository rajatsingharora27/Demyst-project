import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import responseSlice from "./responseSlice";
const store = configureStore({
  reducer: {
    companyInfo: apiSlice,
    loanDetailsInfo: responseSlice,
  },
});

export default store;
