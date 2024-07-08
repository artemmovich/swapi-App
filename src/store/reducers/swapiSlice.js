import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchPeople = createAsyncThunk("swapi/fetchpeople", async () => {
   const response = await fetch('https://swapi.dev/api/people/');
   return response.json()
});
const swapiSlice = createSlice({
   name: 'swapi',
   initialState: {
      people: [],
      status: 'idle',
      error: null,
      selectedPerson: null,
   },
   reducers: {
      selectPerson(state, action) {
         state.selectedPerson = action.payload
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchPeople.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(fetchPeople.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.people = action.payload.results;
         })
         .addCase(fetchPeople.rejected, (state, action) => {

            state.status = 'failed';
            state.error = action.error.message;
         });

   },
})
export default swapiSlice.reducer;

export const { selectPerson } = swapiSlice.actions;