import { actionType } from './constants'

export const recipesStateReducer = (state = {recipesList: []}, action) => {    
    switch (action.type) {
        case actionType.LOAD_RECIPES:                    
            return {
                recipesList: action.recipesList
            }
            default:
                return state
    }
}