import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // Redux Toolkit uses Immer BTS.
            // We have to mutate the state in new Redux
            state.items.push(action.payload);

            // Vanilla Redux(older) => DON'T MODIFY STATE => earlier returning was kind of mandatory
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            // state.items.length = 0;  // originalState = []

            console.log(current(state));

            //RTK says either mutate the existing state OR return a new state
            return { items: [] };  // it replaces the originalState with {items: []}

            // Below code doesn't work because of Immer. You are not actually mutating the State
            // state = 0;  // Not allowed
        }
    }
});
// In cartSlice we get
// {
//     actions: {
//         addItem, removeItem, clearCart
//     },
//     reducer
// }

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;