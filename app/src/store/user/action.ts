interface ITrack {
    title: string;
    artist: string;
    image: string;
    album: string;
    added_at?: Date | string; 
    time: number,
    albumId: string
}

export function GetUserInfo(){

    return {
        type: 'user/GET_USER_INFO'
    }
}

export function SetLikedTrack(tracks: ITrack){

    return {
        type: 'user/ADD_NEW_LIKED_TRACK',
        payload: {
            tracks
        }
    }
}

export function SetLikedAlbum(tracks: ITrack[]){
    console.log(tracks)
    return {
        type: "user/ADD_SEVERAL_LIKED_TRACKS",
        payload: {
            tracks
        }
    }
}



export function RemoveLikedAlbum(albumId: string){
    return {
        type:"user/REMOVE_SEVERAL_LIKED_TRACKS",
        payload: {
            albumId
        }
    }
}
export function RemoveLikedTracks(track_name: string){

    return {
        type: 'user/REMOVE_LIKED_TRACK',
        payload: {
            track_name
        }
    }
}