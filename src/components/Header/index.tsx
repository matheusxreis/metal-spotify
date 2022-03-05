import { useEffect, useState } from "react"

import { HeaderContainer } from "./styles"

import { useDispatch, useSelector } from "react-redux"
import { SignIn, GetToken} from "../../store/auth/action"
import { GoButton } from "../GoButton"

import { useNavigate } from "react-router-dom"

interface Iusername {
    user: {
        username: string;
    }
}

export function Header(){

    const dispatch = useDispatch()


    const navigate = useNavigate()

    const username = useSelector<Iusername>((state:Iusername)=> state.user?.username)

    const [goToken, setGoToken] = useState<boolean>(false)

    useEffect(()=>{
        


                dispatch(
                    GetToken()
                )
 
            
        
        
    }, [])
     function handleSignIn(){
    

    
    dispatch(
        SignIn()
    )

    setGoToken(true)
    }

    return (
        <>
        <HeaderContainer>

            { username && localStorage.getItem("token_token") ? 
             <GoButton  text={username} />
             :
             <GoButton onClick={handleSignIn} text={'Entrar'} />
         }
         
        </HeaderContainer>
        </>
    )
}