
import { AnyAction } from "@reduxjs/toolkit"
import { authReducer } from "./auth/reducer"
import { userReducer } from "./user/reducer"
import { spotifyReducer } from "./spotify/reducer"

const initialState: any={}

export default function rootReducer(state=initialState, action: AnyAction){

return {
    auth: authReducer(state.auth, action),
    user: userReducer(state.user, action),
    spotify: spotifyReducer(state.spotify, action)
}


}