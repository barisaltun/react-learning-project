import {RESET_FILTERS, PRICE_FILTER} from "../actions/filterAction";

const initialState = {
    filterPrice: "",
    filterPriceOperator: ""
};

export default function filterReducer(state = initialState, { type, payload }) {
    switch(type){
        case RESET_FILTERS:
            return initialState;
        case PRICE_FILTER:
            return {
                ...state,
                filterPrice: payload.filterPrice,
                filterPriceOperator: payload.filterPriceOperator
            };
        default:
            return state;
    }
}
