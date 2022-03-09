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
    console.log('FOI NA SEGUNDA')

    return {
        type: 'user/ADD_NEW_LIKED_TRACK',
        payload: {
            tracks
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