import { AnyAction } from "@reduxjs/toolkit";
import { routerActions } from "react-router-redux";

interface IinitialState {
   albuns: any[];
   artists:any[];
   albumPage: boolean;
}
let initialState: IinitialState = {
    albuns: [],
    artists: [],
    albumPage: false,
} 

export function spotifyReducer(state=initialState, action: AnyAction){

    switch(action.type){

        case "spotify/GET_ALBUNS":
            return {...state,
            albuns: action.payload.albuns}

        case "spotify/GET_ARTISTS":
            return {...state,
                artists: action.payload.artists
            }

        case "spotify/IN_ALBUM_PAGE":
            return {...state,
            albumPage: true}
        case "spotify/OUT_ALBUM_PAGE":
            return {...state,
            albumPage:false}
        default:
            return state;
    }

}