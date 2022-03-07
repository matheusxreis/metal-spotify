import { Button } from "./styles";
import UserIcon from '../../images/UserIcon.svg'

import PlayIcon from '../../images/PlayIcon.svg'

interface IGoButton {
    text: string;
}

export function ListenButton({text}: IGoButton){


    return (
        <Button>
            <img src={PlayIcon} />
            <span>{text}</span>
        </Button>
    )
}