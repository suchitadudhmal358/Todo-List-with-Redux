import { createStore, combineReducers } from "redux";
import todoReducer from "../reducer/todoReducer";

//combine all reducers as one if any
const rootReducer = combineReducers({
  todoReducer,
});

const store = createStore(rootReducer);

export default store;
