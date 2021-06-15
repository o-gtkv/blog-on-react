import { actionType } from './constants'

export const articlesStateReducer = (state = {articlesList: []}, action) => {    
    switch (action.type) {
        case actionType.LOAD_ARTICLES:                    
            return {
                articlesList: action.articlesList
            }
            default:
                return state
    }
}