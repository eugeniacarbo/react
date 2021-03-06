import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/Items/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
     <BrowserRouter>
    <div className="App">
      <NavBar>
         <Routes>
          <Route path='/' element={ <ItemListContainer/>} />
          <Route path='/categoria/:categoriaId' element={ <ItemListContainer/>} />
          <Route path='/detail/:detailId' element={ <ItemDetailContainer/> } />
          <Route path='/cart' element={ <Cart/> } />  
          <Route path='/NotFound' element={ <NotFound/> }/>

          <Route path='*' element={ <Navigate to='/NotFound'/> }/>
        </Routes>
      
      <div className='prueba' >
            <p>Cabañas El Refugio</p>
        <br />    
        <h1>Bienvenido a tus próximas vacaciones.</h1>
        <br />
        <br />
        <br />
      </div>
    </div>
    </BrowserRouter>   

  )
}

export default App
