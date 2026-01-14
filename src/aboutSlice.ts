import { createSlice } from '@reduxjs/toolkit'

interface AboutState {
  description: string
}

export const aboutSlice = createSlice({
  name: 'about',
  initialState: { description: "hello" } as AboutState,
  reducers: {
    changeDescription: (state, action) => {
      state.description = action.payload
    }
  },
  selectors: {
    selectDescription: state => state.description
  }
})

export const { changeDescription } = aboutSlice.actions;

export const { selectDescription } = aboutSlice.selectors;

export default aboutSlice.reducer;