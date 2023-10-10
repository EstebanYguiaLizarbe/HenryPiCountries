import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, postActivity } from '../../Redux/action/actions';
import style from "../Create/Create.module.css"
import NavBar from '../../components/NavBar/NavBar';

const Create = () => {

  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.allCountriesBackUp)

  useEffect(() =>{
    dispatch(getCountries())
  },[dispatch])


  const [state, setState] = useState({
    name:"",
    difficulty: "",
    duration: 0,
    season: "",
    countries:[]
  })

  const [errors, setErrors] = useState({
    name:"",
    difficulty: "",
    duration: "",
    season: "",
    countries:""
  })


  const validate = (state, name) =>{
    if(name === "name"){
      const regex = /^[A-Za-z\s]+$/;

      if(state.name === "") setErrors({...errors, name:"El nombre es requerido"})
      else if(state.name.length > 15) setErrors({...errors, name:"El nombre es muy largo"})
      else if(!isNaN(parseInt(state.name))) setErrors({...errors, name:"El nombre no debe contener numero"})
      else if(!regex.test(state.name)) setErrors({...errors, name:"El nombre no debe contener otro caracter que no sea letras"})
      else setErrors({...errors, name:""})
    }
    if(name === "duration"){
      if(state.duration > 23){
        setErrors({...errors, duration:"Porfavor ingrese un numero menor a 23"})
      }else if(state.duration < 0){setErrors({...errors, duration:"Porfavor ingrese un numero posittivo"})}
      else if(isNaN(parseInt(state.duration))) setErrors({...errors, duration:"Porfavor ingrese un numero"})

      
      else setErrors({...errors, duration:""})
    }
    if(name === "difficulty"){
      const valido = state.difficulty
      if (valido !== '1' && valido !== '2' && valido !== '3' && valido !== '4' && valido !== '5') setErrors({...errors, difficulty:"Ingrese un valor valido"})
      else setErrors({...errors, difficulty:""})
    }
    if(name === "season"){
      const validar = state.season
      if (validar !== 'Summer' && validar !== 'Autumn' && validar !== 'Winter' && validar !== 'Spring') setErrors({...errors, season:"Ingrese un valor valido"})
      else setErrors({...errors, season:""})
    }
    if(name === "countries"){
      console.log(state)
      if(state.countries.length === 0) setErrors({...errors, countries:"Elija un pais"})
      else setErrors({...errors, countries:""})
    }
  }
  
  const handleChange = (event) =>{
    if(event.target.name === "countries"){
      if(state.countries.includes(event.target.value)) return
      return setState({
        ...state,
        countries: [...state.countries, event.target.value]
      })
    }
    setState({
      ...state,
      [event.target.name] : event.target.value
    })
    validate({...state,
      [event.target.name] : event.target.value}, event.target.name)  
  }

  const buttonDisabled = () =>{
    let disabledAux = true
    for(let error in errors){
      if(errors[error] === "") disabledAux = false;
      else{
        disabledAux = true;
        break;
      }
    }
    return disabledAux;
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    dispatch(postActivity(state))
  }

  const remove = (event) =>{
    setState({
      ...state,
      [event.target.name]: [...state[event.target.name].filter(x => x !== event.target.id)]
    })
  }

  return (
    <div>
      <NavBar />
      <div className={style.contenedor}>
      <form onSubmit={handleSubmit} className={style.formm}>
        <label className={style.labell} >Nombre de la Actividad: </label>
        <input onChange={handleChange} type='text' className={style.inputt} name='name'></input>
        {<span className={style.errors}>{errors.name} </span>}
        <br/><label className={style.labell}>Duracion: </label>
        <input onChange={handleChange} className={style.inputt} name='duration' type='number' placeholder='Ingrese las horas' min="00" max={23}></input>
        {<span className={style.errors}>{errors.duration} </span>}
        <br/><label className={style.labell}>Dificultad: </label>
        <br/>{<span className={style.errors}>{errors.difficulty} </span>}
        <div className={style.radiogrupo} >
          <input onChange={handleChange} className={style.radio} type="radio" name="difficulty" value="1" />Principiante
          <input onChange={handleChange} className={style.radio} type="radio" name="difficulty" value="2" />Amateur
          <input onChange={handleChange} className={style.radio} type="radio" name="difficulty" value="3" />Normal
          <input onChange={handleChange} className={style.radio} type="radio" name="difficulty" value="4" />Profesional
          <input onChange={handleChange} className={style.radio} type="radio" name="difficulty" value="5" />Experto
        </div>
        <br/><label className={style.labell}>Temporada: </label>
        <br/>{<span className={style.errors} >{errors.season} </span>}
          <div>
            <input onChange={handleChange} className={style.radio} type="radio" name="season" value="Summer" />Verano
            <input onChange={handleChange} className={style.radio} type="radio" name="season" value="Autumn" />Otoño
            <input onChange={handleChange} className={style.radio} type="radio" name="season" value="Winter" />Invierno
            <input onChange={handleChange} className={style.radio} type="radio" name="season" value="Spring" />Primavera
          </div>
        <br/><label className={style.labell}>Pais: </label>
        {<span className={style.errors} >{errors.countries} </span>}
        <select className={style.inputt} name='countries' onChange={handleChange}><option selected disabled>Seleccione un pais</option>{allCountries.map(p => <option key={p.id} value={p.name}>{p.name} </option>)} </select>
        {state.countries.map(p => <div key={p}><span id={"countries"} >{p}</span><button className={style.countri} type="button" id={p} name='countries' onClick={remove}>X</button></div>)}
        <input disabled={buttonDisabled()} type="submit" className={style.buton} />
      </form>
      </div>
    </div>
  )
}

export default Create