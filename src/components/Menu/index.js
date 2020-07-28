import React from 'react'
import Logo from '../../assets/logo_alien.png'
import './Menu.css'
import ButtonLink from './components/ButtonLink/Index'

export const Menu = () => {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AlienFlix logo" />
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Abduzir vídeo
            </ButtonLink>
        </nav>
    )
}

export default Menu