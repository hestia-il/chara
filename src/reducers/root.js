import { combineReducers } from "redux";

import auth from "../auth/reducers";
import books from "../books/reducers";
import user from "../user/reducers";

const rootReducer = combineReducers({
    auth,
    books,
    user,
});
  
export default rootReducer