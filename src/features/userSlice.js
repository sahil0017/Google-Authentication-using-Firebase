import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: 'user',
    initialState : {
        userName: null ,
        userEmail: null
    },
    reducers: {
        setActiveUser:(state , action) => (
            state.userName=action.payload.userName,
            state.userEmail=action.payload.userEmail
        ),
        setUserLogoutState: state => (
            state.userEmail=null,
            state.userName=null
        )
        
    
    }
});

export const { setActiveUser , setUserLogoutState } = userSlice.actions

export const selectUserName = (state) => state.user.userName;
export const selectUserEmail = state => state.user.userEmail;

export default userSlice.reducer