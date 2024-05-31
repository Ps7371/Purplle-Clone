import { createSlice } from "@reduxjs/toolkit";

const MyProductSlice=createSlice({
    name:"product",
    initialState:[],
    reducers:{
      increasedQty(state,action){
let myindex=-1
state.map((item,index)=>{
    if(item.key==action.payload){
        myindex=index
    }
})
if(myindex==-1){

}
else{
    state[myindex].qty=state[myindex].qty+1
}
      },
        
    }
})

export const {increasedQty} =MyProductSlice.actions
export default MyProductSlice.reducer