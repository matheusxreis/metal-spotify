import React, {useEffect, useState} from 'react'
import { AlbumContainer, Header, Content, PlayerDiv, HeartDiv} from './styles'

import HeartNotFullIcon from '../../images/HeartNotFullIcon.svg'
import HeartFullIcon from '../../images/HeartFullIcon.svg'


import { useLocation } from 'react-router-dom'
import PlayIcon from '../../images/PlayIcon.svg'

import { useSelector, useDispatch } from 'react-redux'

import { SetLikedTrack } from '../../store/user/action'

import { spotifyApi } from '../../api'
import { GetAlbuns } from '../../store/spotify/action'


export default function Album(){

    
    const token = useSelector<string>((state:any)=>state?.auth?.token) 
    const tracksLiked:any = useSelector<any[]>((state:any)=>state.user.likes.tracks)

    const array = [1, 2, 3, 4, 5, 6, 8, 9, 10]
    const [albumId, setAlbumId] = useState<string>('')
    const [album, setAlbum] = useState<any>('')
    
    const [tracksLikedState, setTracksLikedState] = useState<any[]>([])

    const dispatch = useDispatch()
    
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
                        number: x.track_number,
                        checked: tracksLiked && tracksLiked.find((y:any)=>y.title === x.name) ? true : false,

                    }
                    }
                )
            })

            console.log(album)

        }

        getAlbum()
       

        }, [location, token, tracksLiked])
    
    
 
    
    function setLikedTrack(title: string, artist: string){

      const payload = {
        title,
        artist
      }
      
        dispatch(
            SetLikedTrack(payload)
        )
      }  

      useEffect(()=>{
          if(album){
          
          }
        
    }, [tracksLiked, album])
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
                <div style={{display:"flex"}}>
                    <PlayerDiv>
                        <img src={PlayIcon} />
                    </PlayerDiv>
                     <HeartDiv>
                     <img src={HeartNotFullIcon} />
                    </HeartDiv> 
                </div>
                <div className={'title'}>
                <h3> # Título </h3> 
                </div>
               
                {album && album.tracks.map((x:any)=>(
                    <div className={'musics'}>
                    <div>
                        <h3> <span className='number'>{x.number} </span>
                        <img src={PlayIcon} />
                        {x.name} </h3>
                        <p> {album?.artist} </p>

                    </div>
                
                    {x.checked === true ? (
                        <img src={HeartFullIcon} onClick={()=>{}} />

                    ): (
                        <img src={HeartNotFullIcon} onClick={()=>setLikedTrack( x.name, album?.artist)} />

                    )}
                    </div>
                ))}

            </Content>


        </AlbumContainer>

        </>
    )
}