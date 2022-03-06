import { AnyAction } from "@reduxjs/toolkit";

interface IinitialState {
    token:string;
    goOn: boolean;
}
let initialState: IinitialState ={
    token: '',
    goOn: false
}

export function authReducer(state=initialState, action: AnyAction){
    
    switch(action.type){

        case "auth/GET_TOKEN":
            localStorage.setItem('token_token', action.payload)
            return {
                ...state,
                token: action.payload,
                goOn:true
            }

        case "auth/SIGN_IN":
            return {
                ...state,
                goOn:true

            }   
        
        case "auth/SIGN_OUT":
            localStorage.removeItem('token_token')
            localStorage.removeItem('persist:root')
        return {
            ...state,
            token: '',
            goOn:false
        }

        default:
            return state;
    }
    

}