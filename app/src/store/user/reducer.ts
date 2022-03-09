import { AnyAction } from "@reduxjs/toolkit";
import { trackForMutations } from "@reduxjs/toolkit/dist/immutableStateInvariantMiddleware";
import { isCallLikeExpression } from "typescript";


interface Itracks {
    title: string;
    artist: string;
    image: string;
    album: string;
    added_at?: Date | string; 
    time:string;
    albumId:string;
    albumSize: number;
}

interface Ialbuns {
    albumId: string;
}
interface Ilikes {
    albuns: Ialbuns[];
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

            const songAlreadyExist = state.likes.tracks.find(x=> x===action.payload.tracks)

            if(!songAlreadyExist){
                console.log(action.payload.tracks.albumSize)
                console.log(
                    state.likes.tracks.filter(x=>x.albumId === action.payload.tracks.albumId).length
                )
                return {
                    ...state,
                    likes: {
                        ...state.likes,
                        tracks: [...state.likes.tracks, action.payload.tracks],
                        albuns: 
                        action.payload.tracks.albumSize
                        === state.likes.tracks.filter(x=>x.albumId === action.payload.tracks.albumId).length - 1
                        ? action.payload.tracks.albumId : state.likes.albuns 
                    }
                    
                }
            }else {
                return state
            }
          
        case "user/ADD_SEVERAL_LIKED_TRACKS":

        const albumLiked = {
            albumId: action.payload.tracks[0].albumId
        }
    
            return {
                ...state,
                likes:{
                    ...state.likes,
                tracks: state.likes.tracks.concat(action.payload.tracks),
                albuns: [...state.likes.albuns, albumLiked]
                },
               
        
            
            }
        
      
        case "user/REMOVE_SEVERAL_LIKED_TRACKS":
            console.log(action.payload.albumId)
            return {
                ...state,
                likes: {
                    ...state.likes,
                    tracks: state.likes.tracks.filter((x:Itracks)=>x.albumId !== action.payload.albumId),
                    albuns: state.likes.albuns.filter(x=>x.albumId!==action.payload.albumId)

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