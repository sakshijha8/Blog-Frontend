import { createSlice } from "@reduxjs/toolkit";
import { ISignup } from "interfaces/ISignup";


let initialState: ISignup = {
    username: "",
    email: "",
    password: "",
    phone: "",
  };

  const UserSlice = createSlice({
    name : "Signup",
    initialState,
    reducers: {
        addData: (state, action): any => {
          return (state = action.payload);
        },
  }})
export const { addData } = UserSlice.actions;
export default UserSlice.reducer;