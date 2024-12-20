import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: 'light',
    profile: {},
    wallets: [],
    monies: [],
    money: {},
    activewallet: {},
    isLogin: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    dispatchTheme: (state, action) => {
        state.theme = action.payload
    },
    dispatchProfile: (state, action) => {
        state.profile = action.payload
    },
    dispatchWallets: (state, action) => {
        state.wallets = action.payload
    },
    dispatchLogin: (state, action) => {
        state.isLogin = action.payload
    },
    dispatchActiveWallet: (state, action) => {
        state.activewallet = action.payload
    },
    dispatchMonies: (state, action) => {
        state.monies = action.payload
    },
    dispatchMoney: (state, action) => {
        state.money = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { dispatchTheme, dispatchProfile, dispatchWallets, dispatchLogin, dispatchActiveWallet, dispatchMonies, dispatchMoney } = counterSlice.actions

export default counterSlice.reducer