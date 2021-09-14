import React, { useEffect, useContext } from 'react'
import { api } from '../../api/api'
import { GlobalContext } from '../../Context/GlobalContext'
import style from './Pagination.module.css'


export const Pagination = ({onPageChange}) => {
    const {totalPeopleCount, setTotalPeopleCount, pageSize, currentPage} = useContext(GlobalContext)

    let pages = []
    for(let i = 1; i <= Math.ceil(totalPeopleCount / pageSize); i++){
        pages.push(i)
    }

    useEffect(()=> {
       (async ()=> {
            let response = await api.getPeople()
            setTotalPeopleCount(response.data.count)
        })() 
   }, [])
   
    return (
        <div className={style.pagesStyle}>
                    {pages.map(p => (
                    <span className={p === currentPage ? style.active : style.pageItem} key={p} onClick={()=>onPageChange(p)}>{p}</span>
                ))}
        </div>
    )
}
