export const PRICE_FILTER = "PRICE_FILTER";
export const RESET_FILTERS = "RESET_FILTERS ";

export function onClickPriceFilter(filterPriceOperator, filterPrice){
    return {
        type: PRICE_FILTER,
        payload: {
            filterPriceOperator,
            filterPrice
        }
    };
}
export function onReset(){
    return {
        type:RESET_FILTERS
    }
}
