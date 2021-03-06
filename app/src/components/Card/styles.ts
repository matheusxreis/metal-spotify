import styled from 'styled-components'


export const CardContainer = styled.div`

position:relative;
width: 300px;
max-width:300px;
height: 300px;
margin:10px;

padding:40px 30px;

text-align:center;

background: rgba(49,49,49, 0.5);
border-radius: 4px;

img {
    max-width: 260px;
    border-radius:2px;
}

img.bandsImg{
    border-radius:100%;
    max-width: 300px;
    width:200px;
    height:200px;
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
    //background: #615F5F;
    background: rgba(49,49,49, 0.7);

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

@media(max-width:1000px){
    width: 270px;
    max-width:270px;
    height: 270px;
}

@media(max-width:560px){

    width: 100px;
    max-width:100px;
    height: 100px;

    img {
        width:100px;

    }
    img.bandsImg{
    
        width:100px;
        height:100px;
    }

    p, h3{
        font-size:0;
        opacity:1
    }

    div{
        opacity:0;
    }
}

`

export const PlayerDiv = styled.div`

width:60px;
height:60px;
//box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);

border-radius:100%;
//background: linear-gradient(151.67deg, rgba(145, 6, 20, 0.8) 35.66%, rgba(144, 15, 36, 0.795005) 51.4%, rgba(200, 82, 89, 0.8) 86.44%);

background: rgb(145, 6, 20);
position: absolute;

transition: opacity 0.6s;

transition:0.6s;

top:50%;
right:0;

img {
    margin: 5px auto;
    margin-left:5px;
    filter: brightness(0);
    width: 50px;
    box-shadow: 0;
}

&:hover {
    filter: brightness(0.8)
}    

`