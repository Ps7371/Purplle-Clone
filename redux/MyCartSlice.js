import {createSlice} from '@reduxjs/toolkit';

const MyCartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProductToMyCart(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.key == action.payload.key) {
          myindex = index;
        }
      });
      if (myindex == -1) {
        state.push({
          carousel: action.payload.carousel,
          company: action.payload.company,
          description:action.payload.description,
          discount: action.payload.discount,
          image: action.payload.image,
          key: action.payload.key,
          price: action.payload.price,
          qty: action.payload.qty+1,
          ratings: action.payload.ratings,
          reviews: action.payload.reviews,
        });
      } else {
        state[myindex].qty = state[myindex].qty + 1;
      }
    },
    removeMyCartItem(state,action){
      let myindex = -1;
      state.map((item, index) => {
        if (item.key == action.payload.key) {
          myindex = index;
        }
      });
      if(myindex==-1){

      }
      else{
        state[myindex].qty = state[myindex].qty -1;

      }


    },
    deleteMyCartItem(state,action){
    return  (state=state.filter(item=>item.key!==action.payload))
    }

  },
});

export const {addProductToMyCart,removeMyCartItem,deleteMyCartItem} = MyCartSlice.actions;
export default MyCartSlice.reducer;
