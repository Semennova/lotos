import { createContext, useReducer } from "react"
import { appReducer } from "./AppReducer"

const initialState = {
    people: [],
    pageSize: 10,
    currentPage: 1,
    totalPeopleCount: 0
}


export const GlobalContext = createContext(initialState)


export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    function setPeople(people){
        dispatch({
            type: 'SET_PEOPLE',
            payload: people
        })
    }

    function setTotalPeopleCount(people){
        dispatch({
            type: 'SET_TOTAL_PEOPLE_COUNT',
            payload: people
        })
    }

    function setCurrentPage(pageNumber){
        dispatch({
            type: 'SET_CURRENT_PAGE',
            payload: pageNumber
        })
    }

    return <GlobalContext.Provider value={
        {people: state.people,
         pageSize: state.pageSize,
         currentPage: state.currentPage,
         totalPeopleCount: state.totalPeopleCount,
         setPeople,
         setTotalPeopleCount,
         setCurrentPage}
    }>
        {children}
    </GlobalContext.Provider>
}