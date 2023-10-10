import axios from "axios";
import { FILTER_ACTIVITY, FILTER_CONTINENT, FILTER_LETRA, GET_ACTIVITIES, GET_COUNTRIES, GET_COUNTRY, PAGINADO_NUMBER, PAGINATE, SEARCH } from "./actions-types";

export function getCountries(){
    return async function(dispatch){
        try {
            const response = await axios.get('http://localhost:3001/countries')
            dispatch({
                type:GET_COUNTRIES,
                payload:response.data
            })
        } catch (error) {
            alert(error.response.data)
        }
    }
}


export function getCountry(id){
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/countries/${id}`)
            dispatch({
                type:GET_COUNTRY,
                payload:response.data
            })
        } catch (error) {
            alert(error.response.data)
        }
    }
}

export function postActivity(state){
    return async function(dispatch){
        try {
            await axios.post('http://localhost:3001/activities', state)
            alert("Actividad creada con exito!")
        } catch (error) {
            alert(error.response.data)
        }
    }
}

export function paginateHeroes(order){
    return function(dispatch){
        try {
            dispatch({
                type:PAGINATE,
                payload:order
            })
        } catch (error) {
            alert(error.response.data)
        }
    }
}

export function searchCountry(countri){
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/countries/?name=${countri}`)
            dispatch({
                type:SEARCH,
                payload:response.data
            })
        } catch (error) {
            alert(error.response.data)
        }
    }
}

export function countriesFilter(order){
    return function(dispatch){
        try {
            dispatch({
                type:FILTER_LETRA,
                payload:order
            })
        } catch (error) {
            alert(error.response.data)
        }
    }
}

export function filterContinente(continent){
    return function(dispatch){
        try {
            dispatch({
                type: FILTER_CONTINENT,
                payload: continent
            }) 
        } catch (error) {
            alert(error.response.data)
        }
    }
}

export function paginadoNumbers(order){
    return function(dispatch){
        try {
            dispatch({
                type:PAGINADO_NUMBER,
                payload:order
            })
        } catch (error) {
            alert(error.response.data)
        }
    }
}

export function getActivities(){
    return async function(dispatch){
        try {
            const response = await axios.get('http://localhost:3001/activities')
            dispatch({
                type:GET_ACTIVITIES,
                payload:response.data
            })
        } catch (error) {
            alert(error.response.data)
        }
    }
}

export function activityFilter(order){
    return function(dispatch){
        try {
            dispatch({
                type:FILTER_ACTIVITY,
                payload:order
            })
        } catch (error) {
            alert(error.response.data)
        }
    }
}