import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getCountry } from '../../Redux/action/actions';
import style from '../Detail/Detail.module.css'
import NavBar from '../../components/NavBar/NavBar';

const Detail = () => {

  const dispatch = useDispatch()
  const params = useParams();

  const countryDetails = useSelector((state) => state.countryDetail)

  useEffect(() =>{
    dispatch(getCountry(params.id))
  }
  ,[])

  return (
    <div>
      <NavBar />
      <div>
        <div className={style.carta}>
          <div>
            <img className={style.imgg} src={countryDetails.flag} alt={countryDetails.name} />
          </div>
          <div className={style.conteiner} >
            <h1>Nombre: {countryDetails.name}</h1>
            <h1>ID: {countryDetails.id}</h1>

          <h2>Continente: {countryDetails.continent} </h2>
          <h3>Capital: {countryDetails.capital} </h3>
          <p>Subregion: {countryDetails.subregion} </p>
          <p>Area: {countryDetails.area} </p>
          <p>Poblacion: {countryDetails.population} </p>
          </div> 
        </div>



        <div>
      </div>

      <h1 className={style.huno} >Tus Actividades: </h1>
      <div className={style.supremo} >
        {countryDetails.Activities ? (
          countryDetails.Activities.map((a, index) => (
            <div className={style.actividades} key={index}>
              <h1>Nombre: {a.name}</h1>
              <p>Duracion: {a.duration} hrs</p>
              <p>Temporada: {a.season} </p>
            </div>
          ))
        ) : (
          <p>No hay actividades disponibles.</p>
        )}
      </div>
      </div>

      
    </div>
  )
}

export default Detail