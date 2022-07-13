import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar/navbar'
import Cartwidget from './components/CartWidget/Cartwidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <NavBar>
      </NavBar>
      <div className='prueba' >
        <p>Cabañas El Refugio</p>    
      </div>
        <ItemListContainer titulo="Bienvenido a tus próximas vacaciones" subtitulo="Veni a disfrutar y relajarte" />
    </div>
  )
}

export default App
