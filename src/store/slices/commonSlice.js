import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    isOpen: [], // for active default menu
    defaultId: 'default',
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true
};

const commonSlice = createSlice({
    name:"common",
    initialState,
    reducers:{
        menuToggle:(state)=> {
            state.opened = !state.opened
        }
    }
})

export const { menuToggle } = commonSlice.actions
export default commonSlice.reducer