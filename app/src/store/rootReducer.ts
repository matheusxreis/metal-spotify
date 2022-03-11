
import { AnyAction } from "@reduxjs/toolkit"
import { authReducer } from "./auth/reducer"
import { userReducer } from "./user/reducer"
import { spotifyReducer } from "./spotify/reducer"
import { themeReducer } from "./theme/reducer"

interface IinitialStateRoot {
    auth: {
        token:string;
        goOn:boolean;
    },
    user: {
        username:string,
        likes: {
            username:string;
            albuns: any[];
            tracks: any[]
        }
    }

    spotify: {
        albuns: any[];
        artists: any[];
        albumPage: boolean;
    },
    theme: {
        colorCard:string;
    }
}
let initialState: IinitialStateRoot = {
    auth: {
        token:'',
        goOn: false
    },
    user: {
        username:'',
        likes: {
            username:'',
            albuns: [],
            tracks: []
        }
    },

    spotify: {
        albuns: [],
        artists: [],
        albumPage: false
    },
    theme: {
        colorCard:''
    }
}

export default function rootReducer(state=initialState, action: AnyAction){

return {
    auth: authReducer(state.auth, action),
    user: userReducer(state.user, action),
    spotify: spotifyReducer(state.spotify, action),
    theme: themeReducer(state.theme, action)
}


}