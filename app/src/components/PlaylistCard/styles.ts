import styled from 'styled-components'



export const PlaylistCardContainer = styled.div`

display:flex;
align-items:center;

position:relative;

z-index:1;

margin:3px;
width: 300px;
background-color:rgba(255,255,255,.1);
border-radius:4px;
img {
    margin-right:5px;
    width:90px;
     max-width:100%;
}

p {
    font-size:16x;
}

img.play{
    margin-left:auto;
    width:40px;
    opacity:0;
    transition: opacity 0.3s;
    cursor:pointer;

}

transition: filter 0.2s;
&:hover {

    filter:brightness(0.7);
    img.play{
        opacity:1;
    }
}


@media(max-width:900px){

    p{
        font-size:14px;

    }
    
    img{
        width:50px;
    }

}


@media(max-width:560px){
    width:80px;
    p{
        font-size:0px;
        opacity:0;

    }
    
    img{
        width:100px;
        margin-right:0px;

    }

    img.play{
        
        width:0px;
        opacity:0;
   
        cursor:pointer;
    
    }

    &:hover {
        img.imagePlaylist{
            filter: brightness(0.3);
        }
        img.play{
            position:absolute;
            opacity:1;
            width:60px;
            top:20%;
            bottom:50%;
            left:20%;
            right:10%;

            
        }
    }
}
`