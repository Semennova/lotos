import React from 'react'
import style from './DataBase.module.css'

export const DataBasePerson = ({person}) => {
    return (
        <div className={style.personSection}>
                    <h4>Name: {person.name}</h4>
                    <span>Height: {person.height}; </span>
                    <span>Date of birth: {person.birth_year} </span>
                </div>
    )
}
