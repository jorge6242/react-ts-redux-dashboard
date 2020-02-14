import {
  combineReducers
} from 'redux';

import modalReducer from './modalReducer';
import snackBarReducer from './snackBarReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  modalReducer,
  snackBarReducer,
  productReducer,
  categoryReducer,
  loginReducer,
});

export default rootReducer;