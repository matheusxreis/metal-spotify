import { CardContainer, PlayerDiv } from "./styles"
import PlayIcon from '../../images/PlayIcon.svg'

import {Link } from 'react-router-dom'

interface ICard {

    children: React.ReactElement;
    title: string;
    description: string;
    link:string;
}
export function Card({
    children,
    title,
    description,
    link
}: ICard){
   
    return (
            <CardContainer>

            {children} 
            <h3> {title} </h3>
            <p> {description} </p>

            <PlayerDiv> 
             <Link to={link}><img  className="play" src={PlayIcon }/ ></Link>  
            </PlayerDiv>

            </CardContainer>
    )
}