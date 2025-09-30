import { createSlice } from '@reduxjs/toolkit'

interface AppState {
  theme: 'light' | 'dark'
  sidebarOpen: boolean
}

const initialState: AppState = {
  theme: 'dark',
  sidebarOpen: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen
    },
    setSidebar: (state, action) => {
      state.sidebarOpen = action.payload
    },
  },
})

export const { setTheme, toggleTheme, toggleSidebar, setSidebar } =
  appSlice.actions
export default appSlice.reducer
