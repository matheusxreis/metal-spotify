import { AnyAction } from "@reduxjs/toolkit";

interface IinitialState {
    colorCard:string;
   
}
let initialState: IinitialState ={
    colorCard:''
}

export function themeReducer(state=initialState, action: AnyAction){
    
    switch(action.type){

        case "theme/CHANGE_COLOR_CARD":
            return action.payload
        
        case "theme/REMOVE_COLOR_CARD":
            return ''
        default:
            return state;
    }
    

}