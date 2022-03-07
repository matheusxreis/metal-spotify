import { AnyAction } from "@reduxjs/toolkit";


interface IinitilState {
    username: string;
}

let initialState: IinitilState;

export function userReducer(state=initialState, action: AnyAction){

    switch(action.type){

        case "user/GET_USER_INFO":
            return {...state,
            username: action.payload.username}
        default:
            return state;
    }
}