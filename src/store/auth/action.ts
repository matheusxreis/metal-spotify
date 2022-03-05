

export function SignIn(){
    console.log('action')
    return {
        type: "@auth/SIGN_IN"
    }
}


export function GetToken(){

    return {
        type: "@auth/GET_TOKEN"
    }
}