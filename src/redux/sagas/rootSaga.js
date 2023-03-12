import { takeLatest } from 'redux-saga/effects';
import productSaga from './productSaga';
import authSaga from './authSaga';
import * as ACTION from '../../constants/actions'

function* rootSaga() {
  yield takeLatest([
    ACTION.SIGNIN,
    ACTION.SIGNUP,
    ACTION.SIGNUP_SUCCESS,
    ACTION.SIGNOUT,
    ACTION.SIGNIN_WITH_GOOGLE,
    ACTION.SIGNIN_WITH_FACEBOOK,
    ACTION.ON_AUTHSTATE_CHANGED,
    ACTION.ON_AUTHSTATE_SUCCESS,
    ACTION.ON_AUTHSTATE_FAIL,
    ACTION.RESET_PASSWORD
  ], authSaga);
  yield takeLatest([
    ACTION.ADD_PRODUCT,
    ACTION.SEARCH_PRODUCT,
    ACTION.REMOVE_PRODUCT,
    ACTION.EDIT_PRODUCT,
    ACTION.GET_PRODUCTS
  ], productSaga)
}

export default rootSaga;