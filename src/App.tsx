import React, {Fragment} from 'react';
import { GlobalStyle } from './styles/global';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import MyRoutes from './routes';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <MyRoutes />

    <Header />
    <Sidebar />
    <GlobalStyle/>
    </BrowserRouter>
    </>
  );
}

export default App;
