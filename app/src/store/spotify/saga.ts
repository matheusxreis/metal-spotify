import { AnyAction } from '@reduxjs/toolkit'
import { all, put, takeEvery, call, take} from 'redux-saga/effects'

import { spotifyApi } from '../../api'


interface Iimages {
    url: string;
}
interface Itracks {
    album: {
        name:string;
        href:string;
        images: Iimages[];
        id: string;
        artists: [{
            name:string;
        }]
    }

    artists: [{
        id:string
        name:string;
    }]
}
interface IResponse {
    data: {
       tracks: Itracks[]
    }
}

interface IResponseArtist {
    data: {
        name: string;
        href:string;
        images: Iimages[];
        genres: string[];
        id:string;
    }
}


  function* getAlbuns(action: AnyAction){

    const { token } = action.payload;

    const config = {
        headers: {Authorization: token }
    }
    const response: IResponse = yield call(spotifyApi.get,
        '/recommendations?seed_genres=metal',
        config
        )

      const albuns = response.data.tracks.map((x:Itracks)=>{
          return {
              name: x.album.name,
              images: x.album.images,
              id: x.album.id,
              link: x.album.href,
              artist: x.album.artists[0].name

          }
      })  




    yield put({type: "@spotify/GET_ARTISTS", payload: {data: response.data.tracks, config} })
    yield put({type: "spotify/GET_ALBUNS", payload: { albuns}})


}


function* getArtists(action: AnyAction){

    const { data, config} = action.payload


    let artists: any = [];
    for(let i = 0; i<6; i++){

        
       let res: IResponseArtist = yield call(spotifyApi.get,
            `/artists/${data[i].artists[0].id}`,
            config)
            artists = [...artists, {
                name: res.data.name,
                link: res.data.href,
                images: res.data.images,
                genres: res.data.genres,
                id: res.data.id
            }]
    }

       
        
    artists = artists.reverse()
        console.log(artists)
        yield put({type: "spotify/GET_ARTISTS", payload: {artists} })

}


export default function* spotifySaga(){
    yield all([
        takeEvery("@spotify/GET_ALBUNS", getAlbuns),
        takeEvery("@spotify/GET_ARTISTS", getArtists)       
    ])
}
