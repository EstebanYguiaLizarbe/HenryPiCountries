import React from 'react'
import { Link } from 'react-router-dom'
import style from '../Card/Card.module.css'

const Card = ({name, flag, continent, id, population}) => {
  return (
    <div className={style.conteiner} >
      <Link to={`/details/${id}`} className={style.cardLink} >
        <div className={style.card}>
          <div>
            <img src={flag} alt={name} />
          </div>
          <h1>{name}</h1>
          <h3>{continent}</h3>
        </div>
      </Link>
    </div>
  )
}

export default Card