import {
  combineReducers
} from 'redux';

import modalReducer from './modalReducer';
import snackBarReducer from './snackBarReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  modalReducer,
  snackBarReducer,
  productReducer,
});

export default rootReducer;