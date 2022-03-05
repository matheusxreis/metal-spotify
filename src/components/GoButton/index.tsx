import { Button } from "./styles";
import UserIcon from '../../images/UserIcon.svg'

interface IGoButton {
    text: string | any;
    onClick?:()=>any;
}

export function GoButton({text='', onClick}: IGoButton){


    return (
        <Button onClick={onClick}>
            <img src={UserIcon} />
            <p>{text}</p>
        </Button>
    )
}