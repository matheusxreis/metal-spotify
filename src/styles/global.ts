import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle `

body {
    background: #1A1919;
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: -7%;

    padding-top:60px;
    padding-left: 320px;

}

h1, h2, p, img, h3, h4 {
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