import { all } from 'redux-saga/effects'
import authSaga from './auth/saga'
import userSaga from './user/saga'
import spotifySaga from './spotify/saga'

export default function* rootSaga(){

   yield all([
        authSaga(),
        userSaga(),
        spotifySaga()
   ])
}