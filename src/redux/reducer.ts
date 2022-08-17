import { Reducer } from "redux";
import { setDataToState } from './actions'
import {InitialState,ActionsType} from './types'


export const reducer: any = (state: InitialState, action: ActionsType) => {
    return ACTIONS[action.type] ? ACTIONS[action.type](state, action.payload) : () => state
}


const ACTIONS: any = {
    [setDataToState]: handleCountriesData
}

function handleCountriesData(state: InitialState, payload: any) {
    return { ...state, countriesData: payload }
}