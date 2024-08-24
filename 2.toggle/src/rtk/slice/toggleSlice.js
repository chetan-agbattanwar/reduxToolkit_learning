import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    color : "dark",
    // backGround : "light"
}

const ToggleSlice = createSlice({
    name:'toggleSlice',
    initialState,
    reducers:{
        toggleColor : (state)=> {
            state.color = state.color === 'dark' ? 'light' : 'dark';
            // console.log("clicked");
        },
        // backGround : (state)=>state.color==='light'?'dark':'light'
    }
})

export const {toggleColor} = ToggleSlice.actions
export const toggleReducer = ToggleSlice.reducer