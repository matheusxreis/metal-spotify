import { HomeContainer } from './styles'
import Cover from '../../images/Cover.png'
import { ListenButton } from '../../components/ListenButton'
import { RollDiv } from '../../components/RollDiv'
import { Card } from '../../components/Card'

export default function UserHome(){


    const array = [0, 1, 2, 3, 5, 6]

    return (
        <HomeContainer>
       

        <h2>Albuns mais pesados que o próprio metal: </h2>

        <RollDiv>
            {array.map(x=>(
                <Card title={'Vulgar Display of Power'} description={'Pantera'}>
                     <img src={Cover} />
                </Card>
            ))}
           
        </RollDiv>

        <h2>Tente essas bandas: </h2>
        <RollDiv>
            {array.map(x=>(
                <Card title={'Vulgar Display of Power'} description={'Pantera'}>
                     <img src={Cover} />
                </Card>
            ))}
           
        </RollDiv>



        </HomeContainer>
    )
}