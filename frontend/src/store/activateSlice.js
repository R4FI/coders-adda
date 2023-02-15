import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    avatar: '',
    bio:'',
};

export const activateSlice = createSlice({
    name: 'activate',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setAvatar: (state, action) => {
            state.avatar = action.payload;
        },
        setBio: (state, action) => {
            state.bio = action.payload;
        },
    },
});

export const { setName, setAvatar,setBio } = activateSlice.actions;

export default activateSlice.reducer;
