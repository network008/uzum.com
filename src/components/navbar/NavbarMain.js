import React from 'react'
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineMenu, AiOutlineHome } from "react-icons/ai"
import {Link} from "react-router-dom"

function NavbarMain() {
    return (
        <div className='container navbar__main'>
            <Link to={"/"} className="nav__logo">uzum market</Link>
            <button className='nav__btn'>
                <AiOutlineMenu />
                <span>Katalog</span>
            </button>
            <div className="nav__search">
                <input type="text" placeholder='Qidirish...' />
                <button><AiOutlineSearch /></button>
            </div>
            <ul className="nav__collection">
                <Link to={"/"} className="nav__item">
                    <AiOutlineHome />
                    <span>Bosh sahifa</span>
                </Link>
                <Link to={"/account"} className="nav__item">
                    <AiOutlineUser />
                    <span>Kirish</span>
                </Link>
                <Link to={"/wishlist"} className="nav__item">
                    <AiOutlineHeart />
                    <span>Saralangan</span>
                </Link>
                <Link to={"/cart"} className="nav__item">
                    <AiOutlineShoppingCart />
                    <span>Savatcha</span>
                </Link>
            </ul>
        </div>
    )
}

export default NavbarMain