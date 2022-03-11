import React, {useState, useEffect} from 'react'
import { PlaylistCardContainer } from './styles'
import Cover from '../../images/Cover.png'
import LikesIcon from '../../images/Likes.svg'

import PlayIcon from '../../images/PlayIcon.svg'

import { ChangeColorCard, RemoveColorCard} from '../../store/theme/action'

import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

interface IPlaylistCard {
    image?:string;
    description:string;
    color:string;
}
export function PlaylistCard({image, description, color}: IPlaylistCard){

    const dispatch = useDispatch()


    
return (
    <Link to='/'>
            <PlaylistCardContainer 
            onMouseOut={()=>dispatch(RemoveColorCard())}
            onMouseMove={()=>dispatch(ChangeColorCard(color))}>
                <img 
                className='imagePlaylist'
                src={image ? image : LikesIcon }
                 alt="image"
                 onMouseMove={()=>dispatch(ChangeColorCard(color))}
                 />
                <p
                onMouseMove={()=>dispatch(ChangeColorCard(color))}
                > {description} </p>

                <img 
                onClick={()=>dispatch(ChangeColorCard(color))}
                src={PlayIcon} 
                className={'play'}/>
            </PlaylistCardContainer>
    </Link>
)

    
}