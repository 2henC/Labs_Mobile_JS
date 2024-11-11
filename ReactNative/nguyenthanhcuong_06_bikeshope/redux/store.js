import {configureStore} from '@reduxjs/toolkit'
import bikeReducer from './slice'

export const store = configureStore({
  reducer: {
    bike: bikeReducer
  }
})