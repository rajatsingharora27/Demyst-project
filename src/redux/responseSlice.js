import { createSlice } from "@reduxjs/toolkit";

const responseSlice = createSlice({
  name: "loanDetailsInfo",
  initialState: [],
  reducers: {
    loanDetails: (state, action) => {
      //   console.log(state);
      //   console.log(action.payload);
      state = action.payload;
      console.log(state, "state");
      console.log(state[0], "state1");
      //   state = { ...action.payload };
    },
  },
});

export const { loanDetails } = responseSlice.actions;

export default responseSlice.reducer;
