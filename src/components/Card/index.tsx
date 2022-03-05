import { CardContainer } from "./styles"


interface ICard {

    children: React.ReactElement;
    title: string;
    description: string;

}
export function Card({
    children,
    title,
    description
}: ICard){
   
    return (
            <CardContainer>

            {children} 
            <h3> {title} </h3>
            <p> {description} </p>

            </CardContainer>
    )
}