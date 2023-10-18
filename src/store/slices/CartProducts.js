import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    products: [],
    counter_val : 0,
}

const CartProducts = createSlice({
    name: "CartCounter",
    initialState: INITIAL_STATE,
    reducers: {
        addProduct: (state, action) => {
            if (! state.products.find((product) => product.id == action.payload[0])) {
                state.products = [...state.products, {id:action.payload[0], num: action.payload[1], price:action.payload[2]}];
                console.log(state.products);
                state.counter_val = state.counter_val + 1;
            }
        },

        removeProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
            if (state.counter_val !=0){
                state.counter_val = state.counter_val - 1;
            }
            console.log(state.products)
        },
    }
})
// FUNCTIONS => Component => fire action => update data
export const { addProduct, removeProduct } = CartProducts.actions;

export default CartProducts.reducer;