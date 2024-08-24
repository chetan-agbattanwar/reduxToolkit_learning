import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../slice/counterSlice'
import {useEffect} from 'react'

export const store = configureStore({
    reducer: counterReducer
})