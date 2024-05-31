import {configureStore} from  "@reduxjs/toolkit"
import MyCartReducer from "./redux/MyCartSlice"
import MyProductReducer from "./redux/MyProductSlice"

export const mystore=configureStore({
    reducer:{
        cart:MyCartReducer,
        product:MyProductReducer,
    },
})