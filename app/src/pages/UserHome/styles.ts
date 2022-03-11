import styled from "styled-components";


export const HomeContainer = styled.div `


padding-top: 300px;
max-width:100%;

div.containerContent{
    position:absolute;
    
}
div{
    z-index:2;
    h2 {
        
    padding-left:10px;
    
    font-weight: 900;
    margin-top:30px;
}}

p {
    font-weight:600;
}

div.panteraDiv {
    padding-left:10px;

    margin-top:20px;
    margin-bottom:60px;
    width: 600px;
    height: 302px;
    background: #910614;
    border-radius: 4px;

    display:flex;
    align-items:center;
    padding:10px;

    
   
    div.imageDiv {
        padding-left:10px;

        max-width:309px;
        height:309px;
        

        img {
            width:309px;
        height:290px; 
        }

    }

    div.textDiv{

        h3 {
        font-weight:500;
        
        }
        button {
        margin-top: 80%;;
        }

        height:290px;
        margin: 10px;
        margin-bottom:auto;

        p {
            font-weight: 300;
            font-size: 19px;
            color:rgba(252, 252, 252, 0.5);
        }
    }
}
`

export const PlaylistDiv = styled.div`
padding-left:10px;

background: linear-gradient(rgba(0,0,0,.6) 0,#121212 100%), rgb(200, 80, 96);
width:100%;
height:450px;
position:absolute;
padding-top:90px;
top:0;
//z-index:0;
`