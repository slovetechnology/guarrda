import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: 'light',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    dispatchTheme: (state, action) => {
        state.theme = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { dispatchTheme } = counterSlice.actions

export default counterSlice.reducer