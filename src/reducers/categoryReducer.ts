import {  ACTIONS } from '../actions/productActions';

type ProductActions = {
    type: 'category/get_all' | 'category/get' | 'category/set_loading';
    payload: any;
}

type CategoryInitialState = {
    categories: Array<string | number>;
    loading: boolean;
}


const initialState: CategoryInitialState = {
    categories: [],
    loading: false
};

const productReducer = (state = initialState, action: ProductActions) => {
    switch (action.type) {
        case ACTIONS.GET_ALL:
            return {
                ...state,
                categories: action.payload,
            };
            case ACTIONS.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;