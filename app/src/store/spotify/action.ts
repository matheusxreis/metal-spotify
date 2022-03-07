

export function GetAlbuns(token:any){
    return {
        type: "@spotify/GET_ALBUNS",
        payload: { token }
    }
}

export function InAlbumPage(){

    return {
        type: "spotify/IN_ALBUM_PAGE"
    }

}
  
export function OutAlbumPage(){

    return {
        type: "spotify/OUT_ALBUM_PAGE"
    }

}