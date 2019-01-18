import filterReducer from "./filterReducer";
import searchReducer from "./searchReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    filter: filterReducer,
    search : searchReducer
});

export default rootReducer;