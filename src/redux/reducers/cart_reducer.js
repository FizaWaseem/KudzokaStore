import { item } from '../../Components/data/item';
import * as actionTypes from '../action/actionTypes';



const INITIAL_STATE={
    product: item,
    cart:[],
    total:0.0,
    amount:0,
    currentItem:null,
};
const cartReducer=(state=INITIAL_STATE,action)=>{

switch(action.type){
    case actionTypes.ADD_TO_CART:
       
        // Get the item data from the product array
        const itemData=state.product.find(items=>items.id === action.payload.id);
        // check if item is in cart already
        const inCart=state.cart.find((data)=> data.id === action.payload.id ? true : false);
        return{
            ...state,
            cart: inCart ? state.cart.map(itemData=>itemData.id === action.payload.id ? {...itemData,amount:itemData.amount+1}
                :itemData)
                : [...state.cart,{...itemData,amount:1}],
                    };
        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
               cart: state.cart.filter(items=> items.id !== action.payload.id ),
            };
            case actionTypes.INCREASE_AMOUNT:
                let tempdata= state.cart.map(items=> {
                    if (items.id === action.payload.id) {
                        items= {...items,amount:items.amount+1};
                    }
                return items;
});
                return {
                    ...state,cart: tempdata
                };
                case actionTypes.DECREASE_AMOUNT:
                    let tempData= state.cart.map(items=> {
                        if (items.id === action.payload.id) {

                            if(items.amount === 1)
                            {
                              return{   ...state,
                                cart: state.cart.filter(items=> items.id !== action.payload.id ),
                              } ; }
                              else{
                                  return  items= {...items,amount:items.amount-1};
                              }
                           
                        }
                    return items;
    });
                    return {
                        ...state,cart: tempData
                    };
                    case actionTypes.LOAD_CURRENT_ITEM:
                        return {
                            ...state,
                            currentItem:action.payload,
                        };
                        case actionTypes.Get_TOTAL:
                            let {total,amount}=state.cart.reduce(
                                (cartTotal,cartItem) => {
                                const {price,amount}=cartItem;
                                const itemTotal = price * amount;
                                cartTotal.total += itemTotal; 
                                cartTotal.amount +=amount;
                                return cartTotal;
                            },
                            {
                                total:0,
                                amont:0
                            });
                            return {
                                ...state,total,amount
                            };
                      
                            
                        default:
                            return state;  //which always return oldstate
}

  
};
export default cartReducer;