import authReducer from "./authReducer";
import productsReducer from "./productReducer";
import {combineReducers} from "redux";
import miscReducer from "./miscReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  app: miscReducer,
  cart: cartReducer
})

export default rootReducer;