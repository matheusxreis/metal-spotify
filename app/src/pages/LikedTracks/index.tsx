import React, {useEffect, useState} from 'react'
import { LikedContainer, Header, Content, PlayerDiv } from './styles'

import HeartNotFullIcon from '../../images/HeartNotFullIcon.svg'
import HeartFullIcon from '../../images/HeartFullIcon.svg'
import ClockIcon from '../../images/ClockIcon.svg'
import Likes from '../../images/Likes.svg'


import { useLocation } from 'react-router-dom'
import PlayIcon from '../../images/PlayIcon.svg'

import { useSelector, useDispatch } from 'react-redux'

import { RemoveLikedTracks } from '../../store/user/action'

import { spotifyApi } from '../../api'
import { GetAlbuns } from '../../store/spotify/action'

import { Link } from 'react-router-dom'
export default function LikedTracks(){

    
    const token = useSelector<string>((state:any)=>state?.auth?.token) 
    const username = useSelector<string>((state:any)=>state?.user?.username) 

    const tracksLiked:any = useSelector<any[]>((state:any)=>state?.user?.likes?.tracks)

    const array = [1, 2, 3, 4, 5, 6, 8, 9, 10]
    const [albumId, setAlbumId] = useState<string>('')
    const [album, setAlbum] = useState<any>('')

    const [likedByUser, setLikedByUser] = useState()
    
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
            <img src={Likes} />
            <div>
            <h3> PLAYLIST </h3>
            <h1>MÚSICAS CURTIDAS</h1>
            <p>{username} - {tracksLiked.length} {tracksLiked.length === 1 ? 'música' : 'músicas'}.</p>
            </div>
            </Header>


            <Content>
                <div style={{display:"flex"}}>
                    <PlayerDiv>
                        <img src={PlayIcon} />
                    </PlayerDiv>
                     
                </div>

                <table>
                    <thead>
                    <div className={'title'}>
                    
                    <tr>
                        <th>  <h3> # Título</h3>   </th>
                        <th>  <h3>Album   </h3> </th>
                        <th> <h3>Adicionado em</h3>  </th> 
                        <th> <img src={ClockIcon} />   </th> 
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
                       <Link to={`/album/${x.albumId}`}> <h3> {x.album} </h3> </Link>
                        </td>

                        <td>
                        <h3> {x.added_at} </h3>
                        </td>

                        <td style={{display:'flex', alignContent:"center", alignItems:'center'}}>
                        <span> {x.time } </span>
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