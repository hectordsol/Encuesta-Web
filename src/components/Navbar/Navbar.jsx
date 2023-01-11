import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoLanding from '../Images/logo-videogame.png';
import LogoHome from '../Images/Home-logo.png';
import style from "./Navbar.module.css"



export default function Navbar() {
    return (
        <header className={style.navbar}>
            <div className={style.landing}> 
                <NavLink to="/" >
                LANDING
                </NavLink>
            </div>
            <div className={style.home}>
                <NavLink to="/home" >
                ENCUESTA
                </NavLink>            
            </div>
            <div className={style.home}>
                <NavLink to="/encuestas" >
                RESULTADO DE ENCUESTAS
                </NavLink>            
            </div>            
        </header>
    )
}