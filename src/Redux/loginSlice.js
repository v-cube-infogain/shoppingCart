import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    userName: "",
    password: "",
    userDetails: {
        firstName: "",
        lastName: "",
        gender: "",
        phone: "",
        email: "",
        password: ""
    }
};

const loginSlice = createSlice({
    name: 'login',
    initialState: INITIAL_STATE,
    reducers: {
        updateUserName: (state, action) => {
            state.userName = action.payload
        },
        updatePassword: (state, action) => {
            state.password = action.payload;
        },
        updateUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
        updateProfile: (state, action) => {
            console.log("action", action);
            state.userDetails = {...state.userDetails, ...action.payload};
        }
    }
});

export const { updateUserName, updatePassword, updateUserDetails, updateProfile } = loginSlice.actions;
export default loginSlice.reducer;

// const obj1 = { name: "venkat"}
// const obj2 = { age: 30}
// const obj3 = { ...obj1, ...obj2}
