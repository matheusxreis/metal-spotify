import styled from "styled-components";


export const HomeContainer = styled.div `

padding-top: 50px;
max-width:100%;

h2 {
    font-weight: 900;
}

p {
    font-weight:600;
}

div.panteraDiv {
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
        width:309px;
        height:290px;
        

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