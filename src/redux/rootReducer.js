import todoReducer from "./filters/reducer";
import filterReducer from "./todos/reducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer,
});

export default rootReducer;