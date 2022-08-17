import { takeLatest, takeEvery, call, put, all } from 'redux-saga/effects'
import { getAllDataFromApi, setDataToState } from './actions'
import req from '../requests/api'
import { URLS } from '../requests/endpoints'
import {ResponseGenerator} from './types'


function* getAllCountriesData() {
    const countriesData: ResponseGenerator = yield call(() => req.get(URLS.get.getAllCountries()).then(res => res.data))
    yield put({
        type: setDataToState,
        payload: countriesData
    })
}

function* countriesData() {
    yield takeLatest(getAllDataFromApi, getAllCountriesData)
}


export default function* rootSaga() {
    yield all([
        countriesData()
    ])
}