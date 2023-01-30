import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../ProductData"
const initialState = { 
    cart: [],
    items: ProductData,
    totalQty:0,
    totalPrice: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action) =>{
            let index = state.cart.findIndex((item)=>item.id === action.payload.id);
            if(index >= 0){
                state.cart[index].Qty += 1;
            }else{
                state.cart.push(action.payload)
            }
        },
        getCartTotal: (state) => {
            let { totalQty, totalPrice } = state.cart.reduce(
              (cartTotal, cartItem) => {
                console.log("carttotal", cartTotal);
                console.log("cartitem", cartItem);
                const { price, Qty } = cartItem;
                console.log(price, Qty);
                const itemTotal = price * Qty;
                cartTotal.totalPrice += itemTotal;
                cartTotal.totalQty += Qty;
                return cartTotal;
              },
              {
                totalPrice: 0,
                totalQty: 0,
              }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQty = totalQty;
        },
        deleteItem: (state, action) =>{
            state.cart = state.cart.filter((item)=> item.id !== action.payload)
        },
        increaseQty: (state, action) => {
            state.cart = state.cart.map((item)=>{
                if(item.id === action.payload){
                    return {...item, Qty:item.Qty + 1}
                }
                return item;
            })
        },
        decreaseQty: (state, action) => {
            state.cart = state.cart.map((item)=>{
                // if(item.Qty == 0) return;
                if(item.id === action.payload){
                    return {...item, Qty:item.Qty === 0 ? 0: item.Qty - 1}
                }
                return item;
            })
        }
    }
});
// console.log(cartSlice)
export const {addToCart, getCartTotal, deleteItem, increaseQty, decreaseQty} = cartSlice.actions;
export default cartSlice.reducer;