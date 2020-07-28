import React from 'react'
import Logo from '../../assets/logo.png'
import './Menu.css'
import ButtonLink from './components/ButtonLink/Index'

export const Menu = () => {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Alienizee logo" />
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink>
        </nav>
    )
}

export default Menu