import { useEffect, useState } from 'react'
import { HomeContainer } from './styles'
import Cover from '../../images/Cover.png'
import { ListenButton } from '../../components/ListenButton'
import { RollDiv } from '../../components/RollDiv'
import { Card } from '../../components/Card'

import { useSelector, useDispatch } from 'react-redux'
import { GetAlbuns } from '../../store/spotify/action'

import { spotifyApi } from '../../api'

interface Itoken {

    auth: {
        token:string
    }
}

interface Iimage {
    url: string;
}
interface Ialbum {

    name:string;
    link:string;
    images: Iimage[];
    artist: string;
}


interface Iartists {
    name:string;
    link:string;
    images: Iimage[];
    genres: string[];
    id: string[];
}
export default function UserHome(){

    const dispatch = useDispatch()
    const token = useSelector<Itoken>((state:Itoken)=>state.auth.token) 
    const albuns: Ialbum[]  = useSelector((state:any)=>state.spotify.albuns)
    const artists: Iartists[]  = useSelector((state:any)=>state.spotify.artists)


    
useEffect(()=>{
    if(token){
        dispatch(
            GetAlbuns(token)
        )
       
    }
}, [token])

    const array = [0, 1, 2, 3, 5, 6]

    return (
        <HomeContainer>
       

        <h2>Albuns mais pesados que o próprio metal: </h2>

        <RollDiv>
            {albuns.map(x=>(
                <Card title={x.name} description={x.artist}>
                     <img src={x.images[1].url} />
                </Card>
            ))}
           
        </RollDiv>

        <h2>Tente essas bandas: </h2>
        <RollDiv>
            {artists.map(x=>(
                <Card title={x.name} description={x.genres[1]}>
                    <img 
                    className='bandsImg'
                    src={x.images[0].url} />
                </Card>
            ))}
           
        </RollDiv>



        </HomeContainer>
    )
}