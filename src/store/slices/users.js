import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    users: [],
}

const users = createSlice({
    name: "users",
    initialState: INITIAL_STATE,
    reducers: {
        addUser: (state, action) => {
            if (! state.users.find((user) => user.id == action.payload.id)) {
                state.users = [...state.users, { 
                    id:action.payload.id, 
                    name: action.payload.name, 
                    email: action.payload.email,
                    userName: action.payload.userName, 
                    password: action.payload.password 
                }];
            }
            console.log(state.users)
        }
    }
})
// FUNCTIONS => Component => fire action => update data
export const { addUser } = users.actions;

export default users.reducer;