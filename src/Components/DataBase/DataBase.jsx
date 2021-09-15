import React, { useEffect, useContext, useState } from 'react'
import { api, BASE_URL } from '../../api/api'
import { GlobalContext } from '../../Context/GlobalContext'
import { Searchbar } from '../Searchbar/Searchbar'
import style from './DataBase.module.css'
import { Pagination } from '../Pagination/Pagination'
import { DataBasePerson } from './DataBasePerson'


export function DataBase() {
    const {people, setPeople, setCurrentPage} = useContext(GlobalContext)
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        (async ()=> {
           setLoading(true) 
            let response = await api.getPeople()
            setPeople(response.data.results)
           setLoading(false) 
        })()
    }, [BASE_URL])


    const onPageChange = async (pageNumber) => {
        setLoading(true) 
       let response = await api.getCurrentPage(pageNumber)
       setPeople(response.data.results)
       setCurrentPage(pageNumber)
       setLoading(false)
    }


    return (
       <div className={style.dataBaseContainer}>
            <Searchbar />
            <h1 className={style.heading}>Star Wars Data Base</h1>
            {!loading ? people.map((person, index) => (
              <DataBasePerson person={person} key={index}/>
            )) : <div className={style.loading}>Loading...</div>} 
          <Pagination onPageChange={onPageChange} />
            
        </div>
    )
}
