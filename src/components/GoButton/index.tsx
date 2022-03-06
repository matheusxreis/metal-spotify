import { Button } from "./styles";
import UserIcon from '../../images/UserIcon.svg'

interface IGoButton {
    text: string | any;
    onClick?:()=>any;
    children?: React.ReactElement | React.ReactElement[]
}

export function GoButton({text='', children, onClick}: IGoButton){


    return (
        <Button onClick={onClick}>
            <img src={UserIcon} />
            <p>{text}</p>
            {children && children}
        </Button>
    )
}