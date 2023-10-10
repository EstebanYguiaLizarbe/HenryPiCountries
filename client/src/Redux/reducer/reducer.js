import { FILTER_ACTIVITY, FILTER_CONTINENT, FILTER_LETRA, GET_ACTIVITIES, GET_COUNTRIES, GET_COUNTRY, PAGINADO_NUMBER, PAGINATE, SEARCH } from "../action/actions-types";

const initialState = {
    allCountries: [],
    allActivities: [],
    countryDetail: {},
    allCountriesBackUp: [],
    countriesFilters: [],
    filters: false,
    currentPage: 0,
    pageArray: 0,
    page: false
}

function rooReducer(state = initialState, action){
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: [...action.payload].splice(0, 10),
                allCountriesBackUp: action.payload,
                currentPage: 0
            }

        case GET_COUNTRY:
            return {
                ...state,
                countryDetail: action.payload,
            }
        
        case GET_ACTIVITIES:
            return {
                ...state,
                allActivities: action.payload,
            }

        case PAGINATE:
            
            const next_page = state.currentPage + 1;
            const prev_page = state.currentPage - 1;
            const firstIndex = action.payload === "next" ? next_page * 10 : prev_page * 10;

            

            if(state.filters){
                if(action.payload === "next" && firstIndex >= state.countriesFilters.length) return state
                else if(action.payload === "prev" && prev_page < 0) return state

                let newCurrentPage;
                if (action.payload === "next") {
                    newCurrentPage = next_page;
                }else {
                    newCurrentPage = prev_page;
                }

                return {
                    ...state,
                    allCountries: [...state.countriesFilters].splice(firstIndex,10),
                    currentPage: newCurrentPage,
                }
            }
            if(action.payload === "next" && firstIndex >= state.allCountriesBackUp.length) return state
            else if(action.payload === "prev" && prev_page < 0) return state

            let newCurrentPage;
                if (action.payload === "next") {
                    newCurrentPage = next_page;
                }else {
                    newCurrentPage = prev_page;
                }

            return {
                ...state,
                allCountries: [...state.allCountriesBackUp].splice(firstIndex,10),
                currentPage: newCurrentPage,
            }

        case SEARCH:
            return {
                ...state,
                allCountries: [...action.payload].splice(0, 10),
                allCountriesBackUp: action.payload,
                countriesFilters: action.payload,
                currentPage: 0,
            }

        case FILTER_LETRA:
            switch (action.payload) {
                case "AZ":
                    let asc = []
                    if(state.filters){
                        asc = [...state.countriesFilters].sort((prev, next) =>{
                            if(prev.name > next.name) return 1
                            if(prev.name < next.name) return -1
                            return 0
                        })
                        return {
                            ...state,
                            allCountries: [...asc].splice(0, 10),
                            countriesFilters: asc,
                            currentPage: 0
                        }
                    }else{
                        asc = [...state.allCountriesBackUp].sort((prev, next) =>{
                            if(prev.name > next.name) return 1
                            if(prev.name < next.name) return -1
                            return 0
                        })
                        return {
                            ...state,
                            allCountries: [...asc].splice(0, 10),
                            allCountriesBackUp: asc,
                            currentPage: 0
                        }
                    }
                    
                case "ZA":
                    let des = []
                    if(state.filters){
                        des = [...state.countriesFilters].sort((prev, next) =>{
                            if(prev.name > next.name) return -1
                            if(prev.name < next.name) return 1
                            return 0
                        })
                        return {
                            ...state,
                            allCountries: [...des].splice(0, 10),
                            countriesFilters: des,
                            currentPage: 0
                        }
                    }else{
                        des = [...state.allCountriesBackUp].sort((prev, next) =>{
                            if(prev.name > next.name) return -1
                            if(prev.name < next.name) return 1
                            return 0
                        })
                        return {
                            ...state,
                            allCountries: [...des].splice(0, 10),
                            allCountriesBackUp: des,
                            currentPage: 0
                        }
                    }

                case "menorque":
                    let ascn = []
                    if(state.filters){
                        ascn = [...state.countriesFilters].sort((prev, next) =>{
                            if(prev.population > next.population) return 1
                            if(prev.population < next.population) return -1
                            return 0
                        })
                        return {
                            ...state,
                            allCountries: [...ascn].splice(0, 10),
                            countriesFilters: ascn,
                            currentPage: 0
                        }
                    }else{
                        ascn = [...state.allCountriesBackUp].sort((prev, next) =>{
                            if(prev.population > next.population) return 1
                            if(prev.population < next.population) return -1
                            return 0
                        })
                        return {
                            ...state,
                            allCountries: [...ascn].splice(0, 10),
                            allCountriesBackUp: ascn,
                            currentPage: 0
                        }
                    }
                    
                case "mayorque":
                    let desn = []
                    if(state.filters){
                        desn = [...state.countriesFilters].sort((prev, next) =>{
                            if(prev.population > next.population) return -1
                            if(prev.population < next.population) return 1
                            return 0
                        })
                        return {
                            ...state,
                            allCountries: [...desn].splice(0, 10),
                            countriesFilters: desn,
                            currentPage: 0
                        }
                    }else{
                        desn = [...state.allCountriesBackUp].sort((prev, next) =>{
                            if(prev.population > next.population) return -1
                            if(prev.population < next.population) return 1
                            return 0
                        })
                        return {
                            ...state,
                            allCountries: [...desn].splice(0, 10),
                            allCountriesBackUp: desn,
                            currentPage: 0,
                        }
                    }
                    
                default: console.log(state)
                    break;
            }
        
        case FILTER_CONTINENT:
            const allCountries = state.allCountriesBackUp
            const countriesFiltrados = action.payload === "todos" ? allCountries : allCountries.filter(p => p.continent === action.payload)
            return {
                ...state,
                allCountries: [...countriesFiltrados].splice(0, 10),
                countriesFilters: countriesFiltrados,
                currentPage: 0,
                filters: true
            }

        case FILTER_ACTIVITY:
            const allCountriesdos = state.allCountriesBackUp
            const countrieActivityFiltrado = allCountriesdos.filter(p => p.activities.includes(action.payload))
            return {
                ...state,
                allCountries: [...countrieActivityFiltrado].splice(0, 10),
                countriesFilters: countrieActivityFiltrado,
                currentPage: 0,
                filters: true
            }
        
        case PAGINADO_NUMBER:
            const numeroString = action.payload;
            const numeroNumero = parseInt(numeroString, 10);
            const resultado = numeroNumero;
            const resultadol = resultado < 0 ? 0 : resultado;
            const newFirstIndex = resultadol * 10;

            return{
                ...state,
                pageArray: resultadol,
                page: true,
                currentPage: resultadol, 
                allCountries: [...state.allCountriesBackUp].slice(newFirstIndex, newFirstIndex + 10),
            }
            
          
           

        default: return state;
    }
}

export default rooReducer;