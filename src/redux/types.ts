export interface InitialState {
    countriesData: CountriesDataType[],
    searchInputValue:string;
    filterValue:string,
    filterItems:string[]
    darkMode:boolean
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
    capital?: string;
    nativeName?:string;
    subregion?:string;
    topLevelDomain?:string[];
    currencies?:any;
    languages?:any;
    borders?:string[],
    alpha3Code?:string;
}
