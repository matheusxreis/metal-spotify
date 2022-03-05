
import { AnyAction } from "@reduxjs/toolkit"
import { authReducer } from "./auth/reducer"
import { userReducer } from "./user/reducer"

const initialState: any={}

export default function rootReducer(state=initialState, action: AnyAction){

return {
    auth: authReducer(state.auth, action),
    user: userReducer(state.user, action)
}


}