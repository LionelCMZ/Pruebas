import React from 'react'
import { Outlet, Link } from 'react-router-dom'
const Layout = () => {
    return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to='/registrarUsuario'>Registrar Usuario</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Layout