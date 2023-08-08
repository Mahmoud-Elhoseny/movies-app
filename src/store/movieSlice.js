import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=95f96c0b20870a94e26195bfecaec874')
        const data = await res.json()
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
}
)

const moviesSlice = createSlice({
    name: 'movies',
    initialState: { movies: null },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload
        })


    }
})
export default moviesSlice.reducer