

export function GetAlbuns(token:any){
    return {
        type: "@spotify/GET_ALBUNS",
        payload: { token }
    }
}