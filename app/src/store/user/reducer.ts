import { AnyAction } from "@reduxjs/toolkit";
import { trackForMutations } from "@reduxjs/toolkit/dist/immutableStateInvariantMiddleware";
import { isCallLikeExpression } from "typescript";


interface Itracks {
    title: string;
    artist: string;
    image: string;
    album: string;
    added_at?: Date | string; 
}
interface Ilikes {
    albuns: any[];
    tracks: Itracks[];
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
        username:""
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
            console.log(state.likes)

            return {
                ...state,
                likes: {
                    ...state.likes,
                    tracks: [...state.likes.tracks, action.payload.tracks]
                }
                
            }
        case "user/REMOVE_LIKED_TRACK":
            return {
                ...state,
                likes: {
                    ...state.likes,
                    tracks: state.likes.tracks.filter(x=>x.title!==action.payload.track_name)
                }
                
            }
        default:
            return state;
    }
}