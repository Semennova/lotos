import React, { useContext } from 'react'
import style from './Searchbar.module.css'
import { api } from '../../api/api'
import { GlobalContext } from '../../Context/GlobalContext'


export function Searchbar() {
    const {setPeople} = useContext(GlobalContext)

    const search = async (name) => {
        let response = await api.search(name)
        setPeople(response.data.results)
      }
      
    return (
        <div className={style.searchSection}>
            <label className={style.label} htmlFor='search'></label>
                <input id='search' type='text' placeholder='Search' onChange={(e)=> search(e.target.value)} />
        </div>
    )
}



