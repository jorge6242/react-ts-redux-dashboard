import {
    ACTIONS
} from '../actions/productActions';

type ProductActions = {
    type: 'product/get_all' | 'product/get' | 'product/set_loading';
    payload: any;
}

type ProductInitialState = {
    products: Array<string | number>;
    loading: boolean;
}

const initialState: ProductInitialState = {
    products: [],
    loading: false
};

const productReducer = (state = initialState, action: ProductActions) => {
    switch (action.type) {
        case ACTIONS.GET_ALL:
            return {
                ...state,
                products: action.payload,
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