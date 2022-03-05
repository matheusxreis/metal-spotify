import React from 'react'

import {Navigate, useNavigate, Route, Routes, BrowserRouter} from 'react-router-dom'


import Home from '../pages/Home'

import UserHome from '../pages/UserHome'


export default function MyRoutes(){



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
           

            </Routes>
        
     
    )
}
