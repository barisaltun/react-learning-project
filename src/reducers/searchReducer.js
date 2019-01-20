import {SEARCH_KEYWORD} from "../actions/searchAction";

const initialState = {
  searchTerm : ""
};

export default function searchKeyword(state = initialState, {type,payload}){
  switch (type) {
    case SEARCH_KEYWORD:
      return {
        ...state,
        searchTerm:payload.searchTerm
      };
    default:
      return initialState;
  }
}
