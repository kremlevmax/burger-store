import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthorized: false, responseStatus: null };

export const AuthorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {},
});
