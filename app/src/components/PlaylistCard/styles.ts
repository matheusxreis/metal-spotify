import styled from 'styled-components'



export const PlaylistCardContainer = styled.div`

display:flex;
align-items:center;

z-index:1;
position:absolute;

width: 400px;
background-color:rgba(255,255,255,.1);
border-radius:4px;
img {
    margin-right:5px;
    max-width:100px;
}

p {
    font-size:20px;
}

img.play{
    margin-left:auto;
    width:40px;
    opacity:0;
    transition: opacity 0.3s;
    cursor:pointer;

}


&:hover {
    img.play{
        opacity:1;
    }
}
`