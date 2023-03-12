import authReducer from "./authReducer";
import productsReducer from "./productReducer";
import {combineReducers} from "redux";
import miscReducer from "./miscReducer";
import cartReducer from "./cartReducer";
import filterReducer from "./filterReducer";
import profileReducer from "./profileReducer";
import checkoutReducer from "./checkoutReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  app: miscReducer,
  cart: cartReducer,
  filter: filterReducer,
  profile: profileReducer,
  checkout: checkoutReducer
})

export default rootReducer;