import React, {Fragment, useState, useEffect} from 'react';
import { GlobalStyle } from './styles/global';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import MyRoutes from './routes';
import { BrowserRouter } from 'react-router-dom'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { useSelector } from 'react-redux';

import { SkeletonComponent } from './components/SkeletonComponent';
function App() {

  const [loading, setLoading] = useState<boolean>(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  }, [])

  const albumPage = useSelector((state:any)=>state.spotify.albumPage)
  return (
    <>
    
    { loading ? 
    <>
    <SkeletonComponent />
    <GlobalStyle background={albumPage ? 'notnormal' : 'normal'} />
      </>
  :
   <BrowserRouter>
    <MyRoutes />
    <Header />
    <Sidebar />
    <GlobalStyle background={albumPage ? 'notnormal' : 'normal'} />
    </BrowserRouter>
   }
    
    
    </>
  );
}

export default App;
