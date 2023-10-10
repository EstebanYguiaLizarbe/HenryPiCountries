import React from 'react'
import landing from "../../components/imagenes/landing.jpg"
import style from "../Landing/Landing.module.css"
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className={style.contenedor} >
      <img className={style.imagen} src={landing} alt="bienvenida" />
      <div className={style.texto} >
        <h1 className={style.titulo} >CountryApp</h1>
        <p className={style.parrafo} >App que te ayuda a organizar tus actividades alrededor del mundo</p>
        <button className={style.boton} >
          <Link to="/home" className={style.link} >EMPEZAR</Link>
        </button>
      </div>
      
    </div>
  )
}

export default Landing