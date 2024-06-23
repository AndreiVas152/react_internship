import {combineReducers} from "redux";
import {userReducer} from "./user/reducer";
import {coursesReducer} from "./courses/reducer";
import {authorsReducer} from "./authors/reducer";


export const rootReducer = combineReducers({

    courses: coursesReducer,
    user: userReducer,
    authors: authorsReducer
})
