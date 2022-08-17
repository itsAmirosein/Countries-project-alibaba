export interface InitialState {
    countriesData: []
}
export interface ActionsType {
    type: string;
    payload: any
}
export interface ResponseGenerator {
    config?: any,
    data?: any,
    headers?: any,
    request?: any,
    status?: number,
    statusText?: string
}
