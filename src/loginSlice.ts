import { createSlice } from '@reduxjs/toolkit'

interface LoginState {
  user: string|null,
  pwd: string|null
}

const loginSlice = createSlice({
  name: 'login',
  initialState: { user: null } as LoginState,
  reducers: {
    login: (state,action) => state.user = action.payload,
    logout: (state) => {state.user = null},
    changePwd: (state,action) => state.pwd = action.payload
  },
})

export const {login,logout,changePwd} = loginSlice.actions;

export default loginSlice;