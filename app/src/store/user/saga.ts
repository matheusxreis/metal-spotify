import { AnyAction } from '@reduxjs/toolkit'
import { all, put, takeEvery, call} from 'redux-saga/effects'

import { spotifyApi } from '../../api'


interface IResponse {
    data: {
        display_name:string;
    }
}

export function* getUserInfo(action: AnyAction){

    const { token } = action.payload
    const config = {
           headers: {Authorization : token}
         }

         
   try{ const response: IResponse = yield call(
        spotifyApi.get,
        '/me',
        config  
         )

    console.log(response.data)

    const payload = {
        username: response.data.display_name
    }
    console.log(response.data)
    yield put({type: "user/GET_USER_INFO", payload})
}catch{
    yield put({type:'auth/SIGN_OUT'})
}


}


export default function* userSaga(){
    yield all([
        takeEvery('@user/GET_USER_INFO', getUserInfo),
       
    ])
}
