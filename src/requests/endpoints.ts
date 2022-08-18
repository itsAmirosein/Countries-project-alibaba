export const URLS = {
    get: {
        getAllCountries: () => `/all`,
        getSearchedCountry:(name:string)=>`/name/${name}`,
        getFilteredCountries:(region:string)=>`region/${region}`
    }
}