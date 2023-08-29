import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "companyInfo",
  initialState: { info: {} },
  reducers: {
    addCompanyInfo: (state, action) => {
      state.info = { ...action.payload };
    },
  },
});

export const { addCompanyInfo } = apiSlice.actions;

export default apiSlice.reducer;
