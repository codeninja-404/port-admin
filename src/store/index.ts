import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'

// Import API and slices
import { api } from '@/services/api'
import authSlice from './slices/authSlice'
import appSlice from './slices/appSlice'

// Persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'app'],
  version: 1,
}

const rootReducer = combineReducers({
  auth: authSlice,
  app: appSlice,
  [api.reducerPath]: api.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
  devTools: import.meta.env.DEV,
})

export const persistor = persistStore(store)

// Infer types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
