export const SEARCH_KEYWORD = 'SEARCH_KEYWORD';


export function onChangeFilterText(e){
    return {
        type:SEARCH_KEYWORD,
        payload:{
            filterText: e.target.value
        }
    }
};


