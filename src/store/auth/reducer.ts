import { AnyAction } from "@reduxjs/toolkit";

interface IinitialState {
    token:string;
}
let initialState: IinitialState; 

export function authReducer(state=initialState, action: AnyAction){
    
    switch(action.type){

        case "auth/GET_TOKEN":
            localStorage.setItem('token_token', action.payload)
            return {
                ...state,
                token: action.payload
            }
    }
    

}