import { Reducer } from "redux";

interface InitialState {
    state:true
}
interface ActionsType {
    type: string;
    // payload: any
}

export const reducer:any =(state: InitialState, action: ActionsType) =>{
    return state
}