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
    albumSize:number;
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
         
            const trackAlreadyExist = state.likes.tracks.find(x=>x===action.payload.tracks)
              
            const albumIsFull = action.payload.tracks

            const tracksFromAlbum = state.likes.tracks.filter(x=>x.albumId === action.payload.albumId)
                return {
                    ...state,
                    likes: {
                        ...state.likes,
                        tracks: trackAlreadyExist ? state.likes.tracks : [...state.likes.tracks, action.payload.tracks],
                    }
                    
                }
           
          
        case "user/ADD_SEVERAL_LIKED_TRACKS":

        const rightTracks = state.likes.tracks.filter(x=>x!==action.payload.tracks[0].albumId)
                console.log(action.payload.tracks)
        const newAlbum = {
            albumId: action.payload.tracks[0].albumId,
            albumSize: action.payload.tracks[0].albumSize
        }
        return {
            ...state,
           likes:{
                ...state.likes,
                albuns: [...state.likes.albuns, newAlbum],
                tracks: rightTracks.concat(action.payload.tracks),
            }
        }
        
      
        case "user/REMOVE_SEVERAL_LIKED_TRACKS":
            const rightDelTracks = state.likes.tracks.filter(x=>x.albumId!==action.payload.albumId)
            const rightDelAlbuns = state.likes.albuns.filter(x=>x.albumId!==action.payload.albumId)
            return {
                ...state,
                likes: {
                    ...state.likes,
                    albuns:rightDelAlbuns,
                    tracks: rightDelTracks,
                }
            }   
      
        case "user/REMOVE_LIKED_TRACK":

        const track = state.likes.tracks.find(x=>x.title===action.payload.track_name)
        
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