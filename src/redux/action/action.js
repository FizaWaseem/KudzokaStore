import * as actionTypes from './actionTypes';

export const addTocart=(itemId)=>{
    return { 
        type:actionTypes.ADD_TO_CART,
      payload:{
        id:itemId
    },
};
};
export const removeFromcart=(itemId)=>{
    return{
        type:actionTypes.REMOVE_FROM_CART,
        payload:{
            id:itemId,
        },
    };
};
export const increaseValue=(itemId)=>{
    return {
        type:actionTypes.INCREASE_AMOUNT,
        payload:{
            id:itemId,
        },
    };
   
};
export const decreasValue=(itemId)=>{
    return {
        type:actionTypes.DECREASE_AMOUNT,
        payload:{
            id:itemId,
           amount:itemId,
        },
    };
   
};
export const LoadItem=(items)=>{
    return {
        type:actionTypes.LOAD_CURRENT_ITEM,
        payload:items,
        
    };
};
  
   
    
   
