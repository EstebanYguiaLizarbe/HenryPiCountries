import React, { useEffect, useState } from 'react'
import CardContainer from '../../components/CardContainer/CardContainer'
import { useDispatch, useSelector } from 'react-redux'
import { countriesFilter, getCountries, paginateHeroes, filterContinente, paginadoNumbers, getActivities, activityFilter } from '../../Redux/action/actions';
import style from '../Home/Home.module.css'
import NavBar from '../../components/NavBar/NavBar';

const Home = () => {

  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.allCountries)

  const allActivities = useSelector((state) => state.allActivities)

  const countriesLength = useSelector((state) => state.allCountriesBackUp.length / 10)
  const countriesFilterLength = useSelector((state) => state.countriesFilters.length / 10)

  useEffect(() =>{
    dispatch(getCountries());
    dispatch(getActivities())
  },[])

  const paginate = (event) =>{
    dispatch(paginateHeroes(event.target.name));
  }

  const filterAlfabetico = (event) =>{
    dispatch(countriesFilter(event.target.name))
  }

  const filterContinent = (event) =>{
    dispatch(filterContinente(event.target.value))
    
  }

  const paginadoNumber = (event) =>{
    dispatch(paginadoNumbers(event.target.value));
  }

  const paginadoSupremo = (event) =>{
    paginadoNumber(event)
    paginate(event)
  }

  const actividadFiltro = (event) =>{
    dispatch(activityFilter(event.target.value))
  }

  const pageNumbersFiltrado = []

    for (let i = 1; i <= Math.ceil(countriesFilterLength); i++) {
      pageNumbersFiltrado.push(i)
    }
  
  const pageNumbers = []

    for(let i = 1; i <= 25; i++) {
      pageNumbers.push(i)
    }
  

  return (
    <div>
      <NavBar />
      <div className={style.botonNumeroConteiner} >
        {pageNumbersFiltrado.length > 0 ? pageNumbersFiltrado.map(n => (<button className={style.botonNumero} name='pageNumber' onClick={paginadoSupremo} value={n.toString()} key={n}>{n}</button>)) : pageNumbers.map(n => (<button className={style.botonNumero} name='pageNumber' onClick={paginadoSupremo} value={n.toString()} key={n}>{n}</button>))}
      </div>
      <div className={style.botonAzConteiner}>
        <button name='prev' onClick={paginate} className={style.botonAz} >Prev</button>
        <button className={style.botonAz} name='all' onClick={filterContinent} value={"todos"}>RESET</button>
        <button name='next' onClick={paginate} className={style.botonAz} >Next</button>
      </div>
      <div className={style.conteiner}>
        <div className={style.botones} >
        <h1 className={style.unos} >Ordenar por:</h1>
        <p className={style.po}>Poblacion:</p>
        <div>
          <button name='menorque' className={style.botonMenor} onClick={filterAlfabetico}>Population Menor a mayor</button>
          <button name='mayorque' className={style.botonMenor} onClick={filterAlfabetico}>Population Mayor a menor</button>
        </div>
        <p className={style.po}>Alfabetico:</p>  
        <div>
          <button name='AZ' className={style.botonAz} onClick={filterAlfabetico}>AZ</button>
          <button name='ZA' className={style.botonAz} onClick={filterAlfabetico}>ZA</button>
        </div>
        <h1 className={style.dos} >Filtrar por:</h1>
        <p className={style.po}>Contienentes:</p>
        <div>
          <button className={style.botonActividades} name='all' onClick={filterContinent} value={"todos"}>Todos</button>
          <button className={style.botonActividades} value={"South America"} onClick={filterContinent}>America del Sur</button>
          <button className={style.botonActividades} value={"North America"} onClick={filterContinent}>America del Norte</button>
          <button className={style.botonActividades} value={"Africa"} onClick={filterContinent}>Africa</button>
          <button className={style.botonActividades}value={"Asia"} onClick={filterContinent}>Asia</button>
          <button className={style.botonActividades} value={"Europe"} onClick={filterContinent}>Europa</button>
          <button className={style.botonActividades} value={"Oceania"} onClick={filterContinent}>Oceania</button>
          <button className={style.botonActividades} value={"Antarctica"} onClick={filterContinent}>Antarctica</button>
        </div>
        <p className={style.po}>Actividades:</p>
        <div>
          {allActivities.map(a => (<button value={a.name} key={a.name} className={style.botonActividades} onClick={actividadFiltro}>{a.name}</button>))}
        </div>
      </div>
        <CardContainer allCountries={allCountries} />
      </div>
    </div>
  )
}

export default Home