import axios from "axios";

export const GET_COUNTRIES = "GET_COUTRIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME" 
export const GET_COUNTRIES_BY_ID = "GET_COUNTRIES_BY_ID"
export const ORDER_AZ = "ORDER_AZ"
export const ORDER_ZA = "ORDER_ZA"
export const ORDER_POPULATION = "ORDER_POPULATION"
export const ORDER_POPULATION_REVERSE = "ORDER_POPULATION_REVERSE"
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT"
export const FILTER_BY_ACTIVITY_ID = "FILTER_BY_ACTIVITY_ID"
export const GET_ACTIVITIES = "GET_ACTIVITIES"
export const POST_ACTIVITY = "POST_ACTIVITY"

export const getCountries = () =>{
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/countries")
        const countries = apiData.data;
        dispatch({type: GET_COUNTRIES, payload: countries})
    }
}

export const getCountriesByName = (name) =>{
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/countries/?name=" + name)
        const countries = apiData.data;
        dispatch({type: GET_COUNTRIES_BY_NAME, payload: countries})
    }
}

export const getCountriesById = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/countries/" + id)
        const countries = apiData.data;
        dispatch({type: GET_COUNTRIES_BY_ID, payload: countries})
    }
}


export const orderAlphabetically = () => {
    return {
        type: ORDER_AZ
    }
}

export const orderAlphabeticallyReverse = () => {
    return {
        type: ORDER_ZA
    }
}

export const orderPopulation = () => {
    return {
        type: ORDER_POPULATION
    }
}

export const orderPopulationReverse = () => {
    return  {
       type: ORDER_POPULATION_REVERSE
    }
}


export const filterByActivity = (id) => {
    return async function (dispatch) {
        let filtredById = await axios.get("http://localhost:3001/countries/cbid/" + id)
        dispatch({type: FILTER_BY_ACTIVITY_ID, payload: filtredById.data})
    }
}

export const filterByContinent = (continent) => {
    return async function (dispatch) {
        let filtredByCont = await axios.get("http://localhost:3001/countries/cbc/" + continent)
        dispatch({type: FILTER_BY_CONTINENT, payload: filtredByCont.data})
    }
}

export const getActivities = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/activities")
        const activities = apiData.data;
        dispatch({type: GET_ACTIVITIES, payload: activities})
    }
}

export const postActivity = (postData) => {
    return async function (dispatch) {
        const response = await axios.post("http://localhost:3001/activities", postData)
        const newPost = response.data
        dispatch({type: POST_ACTIVITY, payload: newPost})
    }
}