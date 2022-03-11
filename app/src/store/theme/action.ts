export function ChangeColorCard(color:string){


    return {
        type: 'theme/CHANGE_COLOR_CARD',
        payload:color
    }
}

export function RemoveColorCard(){

    return {
        type:"theme/REMOVE_COLOR_CARD",
    
    }
}