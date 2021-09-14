export const appReducer = (state, action) => {
    switch(action.type){
        case 'SET_PEOPLE' :
            return {
                ...state,
                people: action.payload
            }
        case 'SET_TOTAL_PEOPLE_COUNT' :
            return {
                ...state,
                totalPeopleCount: action.payload
            }
        case 'SET_CURRENT_PAGE' :
            return {
                ...state,
                currentPage: action.payload
            }

        default:
            return state
    }
}