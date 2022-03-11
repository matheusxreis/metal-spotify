import { all, put, takeEvery, call, take} from 'redux-saga/effects'
import { push } from 'react-router-redux'

import { api }from '../../api'

import axios from 'axios'

interface IResponse {
    data: {
        access_token:string;
    }
}
function* signIn(){

   yield console.log('aaaaaaa')
   yield window.location.href= 'http://localhost:8080/auth/login'

   yield put({type: 'auth/SIGN_IN'})

   
}


export function* signOut(){

    // yield call(
    //     api.get,
    //     '/auth/signout'
    // )

    yield put({
        type: "auth/SIGN_OUT"
    })
}

function* getToken(){
 

    const response:IResponse = yield call(
        api.post, 
        '/auth/token'
    )

    const token = `Bearer ${response.data}`
        
    yield put({type: "auth/GET_TOKEN", payload: token})

    yield put({type: "@user/GET_USER_INFO", payload: { token }})
   
    // const config = {
    //     headers: {Authorization : token}
    // }
    // const responseUser: IResponse = yield call(
    //     axios.get,
    //     'https://api.spotify.com/v1/me',
    //     config
    // )
    // console.log(responseUser)
}



export default function* authSaga(){
    yield all([
        takeEvery('@auth/SIGN_IN', signIn),
        takeEvery('@auth/GET_TOKEN', getToken),
        takeEvery('@auth/SIGN_OUT', signOut)
    ])
}