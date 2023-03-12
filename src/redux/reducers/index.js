import authReducer from "./authReducer";
import productsReducer from "./productReducer";
import {combineReducers} from "redux";
import miscReducer from "./miscReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  app: miscReducer
})

export default rootReducer;