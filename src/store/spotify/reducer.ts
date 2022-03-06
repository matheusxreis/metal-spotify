import { AnyAction } from "@reduxjs/toolkit";
import { routerActions } from "react-router-redux";

interface IinitialState {
   albuns: []
   artists:[]
}
let initialState: IinitialState; 

export function spotifyReducer(state=initialState, action: AnyAction){

    switch(action.type){

        case "spotify/GET_ALBUNS":
            return {...state,
            albuns: action.payload.albuns}

        case "spotify/GET_ARTISTS":
            return {...state,
                artists: action.payload.artists
            }
        default:
            return state;
    }

}