import { createContext, useReducer } from "react"
import { appReducer } from "./AppReducer"

const initialState = {
    people: [
        {
            name: 'C-3PO', 
            height: '167', 
            mass: '75', 
            hair_color: 'n/a', 
            skin_color: 'gold', 
            eye_color: 'yellow', 
            birth_year: '112BBY', 
            gender: 'n/a', 
            homeworld: 'https://swapi.dev/api/planets/1/', 
        },

        {
            name: 'Luke Skywalker', 
            height: '172', 
            mass: '77', 
            hair_color: 'blond', 
            skin_color: 'fair', 
            eye_color: 'blue', 
            birth_year: '19BBY', 
            gender: 'male', 
            homeworld: 'https://swapi.dev/api/planets/1/', 
           }
    ],
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