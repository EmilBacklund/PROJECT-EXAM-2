import { createSlice } from "@reduxjs/toolkit";

const userMenuInfoSlice = createSlice({
  name: "userMenuInfo",
  initialState: {
    userMenuInfo: null,
  },
  reducers: {
    setUserMenuInfo: (state, action) => {
      state.userMenuInfo = action.payload;
    },
  },
});

export const { setUserMenuInfo } = userMenuInfoSlice.actions;
export default userMenuInfoSlice.reducer;
