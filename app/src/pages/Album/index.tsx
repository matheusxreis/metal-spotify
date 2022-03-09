import React, {useEffect, useState} from 'react'
import { AlbumContainer, Header, Content, PlayerDiv, HeartDiv} from './styles'

import HeartNotFullIcon from '../../images/HeartNotFullIcon.svg'
import HeartFullIcon from '../../images/HeartFullIcon.svg'


import { useLocation } from 'react-router-dom'
import PlayIcon from '../../images/PlayIcon.svg'

import { useSelector, useDispatch } from 'react-redux'

import { SetLikedTrack, 
    RemoveLikedTracks,
     SetLikedAlbum,
     RemoveLikedAlbum } from '../../store/user/action'

import { spotifyApi } from '../../api'
import { GetAlbuns } from '../../store/spotify/action'


export default function Album(){

    
    const token = useSelector<string>((state:any)=>state?.auth?.token) 
    const tracksLiked:any = useSelector<any[]>((state:any)=>state?.user?.likes?.tracks)
    const albunsLiked: any = useSelector<any[]>((state:any)=> state.user.likes.albuns)

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
            
           console.log('changed')
           const albumExist = albunsLiked.find((x:any)=>x.albumId===albumId)
           console.log(albunsLiked)
           setAlbum ({
                artist: response.data.artists[0].name,
                image: response.data.images[0].url,
                name: response.data.name,
                allAlbumLiked: 
                    albunsLiked.find((x:any)=>x.albumId===albumId) ? true : false,
                tracks: response.data.tracks.items.map((x:any)=>{
                    console.log(tracksLiked.find((y:any)=>y.title !== x.name) ? true : false,)

                    return {
                        name: x.name,
                        number: x.track_number,
                        checked: tracksLiked && tracksLiked.find((y:any)=>y.title === x.name) ? true : false,
                        time: (x.duration_ms/60000).toString().slice(0, 4),
                       
                        }}
                )
            })


        }

        getAlbum()
       

        }, [location, token, tracksLiked, albunsLiked])
    
    
 
    
    function setLikedTrack(title: string, artist: string, image:string, album:string, time:number, albumId:string){

        const [ , month, day, year] = new Date().toString().split(' ')


      

         const payload = {
        title,
        artist,
        image,
        album,
        added_at: `${day}/${month}/${year}`,
        time,
        albumId
      }
      
        dispatch(
            SetLikedTrack(payload)
        )
      }  

    function removeLikedTrack(title:string){
        dispatch(
            RemoveLikedTracks(title)
        )
    }

    function setLikedAlbum(){

        const [ , month, day, year] = new Date().toString().split(' ')

       
        const payload = album.tracks.map((x:any)=>{
            return {
                title: x.name,
                artist: album?.artist,
                image: album?.image,
                album: album?.name,
                added_at: `${day}/${month}/${year}`,
                time: x.time,
                albumId

            }
        })
        dispatch(
            SetLikedAlbum(payload)
        )
    }

    function removeLikedAlbum(){
        dispatch(
            RemoveLikedAlbum(albumId)
        )
    }
      useEffect(()=>{
         
        console.log(tracksLiked)
    }, [tracksLiked])
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
                     <HeartDiv >
                         {album.allAlbumLiked ?
                                <img onClick={()=>removeLikedAlbum() }src={HeartFullIcon} />
                        :
                               <img onClick={()=>setLikedAlbum()} src={HeartNotFullIcon} />
                         }
                    
                   
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
                        <img src={HeartFullIcon} onClick={()=>removeLikedTrack(x.name)} />

                    ): (
                        <img src={HeartNotFullIcon} onClick={()=>setLikedTrack( x.name, album?.artist, album?.image, album?.name, x.time, albumId)} />

                    )}
                    </div>
                ))}

            </Content>


        </AlbumContainer>

        </>
    )
}