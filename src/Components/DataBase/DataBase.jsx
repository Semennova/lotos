import React, { useEffect, useContext } from 'react'
import { api, BASE_URL } from '../../api/api'
import { GlobalContext } from '../../Context/GlobalContext'
import { Searchbar } from '../Searchbar/Searchbar'
import style from './DataBase.module.css'
import { Pagination } from '../Pagination/Pagination'
import { DataBaseList } from './DataBaseList'


export function DataBase() {
    const {people, setPeople, setCurrentPage} = useContext(GlobalContext)

    useEffect(()=> {
        (async ()=> {
            let response = await api.getPeople()
            setPeople(response.data.results)
        })()
    }, [BASE_URL])


    const onPageChange = async (pageNumber) => {
       let response = await api.getCurrentPage(pageNumber)
       setPeople(response.data.results)
       setCurrentPage(pageNumber)
    }

    return (
        <div className={style.dataBaseContainer}>
            <Searchbar />
            <h1 className={style.heading}>Star Wars Data Base</h1>
            {people.map((person, index) => (
              <DataBaseList person={person} index={index}/>
            ))} 
          <Pagination onPageChange={onPageChange} />
            
        </div>
    )
}
