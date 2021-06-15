import { combineReducers } from "redux";

import { recipesStateReducer } from './recipesStateReducer'
import { articlesStateReducer } from './articlesStateReducer'


export const rootReducer = combineReducers({
    recipesState: recipesStateReducer,
    articlesState: articlesStateReducer
})