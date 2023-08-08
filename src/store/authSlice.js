import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { moviesInList: [] },
    reducers: {
        ListMovie: (state, action) => {
            state.moviesInList.push(action.payload)
        },
        deleteMovie: (state, action) => {
            state.moviesInList = action.payload
        }
    },
}
)
export const { ListMovie, deleteMovie } = authSlice.actions
export default authSlice.reducer