import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    user: JSON.parse(localStorage.getItem('user')) || null,
    isLoggedIn: false,
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
            state.isLoggedIn = true;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
            localStorage.removeItem('user');
        }
    }
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;

export const loginUser = (credentials) => async (dispatch) => {
    dispatch(loginStart());
    // try {
    const user = await JSON.parse(localStorage.getItem('user'));
    console.log("Creds: ", credentials)
    console.log("email: ", user.email === credentials.email)
    console.log("pass: ", user.password === credentials.password)


    if (user.email === credentials.email && user.password === credentials.password) {
        console.log("USer: ", user)
        dispatch(loginSuccess({...user, isLoggedIn: true}));
    } else {
        throw new Error('Invalid email or password');
    }
    // } catch (error) {
    //     dispatch(loginFailure(error.message));
    // }
};

export const logoutUser = () => (dispatch) => {
    dispatch(logout());
};

export default userSlice.reducer;