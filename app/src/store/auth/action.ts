

export function SignIn(){
    return {
        type: "@auth/SIGN_IN"
    }
}

export function SignOut(){

    return {
        type: 'auth/SIGN_OUT'
    }
}

export function GetToken(){

    return {
        type: "@auth/GET_TOKEN"
    }
}