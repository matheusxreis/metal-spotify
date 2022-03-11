import styled from "styled-components";

interface IFlexContainer {
    isActived: boolean;
    width?: number;
}
export const SidebarContainer = styled.div`
z-index:3;
background-color: #000;
//max-width:40%;
width:230px;
height:100%;
padding-left: 15px;
padding-right:15px;
padding-top: 10px;

position: fixed;
top:0;
left:0;


img.logo {
    width:200px;
    
    padding-bottom:40px;
}

@media(max-width:800px){
width:180px;

img.logo {
    width:180px;
}
}

div{
    p{
        font-size:18px;
    }
}

div.InterativeDiv {
   border-bottom: 0.3px solid #c8c8c8;
    margin-top:80px;
    padding-bottom:25px;
    
   img {
       cursor:pointer;
   }
}
`


export const FlexContainer = styled.div<IFlexContainer>`

display:flex;
justify-content:space-between;
max-width:300px;
align-items:center;

transition: filter 0.2s;
filter: ${({isActived})=> isActived? 'brightness(1.0)' : 'brightness(0.7)'};

&:hover {
    filter: brightness(1.0);
}
img {
    width:40px;
}

margin-top: 10px;


p {
    
    display:block;
    margin-right: auto;
    padding-left: 10px;
    font-weight:600;
    font-size: 20px;
}
`