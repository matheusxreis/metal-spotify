import React, {useEffect, useState} from 'react'
import { LikedContainer, Header, Content, PlayerDiv, HeartDiv} from './styles'

import HeartNotFullIcon from '../../images/HeartNotFullIcon.svg'
import HeartFullIcon from '../../images/HeartFullIcon.svg'


import { useLocation } from 'react-router-dom'
import PlayIcon from '../../images/PlayIcon.svg'

import { useSelector, useDispatch } from 'react-redux'

import { RemoveLikedTracks } from '../../store/user/action'

import { spotifyApi } from '../../api'
import { GetAlbuns } from '../../store/spotify/action'


export default function LikedTracks(){

    
    const token = useSelector<string>((state:any)=>state?.auth?.token) 
    const tracksLiked:any = useSelector<any[]>((state:any)=>state?.user?.likes?.tracks)

    const array = [1, 2, 3, 4, 5, 6, 8, 9, 10]
    const [albumId, setAlbumId] = useState<string>('')
    const [album, setAlbum] = useState<any>('')
    
    const [tracksLikedState, setTracksLikedState] = useState<any[]>([])

    const dispatch = useDispatch()
    
    const location = useLocation()

  
    
    function removeLikedTrack(title: string){

        dispatch(
            RemoveLikedTracks(title)
        )
        
      }  

      useEffect(()=>{
         
        console.log(tracksLiked)
    }, [tracksLiked])
    return (

        <>


        <LikedContainer>

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

                <table>
                    <thead>
                    <div className={'title'}>
                    
                    <tr>
                        <th>  <h3> # Título</h3>   </th>
                        <th>  <h3>Album   </h3> </th>
                        <th> <h3>Adicionado em</h3>  </th> 
                        <th> <h3>Relógio</h3>  </th> 
                    </tr>
                    </div>
                    </thead>
                
                <tbody>
                {tracksLiked.map((x:any)=>(
                    
                        <div className={'musics'}>
<tr>

                        <td>
                        <div style={{display:'flex', alignItems:"center"}}>   
                            <h3> 
                                <span className='number'>
                                {tracksLiked.indexOf(x)+1} 
                                </span> 
                            <img src={PlayIcon} />
                            </h3>
                            <img className='cover' src={x.image}  />
                        

                            <div>
                                <h3>{x.title} </h3>
                                <p> {x.artist} </p>
                            </div>
                            
                        </div>
                        </td>

                        <td>
                        <h3> {x.album} </h3>
                        </td>

                        <td>
                        <h3> {x.added_at} </h3>
                        </td>

                        <td>
                        <img src={HeartFullIcon} onClick={()=>removeLikedTrack(x.title)} />
                        </td>

                        </tr>
                        </div>
                   
                ))}
                </tbody>
                </table>

            </Content>


        </LikedContainer>

        </>
    )
}