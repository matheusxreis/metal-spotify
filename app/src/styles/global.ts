import { createGlobalStyle } from 'styled-components'

interface IGlobalStyle {
    background:string
}
export const GlobalStyle = createGlobalStyle<IGlobalStyle> `

body {
    background: ${({background})=> background==="normal" ? 
    '#1A1919' : 'linear-gradient(to bottom, #000, #910614 30%, #910614 20%, #000);' };

    font-family: Montserrat;
    color: #FFF;
    height: ${({background})=> background==="normal" ? '' : '1300px'};
    letter-spacing: -7%;

    padding-top:60px;
    padding-left: ${({background})=> background==="normal" ? '250px' : '230px'};

    padding-bottom:0px;

    @media(max-width:800px){
        padding-left: ${({background})=> background==="normal" ? '210px' : '180px'};

    }
}

h1, h2, p, img, h3, h4{
    padding:0;
    margin:0;
}
a {
    color: #FFF;
    text-decoration: none;
}

button {
    cursor:pointer;
}


`