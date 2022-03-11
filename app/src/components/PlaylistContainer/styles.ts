import styled from 'styled-components'

interface IPlaylistDiv {

backgroundColor:string;
}

export const PlaylistContainerRelative = styled.div `

    position:absolute;
    top:0;

    

   //width:100%;
    
`
export const PlaylistDiv = styled.div<IPlaylistDiv>`
padding-left:10px;
width:100%;

background: ${({backgroundColor})=>`linear-gradient(rgba(0,0,0,.6) 0,#121212 100%), ${backgroundColor}`};
//width:100%;
height:500px;
//position:absolute;
padding-top:90px;
top:0;
//z-index:0;
`

export const FlexContainer = styled.div`

display:flex;
flex-wrap:wrap;

flex-direction: row;

max-width:100%;
`