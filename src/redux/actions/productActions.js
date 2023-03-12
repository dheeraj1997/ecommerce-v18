import {
  GET_PRODUCTS, GET_PRODUCTS_SUCCESS,
} from '../../constants/actions';

export const getProducts = (lastRef) => ({
  type: GET_PRODUCTS,
  payload: lastRef
});

export const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products
});

