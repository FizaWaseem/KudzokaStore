import { combineReducers } from "redux";
import cartReducer from "./cart_reducer";

const reducers= combineReducers({
 shop:cartReducer
});
export default reducers;