import { AnyAction } from "@reduxjs/toolkit";
import { isCallLikeExpression } from "typescript";

interface Ilikes {
    albuns: any[];
    tracks: any[];
    username: string;
}

interface IinitilState {
    username: string;
    likes: Ilikes;
}

let initialState: IinitilState = {
    username:"",
    likes: {
        albuns: [],
        tracks: [],
        username:''
    }
};

export function userReducer(state=initialState, action: AnyAction){
    console.log(action.payload)
    switch(action.type){

        case "user/GET_USER_INFO":
            return {...state,
            username: action.payload.username}

        case "user/ADD_NEW_LIKED_TRACK":
            console.log(action.payload.tracks)
            console.log(state.likes.tracks)

            return {...state,
            likes: {
                ...state.likes, 
                 tracks:[...state.likes.tracks, action.payload.tracks],
                 username: state.username}}
        default:
            return state;
    }
}