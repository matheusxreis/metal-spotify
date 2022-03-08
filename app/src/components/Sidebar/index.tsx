import React from "react";
import { SidebarContainer, FlexContainer } from "./styles";
import Logo from '../../images/Logo.svg'
import HomeIcon from '../../images/HomeIcon.svg'
import LibIcon from '../../images/LibIcon.svg'
import SearchIcon from '../../images/SearchIcon.svg'
import PlaylistIcon from '../../images/PlaylistIcon.svg'
import LikesIcon from '../../images/Likes.svg'

import { Link, useLocation } from "react-router-dom";

export function Sidebar(){

  const location = useLocation().pathname

    return (

            <SidebarContainer>
         
              <img 
              className={'logo'} 
              alt={"logo"}
              src={Logo} />

            <div>
            <Link to="/">
                <FlexContainer isActived={location==='/'}>
                <img
                alt={"home"}
                src={HomeIcon} />

                <p>Início</p>
                    
                </FlexContainer>
            </Link>

            <Link to="/">
                <FlexContainer isActived={location==='/search'}>
                <img
                alt={"search"}
                src={SearchIcon} />

                <p>Buscar</p>
                    
                </FlexContainer>
            </Link>


            <Link to="/">
                <FlexContainer isActived={location==='/librarie'}>
                <img
                alt={"librarie"}
                src={LibIcon} />

                <p>Sua Biblioteca</p>
                    
                </FlexContainer>
            </Link>

            </div>


            

            <div className="InterativeDiv">
              <FlexContainer isActived={false}>

                <img 
                src={PlaylistIcon}
                alt={'playlist'}
                />
                <p>Criar playlist</p>

              </FlexContainer>

              <Link to='/tracks'>
              <FlexContainer isActived={location==='/tracks'}>

                  <img 
                  src={LikesIcon}
                  alt={'playlist'}
                  />
                  <p>Músicas Curtidas</p>

                  </FlexContainer>
              </Link>  
            </div>
            </SidebarContainer>
    )


}