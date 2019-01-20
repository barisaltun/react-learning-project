export const SEARCH_KEYWORD = 'SEARCH_KEYWORD';


export function onChangeFilterText(searchTerm){
    return {
        type:SEARCH_KEYWORD,
        payload:{
            searchTerm
        }
    }
};


