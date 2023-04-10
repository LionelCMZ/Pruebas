import React, {useState}  from "react";
import { Link } from "react-router-dom";
import logo from '../../Images/logo.png';


import{Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

import '../landingPage/lading.css'
const Navlading = () => {
    const [dropdown, setDropdown] = useState (false);
    
    const abrirCerrarDropdown=()=>{
        setDropdown(!dropdown);
    }

  return (
    <div>

      <header className="Encabezado">
    
      <section>
            <div>
            <Link to="/">
                <img className="image" src={logo} alt="logo"/>
            </Link>
            </div>
        </section>

        <section className="navegar">
            <div className="d-flex justify-content-end">
            <div>
            <a href="/Iniciosesion">
            <button type="button" class="btn btn-link" >Iniciar Sesión</button>
            </a>

            </div>

            <div>
                <Dropdown isOpen ={dropdown} toggle={abrirCerrarDropdown}>
                    <DropdownToggle caret className="btndesplegable">
                    Reserva
                    </DropdownToggle>
                    <DropdownMenu className="menuops">
                        <DropdownItem className="op1">POR HORA</DropdownItem>
                        <DropdownItem className="op2">MENSUAL</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            </div>

        </section>        
        </header>
    </div>
  );
}
/*<a className="inicio" href="/iniciosesion">Iniciar Sesión</a> */
export default Navlading;