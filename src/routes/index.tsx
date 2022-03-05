import React from 'react'

import {Navigate, useNavigate, Route, Routes, BrowserRouter} from 'react-router-dom'


import Home from '../pages/Home'


export default function MyRoutes(){



    return (
        
            <Routes>


                <Route
                element={
                    <Home />
                }
                path='/'
                />

            </Routes>
        
     
    )
}
