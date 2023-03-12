import {
  LOADING
} from '../../constants/actions';

export const setLoading = (bool = true) => ({
  type: LOADING,
  payload: bool
});

export const setRequestStatus = (status) => ({
  type: SET_REQUEST_STATUS,
  payload: status
});
