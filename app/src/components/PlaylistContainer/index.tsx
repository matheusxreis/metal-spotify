import React, {useState, useEffect} from "react";
import { PlaylistDiv, FlexContainer, PlaylistContainerRelative} from "./styles";

import { PlaylistCard } from "../PlaylistCard";

import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";
export function PlaylistContainer(){

    const [greetings, setGreetings] = useState<string>('')

    useEffect(()=>{

        const currentHour = new Date().getHours()

        if(currentHour<=12){
            setGreetings('Bom dia!')
        }else if(currentHour>12 && currentHour<18){
            setGreetings('Boa tarde!')
        }else{
            setGreetings('Boa noite!')
        }
    }, [greetings])

    const colorCard = useSelector((state:any)=>state.theme.colorCard)

    const array=[
        {
            image: '',
            color: '#910614 ',
            description: 'Músicas Curtidas'
        },
        {
            image: '',
            color: 'steelblue',
            description: 'playlistop'
        },
        {
            image: '',
            color: 'green',
            description: 'playlist2'
        },
        {
            image: '',
            color: '#c8c8c8',
            description: 'AAAAAAmtoloca'
        },
        {
            image: '',
            color: 'yellow',
            description: 'q4f4'
        },

    ]

    return (
        <PlaylistContainerRelative>
        <PlaylistDiv backgroundColor={colorCard ? colorCard : 'rgb(200, 80, 96)'}>
            <h1>{greetings}</h1>
            <FlexContainer>
                {array.map(x=>(
                 <PlaylistCard description={x.description} color={x.color} image={x.image} />
                ))}
          
            </FlexContainer>
        </PlaylistDiv>
        </PlaylistContainerRelative>

    )
}