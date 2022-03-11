import { useEffect, useState } from "react"

import { HeaderContainer, OptionsDiv} from "./styles"

import { useDispatch, useSelector } from "react-redux"
import { SignIn, GetToken, SignOut} from "../../store/auth/action"
import { GoButton } from "../GoButton"

import DownIcon from '../../images/Down.svg'
import UpIcon from '../../images/Up.svg'

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

    const [openOptionDiv, setOpenOptionDiv] = useState<boolean>(false)
    const goOn = useSelector<boolean>((state:any)=>state.auth?.goOn)

    const [scroll, setScroll] = useState<boolean>(true)
    useEffect(()=>{

        if(goOn){
            dispatch(
                GetToken()
            )
        }
                
 
    }, [goOn, dispatch])
     function handleSignIn(){
    

    
    dispatch(
        SignIn()
    )

    window.location.href= 'http://localhost:8080/auth/login'

    }

    function handleSignOut(){

        dispatch(
            SignOut()
        )
        
        window.open('http://localhost:8080/auth/signout', '_blank')

        window.location.reload()
    }

    useEffect(()=>{
            window.addEventListener('scroll', ()=>setScroll(window.scrollY===0))
    }, [])

    return (
        <>
        <HeaderContainer onTop={scroll}>

            { username && localStorage.getItem("token_token") ? 
             <GoButton text={username}
             onClick={()=>setOpenOptionDiv(!openOptionDiv)}
             > 
             <img src={ openOptionDiv ? UpIcon : DownIcon} alt="" />
             </GoButton>
             :
             <GoButton onClick={handleSignIn} text={'Entrar'} />
         }
         
         {openOptionDiv && (
                <OptionsDiv>
                <p onClick={()=>handleSignOut()}> Sair </p>     
                </OptionsDiv>
         )}
      
        </HeaderContainer>
        </>
    )
}