import React, {useEffect, useState} from 'react'
import { AlbumContainer, Header, Content, PlayerDiv} from './styles'

import Cover from '../../images/Cover.png'
import { useLocation } from 'react-router-dom'
import PlayIcon from '../../images/PlayIcon.svg'

import { useSelector } from 'react-redux'

import Skeleton, { SkeletonTheme }from 'react-loading-skeleton'


import { spotifyApi } from '../../api'
export default function Album(){

    
    const token = useSelector<string>((state:any)=>state?.auth?.token) 

    const array = [1, 2, 3, 4, 5, 6, 8, 9, 10]
    const [albumId, setAlbumId] = useState<string>('')
    const [album, setAlbum] = useState<any>('')
    const location = useLocation()

    useEffect(()=>{

        const [, , query] = location.pathname.split("/")

        setAlbumId(query)
        async function  getAlbum(){
            const config: any = {
                headers: { Authorization: token}
            }
           const response = await spotifyApi.get(`/albums/${query}`, config)
            
            setAlbum ({
                artist: response.data.artists[0].name,
                image: response.data.images[0].url,
                name: response.data.name,
                tracks: response.data.tracks.items.map((x:any)=>{
                    return {
                        name: x.name,
                        number: x.track_number 
                    }
                    }
                )
            })

            console.log(album)

        }

        getAlbum()
       

        }, [location, token])
    
        // useEffect(()=>{

        // }, [locatio])
    return (

        <>


        <AlbumContainer>

            <Header>
            <img src={album?.image} />
            <div>
            <h3> ÁLBUM </h3>
            <h1>{album?.name}</h1>
            <p> {album?.artist} </p>
            </div>
            </Header>


            <Content>
                <PlayerDiv>
                    <img src={PlayIcon} />
                </PlayerDiv>
                <div className={'title'}>
                <h3> # Título </h3> 
                </div>
               
                {album && album.tracks.map((x:any)=>(
                    <div className={'musics'}>
                    <h3>{x.number} {x.name} </h3>
                    <p> {album?.artist} </p>
                    </div>
                ))}

            </Content>


        </AlbumContainer>

        </>
    )
}