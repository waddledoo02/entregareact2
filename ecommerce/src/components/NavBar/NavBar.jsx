import React from 'react'

import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
    return (<>
        <div className='container'>
            <nav className='nav'>
                <div className='nav_brand'>
                    <a className='nav_link' href='#'>MiMarca</a>
                </div>
                <ul className='nav_list'>
                    <li>
                        <a className='nav_link' href="#">Categoria</a>
                    </li>
                    <li>
                        <a className='nav_link' href="#">Categoria</a>
                    </li>
                    <li>
                    <a className='nav_link' href="#">
                    <CartWidget></CartWidget>
                    </a>
                    </li>
                </ul>
            </nav>
        </div>
    </>
    )

}
export default NavBar