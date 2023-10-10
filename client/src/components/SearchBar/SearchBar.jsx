import React from 'react'
import { useDispatch } from 'react-redux'
import { searchCountry } from '../../Redux/action/actions'
import style from '../SearchBar/Search..module.css'

const SearchBar = () => {

  const dispatch = useDispatch()

  const handleSubmit = (event) =>{
    dispatch(searchCountry(event.target.value))
  }

  const handleSubmitBotom = () =>{
    dispatch(searchCountry(document.getElementById('search').value))
  }

  return (
    <div className={style.busqueda}>
      <input className={style.input} placeholder='Busca tu pais' onChange={handleSubmit} type='text' name='' id='search'/>
      <input className={style.button} type='submit' onClick={handleSubmitBotom}/>
    </div>
  )
}

export default SearchBar