import styled from "styled-components";

interface IHeaderContainer {
    onTop:boolean;
}

export const HeaderContainer = styled.div<IHeaderContainer> `

width:100%;
z-index:2;
position:fixed;
top:0;
left:0;

transition: 0.4s;

background:${({onTop})=> onTop ? ' ' : 'rgba(0, 0, 0, 0.7);'};

height:80px;

line-height:80px;


button {
    margin-left: auto;
}
`

export const OptionsDiv = styled.div `

background: #313131;
width:200px;
height:100px;

position: absolute;
right 0;
margin-right:10px;

font-size: 24px;

padding:3px 10px;

box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);

border-radius:2px;

p {
    cursor:pointer;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8);
    }
}
`