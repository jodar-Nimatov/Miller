import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    email: '',
    pass: '',
    user: '',
    num: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPass(state, action) {
        state.pass = action.payload;
      },
      setUser(state, action) {
        state.user = action.payload;
      },
      setNum(state, action) {
        state.num = action.payload;
      },
  },
})

export const { setEmail, setPass, setUser, setNum } = userSlice.actions
export default userSlice.reducer