import { takeLatest, takeEvery, call, put, all, debounce } from 'redux-saga/effects'
import { getAllDataFromApi, setAllCountries, getSearchedCountry, setNewCountry, filterCountries } from './actions'
import req from '../requests/api'
import { URLS } from '../requests/endpoints'
import { ActionsType, ResponseGenerator } from './types'


function* getAllCountriesData() {
    try {
        const countriesData: ResponseGenerator = yield call(() => req.get(URLS.get.getAllCountries()).then(res => res.data))
        yield put({
            type: setAllCountries,
            payload: countriesData
        })
    } catch (error: any) {
        alert(error)

    }
}
function* getSearchedCountryData(action: ActionsType) {
    try {
        const searchData: ResponseGenerator = yield call(
            () => req.get(action.payload ?
                URLS.get.getSearchedCountry(action.payload) :
                URLS.get.getAllCountries()).then(res => res.data)
        )
        yield put({
            type: setNewCountry,
            payload: searchData,
        })
    } catch (error: any) {
        alert(error)
    }
}
function* getFilteredCountriesData(action: ActionsType) {
    try {
        const filteredData: ResponseGenerator = yield call(() => req.get(URLS.get.getFilteredCountries(action.payload)).then(res => res.data))
        yield put({
            type: setNewCountry,
            payload: filteredData,
        })
    } catch (error: any) {
        alert(error)

    }
}

function* countriesData() {
    yield takeLatest(getAllDataFromApi, getAllCountriesData)
}
function* searchCountry() {
    yield takeEvery(getSearchedCountry, getSearchedCountryData)
}
function* getFilteredCountries() {
    yield takeEvery(filterCountries, getFilteredCountriesData)
}


export default function* rootSaga() {
    yield all([
        countriesData(),
        searchCountry(),
        getFilteredCountries()
    ])
}