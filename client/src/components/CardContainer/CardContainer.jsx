import React from 'react'
import Card from '../Card/Card'
import style from '../CardContainer/cardcontainer.module.css'

const CardContainer = ({allCountries}) => {
  return (
    <div className={style.container} >
      {allCountries.map(p => <Card key={p.id} name={p.name} flag={p.flag} continent={p.continent} id={p.id} population={p.population} />)}
    </div>
  )
}

export default CardContainer