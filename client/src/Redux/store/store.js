import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import rooReducer from "../reducer/reducer.js"

export const store = createStore(
    rooReducer,
    applyMiddleware(thunk)
)