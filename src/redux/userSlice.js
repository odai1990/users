import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loader: true,
    users: [],
    dataRow: {},
};

export const userSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        setDataRow: (state, action) => {
            state.dataRow = action.payload;
        },
        setLoader: (state, action) => {
            state.loader = action.payload;
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setDataRow, setLoader, setUsers } = userSlice.actions;

export default userSlice.reducer;
