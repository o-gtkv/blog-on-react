import { combineReducers } from "redux";

import { recipesStateReducer } from './recipesStateReducer'
import { articlesStateReducer } from './articlesStateReducer'
import { teamStateReducer } from './teamStateReducer'


export const rootReducer = combineReducers({
    recipesState: recipesStateReducer,
    articlesState: articlesStateReducer,
    teamState: teamStateReducer
})