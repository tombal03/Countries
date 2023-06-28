import {
  GET_COUNTRIES,
  GET_COUNTRIES_BY_ID,
  GET_COUNTRIES_BY_NAME,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY_NAME,
  ORDER_AZ,
  ORDER_ZA,
  ORDER_POPULATION,
  ORDER_POPULATION_REVERSE,
  GET_ACTIVITIES,
  POST_ACTIVITY,
} from "./actions";

const initialState = {
  countries: [],
  activities: [],
  country: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.payload };
    case GET_COUNTRIES_BY_ID:
      return { ...state, country: action.payload };
    case GET_COUNTRIES_BY_NAME:
      return { ...state, countries: action.payload };
    case FILTER_BY_CONTINENT:
      return { ...state, countries: action.payload };
    case FILTER_BY_ACTIVITY_NAME:
      return { ...state, countries: action.payload };
    case ORDER_AZ:
      return {
        ...state,
        countries: state.countries.slice().sort((a, b) => a.name.localeCompare(b.name)),
      };
    case ORDER_ZA:
      return {
        ...state,
        countries: state.countries.slice().sort((a, b) => b.name.localeCompare(a.name)),
      };
    case ORDER_POPULATION:
      const popCountries = [...state.countries].sort((a, b) => {
        const populationA = a.population;
        const populationB = b.population;
        if (populationA < populationB) {
          return -1;
        }
        if (populationA > populationB) {
          return 1;
        }
        return 0;
      });
      return { ...state, countries: popCountries };
    case ORDER_POPULATION_REVERSE:
      const popRCountries = [...state.countries].sort((a, b) => {
        const populationA = a.population;
        const populationB = b.population;
        if (populationA > populationB) {
          return -1;
        }
        if (populationA < populationB) {
          return 1;
        }
        return 0;
      });
      return { ...state, countries: popRCountries };
    case GET_ACTIVITIES:
      return { ...state, activities: action.payload };
    case POST_ACTIVITY:
      return { ...state, activities: [...state.activities, action.payload] };
    default:
      return { ...state };
  }
};

export default rootReducer;
