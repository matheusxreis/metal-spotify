import styled from "styled-components";


export const Button = styled.button `
display:flex;
align-items:center;

width:155px;
height:39px;

border-radius:50px;

background: #000;
color: #fff;

font-size:16px;

font-weight:600;
border: 0;

transition:0.2s;
&:hover {
    background: #900614;
    filter: brightness(0.8);
}

img {
    margin:0;
    margin-right: auto;
    width: 30px;
}

span {
    margin:0;
    margin-right: auto;
}
}


`