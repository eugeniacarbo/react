import React, {useState} from 'react'
import Cartwidget from '../CartWidget/Cartwidget'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDesktop, faKeyboard, faMemory, faMicrochip} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'



const NavBar = () => {

  return (
    <header className='shadow-sm'>
        <div className='barraRGB'></div>
        <nav className="navbar navbar-expand-xl navbar-custom">
            <div className="container-fluid">
                <NavLink to='/'>
                <span className="navbar-brand ms-4" id='containerLogo'><img src="https://picsum.photos/id/301/600" id='logoGU' alt="LogoMarca" /></span>
                </NavLink>
               
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0 navLinks">
                    <li className="nav-item me-2">
                     <NavLink className='nav-link' to='/categoria/promociones'>Tromociones</NavLink>
                    
                        <img className='iconos' src="https://picsum.photos/id/301/600" alt="" />
                    </li>
                    <li className="nav-item me-2">
                     <NavLink className='nav-link' to='/categoria/amigos'>Vacaciones con amigos</NavLink>
                   
                    <span className='iconosFa'><FontAwesomeIcon icon={faMicrochip}/></span>
                    </li>
                    <li className="nav-item me-2">
                     <NavLink className='nav-link' to='/categoria/familia'>Promo en familia</NavLink>
                   
                    <img className='iconos' src="https://picsum.photos/id/390/600" alt="" />
                    </li>
                    <li className="nav-item me-2">
                     <NavLink className='nav-link' to='/categoria/Pareja'>Promociones en pareja</NavLink>
                    
                    <img className='iconos' src="https://picsum.photos/id/407/600" alt="" />
                    </li>
                    <li className="nav-item me-2">
                     <NavLink className='nav-link' to='/categoria/solo'>Vacaciones solo</NavLink>
                    
                    <img className='iconos' src="https://picsum.photos/id/449/600" alt="" />
                    </li>
                    
                </ul>
                </div>
                  <div className='me-4'>
                    <Link to='/cart'>
                    <Cartwidget/>
                    </Link>
                </div>
            </div>

        </nav>
    </header>
  )

}

export default NavBar
