import { Button } from "./styles";
import UserIcon from '../../images/UserIcon.svg'

interface IGoButton {
    text: string;
}

export function GoButton({text}: IGoButton){


    return (
        <Button>
            <img src={UserIcon} />
            <p>{text}</p>
        </Button>
    )
}