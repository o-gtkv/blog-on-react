import { actionType } from './constants'

export const teamStateReducer = (state = {teamList: []}, action) => {    
    switch (action.type) {
        case actionType.LOAD_TEAM:                    
            return {
                teamList: action.teamList
            }
            default:
                return state
    }
}