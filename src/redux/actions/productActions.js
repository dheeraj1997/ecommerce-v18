import {
  GET_PRODUCTS,
} from '../../constants/actions';

export const getProducts = (lastRef) => ({
  type: GET_PRODUCTS,
  payload: lastRef
});

