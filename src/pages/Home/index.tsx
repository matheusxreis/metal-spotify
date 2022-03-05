import { HomeContainer } from './styles'
import Cover from '../../images/Cover.png'
import { ListenButton } from '../../components/ListenButton'
import { RollDiv } from '../../components/RollDiv'
import { Card } from '../../components/Card'

import { useDispatch } from 'react-redux'

import { SignIn } from '../../store/auth/action'
export default function Home(){

    const dispatch = useDispatch()



    function handleSignIn(){
    dispatch(
        SignIn()
    )


}


    const array = [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12]

    return (
        <HomeContainer>
        <h2>30 anos de Vulgar Display of Power:</h2>
        <p> 59 minutos de pura revolta, como um bom metal deve ser.</p>
       
        <div className='panteraDiv'>
            <div className='imageDiv'>  
                <img src={Cover} alt="" />

                
            </div>

            <div className='textDiv'>
                <h3>
                    Vulgar Display of Power
                </h3>
                <p>
                    Pantera
                </p>

                <ListenButton text="Ouça agora!" />
            </div>
        </div>


        <h2>Albuns mais pesados que o próprio metal: </h2>

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