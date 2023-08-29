import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "companyInfo",
  initialState: {},
  reducers: {
    addCompanyInfo: (state, action) => {
      state = { ...action.payload };
    },
  },
});

export const { addCompanyInfo } = apiSlice.actions;

export default apiSlice.reducer;
