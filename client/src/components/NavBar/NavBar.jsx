import React from 'react'
import { Link } from 'react-router-dom'
import style from '../NavBar/NavBar.module.css'
import SearchBar from '../SearchBar/SearchBar'
import logo from '../imagenes/logoo.png'

const NavBar = () => {
  return (
    <div className={style.contenedor}>
      <div>
        <Link to={"/home"}><img className={style.imagen} src={logo} alt='logo' /></Link>  
      </div>
      <div>
       <SearchBar />
      </div>
      <div className={style.navContenedor} >
        <Link to={"/home"} className={style.navLink}>Home</Link>
        <Link to={"/create"} className={style.navLink}>Create</Link>
      </div>
    </div>
  )
}

export default NavBar