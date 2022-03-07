interface ITrack {
    title: string;
    artist: string;
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