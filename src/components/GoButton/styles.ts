import styled from "styled-components";


export const Button = styled.button `
display:flex;
align-items:center;

width:135px;
height:39px;

border-radius:50px;

background: #000;
color: #fff;

font-size:16px;

font-weight:600;
margin: 23px;
border: 0;

transition:0.2s;

&:hover {
    background: #615F5F;
}

img {
    margin:0;
    margin-right: auto;
    width: 30px;
}

p {
    margin:0;
    margin-right: auto;
}
}


`