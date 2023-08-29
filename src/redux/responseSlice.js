import { createSlice } from "@reduxjs/toolkit";

const responseSlice = createSlice({
  name: "loanDetailsInfo",
  initialState: {
    accoutingResponse: [],
  },
  reducers: {
    loanDetails: (state, action) => {
      state.accoutingResponse = action.payload;
    },
  },
});

export const { loanDetails } = responseSlice.actions;

export default responseSlice.reducer;
