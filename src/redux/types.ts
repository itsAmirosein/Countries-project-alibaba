export interface InitialState {
    countriesData: CountriesDataType[],
    searchInputValue:string;
    filterValue:string,
    filterItems:string[]
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
type CountriesDataType = {
    name?: string;
    flag?: string;
    population?: number;
    region?: string;
    capital?: string
}
