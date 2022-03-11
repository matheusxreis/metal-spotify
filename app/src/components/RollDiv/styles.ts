import styled from "styled-components";


export const RollDivContainer = styled.div `

overflow-x: scroll;
overflow-y:none;
display:flex;
justify-content: space-between;

&::-webkit-scrollbar {
        width: 10px;
        height:5px;
        background:rgba(0, 0, 0, 0.7);
        filter: brightness(0.8);

        
    }
    transition: 0.2s;

&:hover {
    &::-webkit-scrollbar {
       
        height:8px;
        
        
    }

}

&::-webkit-scrollbar-thumb {
        background: #212930;
        width: 5px;
    }

`