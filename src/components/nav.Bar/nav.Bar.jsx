import React, {useState} from 'react'
import Cartwidget from '../CartWidget/Cartwidget'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMicrochip} from '@fortawesome/free-solid-svg-icons'
import {faMemory} from '@fortawesome/free-solid-svg-icons'
import {faDesktop} from '@fortawesome/free-solid-svg-icons'
import {faKeyboard} from '@fortawesome/free-solid-svg-icons'



const NavBar = () => {

  return (
    <header className='shadow-sm'>
        <div className='barraRGB'></div>
        <nav className="navbar navbar-expand-xl navbar-custom">
            <div className="container-fluid">
                <a className="navbar-brand ms-4" id='containerLogo' href="#"><img src="https://picsum.photos/id/301/600" id='logo' alt="LogoMarca" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0 navLinks">
                    <li className="nav-item me-2">
                    <a className="nav-link" href="#">Promociones</a>
                        <img className='iconos' src="https://picsum.photos/id/301/600" alt="" />
                    </li>
                    <li className="nav-item me-2">
                    <a className="nav-link" href="#">Promociones con amigos</a>
                    <span className='iconosFa'><FontAwesomeIcon icon={faMicrochip}/></span>
                    </li>
                    <li className="nav-item me-2">
                    <a className="nav-link" href="#">Promociones en familia</a>
                    <img className='iconos' src="https://picsum.photos/id/390/600" alt="" />
                    </li>
                    <li className="nav-item me-2">
                    <a className="nav-link" href="#">Promociones en pareja</a>
                    <img className='iconos' src="https://picsum.photos/id/407/600" alt="" />
                    </li>
                    <li className="nav-item me-2">
                    <a className="nav-link" href="#">Promociones solos</a>
                    <img className='iconos' src="https://picsum.photos/id/449/600" alt="" />
                    </li>
                    <li className="nav-item me-2">
                    <a className="nav-link" href="#">Memoria Ram</a>
                    <span className='iconosFa'><FontAwesomeIcon icon={faMemory}/></span>
                    </li>
                    <li className="nav-item me-2">
                    <a className="nav-link" href="#">Promo finde largo</a>
                    <img className='iconos' src="https://picsum.photos/id/447/600" alt="" />
                    </li>
                    
                </ul>
                </div>
                <div className='me-4'>
                    <Cartwidget></Cartwidget>
                </div>
            </div>

        </nav>
    </header>
  )

}

export default NavBar