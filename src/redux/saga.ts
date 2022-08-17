import {takeLatest,takeEvery,call,put , all} from 'redux-saga/effects'
import {getAllData} from './actions'
import axios from 'axios'

function* getAllCountriesData(){
const countriesData = yield call(axios.get)
}

function* countriesData(){
yield takeLatest(getAllData ,getAllCountriesData)
}


export default function* rootSaga(){
yield all([
    countriesData()
])
}