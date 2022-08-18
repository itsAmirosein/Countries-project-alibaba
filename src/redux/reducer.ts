import { Reducer } from "redux";
import { setAllCountries, setNewCountry, searchInputChange, filterValueChange,darkModeChange } from './actions'
import { InitialState, ActionsType } from './types'

const initialState: InitialState = {
    countriesData: [],
    searchInputValue: '',
    filterValue: '',
    filterItems: [],
    darkMode:false
}

export const reducer: any = (state: InitialState = initialState, action: ActionsType) => {
    return ACTIONS[action?.type] ? ACTIONS[action?.type](state, action.payload) : state
}


const ACTIONS: any = {
    [setAllCountries]: handleCountriesData,
    [setNewCountry]: handleNewCountry,
    [searchInputChange]: handleSearchInputChange,
    [filterValueChange]: handleFilterValueChange,
    [darkModeChange]: handleDarkModeChange,
}

function handleCountriesData(state: InitialState, payload: any): InitialState {
    const allRegions: string[] = payload?.map((item: any) => item?.region)
    const uniqRegions = Array.from(new Set(allRegions))
    return { ...state, countriesData: payload, filterItems: uniqRegions }
}
function handleNewCountry(state: InitialState, payload: any): InitialState {
    console.log(state,'state')
    return { ...state, countriesData: payload }
}
function handleSearchInputChange(state: InitialState, payload: any): InitialState {
    return { ...state, searchInputValue: payload }
}
function handleFilterValueChange(state: InitialState, payload: any): InitialState {
    return { ...state, filterValue: payload }
}
function handleDarkModeChange(state: InitialState, payload: any): InitialState {
    return { ...state, darkMode: payload }
}