import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    user: JSON.parse(localStorage.getItem('user')) || null,
    error: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        }
    }
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;

export const loginUser = (credentials) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.email === credentials.email && user.password === credentials.password) {
            dispatch(loginSuccess(user));
        } else {
            throw new Error('Invalid email or password');
        }
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

export default userSlice.reducer;