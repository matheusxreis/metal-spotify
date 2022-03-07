import { RollDivContainer } from "./styles";


interface IRollDiv {

children: React.ReactElement | React.ReactElement[]
}

export function RollDiv({children}: IRollDiv){


    return (
        <RollDivContainer>
            {children}
        </RollDivContainer>
    )
}