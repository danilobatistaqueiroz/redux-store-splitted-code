import { createSlice } from '@reduxjs/toolkit'

interface ColorState {
  colour: string
}

const colorSlice = createSlice({
  name: 'color',
  initialState: { colour: "#0aa" } as ColorState,
  reducers: {
    change: (state, action) => state.colour = action.payload
  },
  selectors: {
    selectValue: state => state.colour
  }
})

export default colorSlice;