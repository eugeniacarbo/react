import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/Items/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import NotFound from './components/NotFound/NotFound'
import CartContextProvider from './Context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (     
    <BrowserRouter>

    <CartContextProvider>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/>} />
          <Route path='/categoria/:categoriaId' element={ <ItemListContainer/>} />
          <Route path='/detail/:detailId' element={ <ItemDetailContainer/> } />
          <Route path='/cart' element={ <Cart/> } />  
          <Route path='/NotFound' element={ <NotFound/> }/>

          <Route path='*' element={ <Navigate to='/NotFound'/> }/>
        </Routes>
        <div className='prueba' >
          <br />
          <br />
          <p>María Eugenia Carbó  ©</p><a className='iconoGitHub' href="https://github.com/eugeniacarbo/react"><FontAwesomeIcon icon={faGithub}/></a>
          <br />
        </div>
      </div>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
