import React, { useEffect } from 'react'

import {Navigate, useNavigate, Route, Routes, BrowserRouter} from 'react-router-dom'


import Home from '../pages/Home'

import  Album from '../pages/Album'

import UserHome from '../pages/UserHome'

import { useLocation } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { OutAlbumPage, InAlbumPage } from '../store/spotify/action'
import LikedTracks from '../pages/LikedTracks'
export default function MyRoutes(){


    const dispatch = useDispatch()
    const location = useLocation()


    useEffect(()=>{

        const [, page,] = location.pathname.split('/')

        console.log(page)
        if(page === 'album'){
          dispatch(
              InAlbumPage()
          )
        }else if(page === 'tracks'){
            dispatch(
                InAlbumPage()
            )
        }
        else{
            dispatch(
            OutAlbumPage()
            )
        }

        

    }, [location, dispatch])


    return (
        
            <Routes>



            {localStorage.getItem("token_token") ?
            (
                <Route
                element={
                    <UserHome />
                }
                path='/'
                />
            ) :
            <Route
            element={
                <Home />
            }
            path='/'
            />
            }

            <Route
            element={
                <Album />
            }
            path='/album/:id'
            />  

            <Route
            element={
                <LikedTracks />
            }
            path='/tracks'
            />  
           
           

            </Routes>
        
     
    )
}
