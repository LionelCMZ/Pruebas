import React from "react";



const Navegacion = () => {
  return (
    <div>
      <header className="Encabezado">
        <a href="/">
            <img className="image" src={'../Images/logo.png'} alt="logo"/>
        </a>
        
        </header>
    </div>
  );
}


/*<nav className="navbar nabar-expand -lg" style="background-color: #004854;">
        <div className="container-fluid">
          <Link to='/'>
            <img src='../recursos/logo.png' width='80'/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to= '/' >Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/login' >Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to= '/homeadm' >Homeadm</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */


export default Navegacion;