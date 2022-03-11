import React, {useState, useEffect} from 'react'
import { PlaylistCardContainer } from './styles'
import Cover from '../../images/Cover.png'

import PlayIcon from '../../images/PlayIcon.svg'

import { ChangeColorCard, RemoveColorCard} from '../../store/theme/action'

import { useDispatch, useSelector } from 'react-redux'


export function PlaylistCard(){

    const dispatch = useDispatch()
    const colorCard = useSelector((state:any)=>state.theme.colorCard)

    const [color, setColor] = useState<number>(0)

    useEffect(()=>{
        console.log(colorCard)
    }, [colorCard])




    
return (
<PlaylistCardContainer 
onMouseOut={()=>dispatch(RemoveColorCard())}
onMouseEnter={()=>dispatch(ChangeColorCard('red'))}>
    <img src={Cover} alt="image"/> <p> Músicas curtidas </p>

    <img src={PlayIcon} className={'play'}/>
</PlaylistCardContainer>
)

    
}