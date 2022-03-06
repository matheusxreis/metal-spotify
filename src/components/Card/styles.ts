import styled from 'styled-components'


export const CardContainer = styled.div`

position:relative;
width: 600px;
max-width:600px;
height: 500px;
margin:10px;

padding:40px 30px;

text-align:center;

background: #313131;
border-radius: 4px;

img {
    width: 320px;
    border-radius:2px;
}

img.bandsImg{
    border-radius:100%;
    width: 300px;
    height:300px;
    box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
}

h3{
    font-weight: 500;
}

p {
            font-weight: 300;
            font-size: 19px;
            color:rgba(252, 252, 252, 0.5);
            margin-top:10px;
 }

 transition: 0.2;
 cursor: pointer;

 div {
     opacity:0;
 }

 &:hover {
    background: #615F5F;
    filter: brightness(0.8);
    div{
        opacity:1;
        top:40%;
    }
    !img.play {
        box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
    }

    img {
        

    }
    
}

`

export const PlayerDiv = styled.div`

width:80px;
height:80px;
box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);

border-radius:100%;
background: linear-gradient(151.67deg, rgba(145, 6, 20, 0.8) 35.66%, rgba(144, 15, 36, 0.795005) 51.4%, rgba(200, 82, 89, 0.8) 86.44%);
position: absolute;

transition: opacity 0.6s;

transition:0.6s;

top:50%;
right:0;

img {
    margin: 5px auto;
    margin-left:3px;
    filter: brightness(0);
    width: 70px;
    box-shadow: 0;
}

&:hover {
    filter: brightness(0.8)
}    

`