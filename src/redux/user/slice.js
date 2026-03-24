import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: 1,
    name: "Matheus Fraga",
    email: "teste@teste.com",
    address: null,
  }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
     
      }
});

export default userSlice.reducer;