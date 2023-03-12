import {GET_PRODUCTS} from "../../constants/actions";
import {call, put, select} from 'redux-saga/effects';
import firebase from "../../services/firebase";
import {setLoading, setRequestStatus} from "../actions/miscActions";
import {displayActionMessage} from "../../helpers/utils";
import {getProductsSuccess} from '../actions/productActions'

function* initRequest() {
  yield put(setLoading(true));
  yield put(setRequestStatus(null));
}

function* handleError(e) {
  yield put(setLoading(false));
  yield put(setRequestStatus(e?.message || 'Failed to fetch products'));
  console.log('ERROR: ', e);
}

function* handleAction(location, message, status) {
  if (location) yield call(history.push, location);
  yield call(displayActionMessage, message, status);
}

function* productSaga({ type, payload }) {
  switch (type) {
    case GET_PRODUCTS:
      try {
        yield initRequest();
        const state = yield select();
        const result = yield call(firebase.getProducts, payload);

        if (result.products.length === 0) {
          handleError('No items found.');
        } else {
          yield put(getProductsSuccess({
            products: result.products,
            lastKey: result.lastKey ? result.lastKey : state.products.lastRefKey,
            total: result.total ? result.total : state.products.total
          }));
          yield put(setRequestStatus(''));
        }
        // yield put({ type: SET_LAST_REF_KEY, payload: result.lastKey });
        yield put(setLoading(false));
      } catch (e) {
        console.log(e);
        yield handleError(e);
      }
      break;
  }
}

export default productSaga;
