import React,{useState} from 'react'
import Entrada from '../componentes/Entrada';
import '../estilos/RegistrarUsuario.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
//import { Modal,TextField,Button, makeStyles } from '@material-ui/core';
//import { modalStyles } from '@material-ui/core';


const conexionCliente='http://127.0.0.1:8000/api/cliente';
const RegistrarUsuario = () => {
  //constante para navegar
  const navigate=useNavigate();
  //guardar estado de inputs 
  const [ci,setCi]=useState('');
  const [nombre,setNombre]=useState('');
  const [apellido,setApellido]=useState('');
  const [correo,setCorreo]=useState('');
  const [celular,setCelular]=useState('');
  const [lugar,setLugar]=useState('');
  const [cantidadMeses,setCantidadMeses]=useState('1');
/*validaciones hook useState
verificacion  de errores  */
  const [errorCI,setErrorCI]=useState(false);
  const [errorNombre,setErrorNombre]=useState(false);
  const [errorApellidos,setErrorApellidos]=useState(false);
  const [errorCorreo,setErrorCorreo]=useState(false);
  const [errorCelular,setErrorCelular]=useState(false);
  const [errorLugar,setErrorLugar]=useState(false);
  const [errorCantidadMeses,setErrorCantidadMeses]=useState(false);
//mensajes de error
  const [mensajeErrorCI,setMensajeErrorCI]=useState(null);
  const [mensajeErrorNombre,setMensajeErrorNombre]=useState(null);
  const [mensajeErrorApellidos,setMensajeErrorApellidos]=useState(null);
  const [mensajeErrorCorreo,setMensajeErrorCorreo]=useState(null);
  const [mensajeErrorCelular,setMensajeErrorCelular]=useState(null);
  const [mensajeErrorLugar,setMensajeErrorLugar]=useState(null);
  const [mensajeErrorCantidadMeses,setMensajeErrorCantidadMeses]=useState(null);
  //puntos de control
  var errorCi2=false;
  var errorNombre2=false;
  var errorApellidos2=false;
  var errorCorreo2=false;
  var errorCelular2=false;
  var errorLugar2=false;
  var errorCantidadMeses2=false;
  //tamaños de los inputs variables
  let tamCi=false;
  let tamNombre=false;
  let tamApellido=false;
  let tamCorreo=false;
  let tamCelular=false;
  let tamLugar=false;
  let tamCanMes=false;
  //llenado y validacion de los inputs
  const manejarCi=e=>{
    setCi(e.target.value);
    onValidateCI(e.target.value);
    if(errorCi2===false&&tamCi===true){
      comprobarTamCi(e.target.value);
    }
  }
  const manejarNombre=e=>{
    setNombre(e.target.value);
    onValidateNombre(e.target.value);
    if(errorNombre2===false&&tamNombre===true){
      comprobarTamNombre(e.target.value);
    }
  }
  const manejarApellido=e=>{
    setApellido(e.target.value);
    onValidateApellidos(e.target.value);
    if(errorApellidos2===false&&tamApellido===true){
      comprobarTamApellido(e.target.value);
    }
  }
  const manejarCorreo=e=>{
    setCorreo(e.target.value);
    onValidateCorreo(e.target.value);
    if(errorCorreo2===false&&tamCorreo===true){
      comprobarTamCorreo(e.target.value);
    }
  }
  const manejarCelular=e=>{
    setCelular(e.target.value);
    onValidateCelular(e.target.value);
    if(errorCelular2===false&&tamCelular===true){
      comprobarTamCelular(e.target.value);
    }
  }
  const manejarLugar=e=>{
    setLugar(e.target.value);
    onValidateLugar(e.target.value);
    if(errorLugar2===false&&tamLugar===true){
      comprobarTamLugar(e.target.value);
    }
  }
  const manejarCantidadMeses=e=>{
    setCantidadMeses(e.target.value);
    onValidateCantidadMeses(e.target.value);
    /*if(errorCantidadMeses2===false&&tamCanMes===true){
      comprobarTamCantidadMes(e.target.value);
    }*/
  }
  //formatos para inputs
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexNumber = /^[0-9]+$/;
  const regexAll = /^[0-9A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexMonth= /^[1-9]+$/;
  const regexCel = /^[0-9]+$/;
  //validaciones textos
  const onValidateCI=(ciCapturado)=>{
    if(!ciCapturado.trim()){
      setErrorCI(true);
      errorCi2=true;
      setMensajeErrorCI('El campo "CI" no debe ser vacio.');
    }else if(!regexNumber.test(ciCapturado)){
      setErrorCI(true);
      errorCi2=true;
      setMensajeErrorCI('El campo "CI" solo acepta números positivos.');
    }else{
      setErrorCI(false);
      errorCi2=false;
      setMensajeErrorCI(null);
    }  
  }
  const onValidateNombre=(nombreCapturado)=>{
    if(!nombreCapturado.trim()){
      setErrorNombre(true);
      errorNombre2=true;
      setMensajeErrorNombre('El campo "Nombre" no debe ser vacio.');
    } else if(!regexName.test(nombreCapturado)){
      setErrorNombre(true);
      errorNombre2=true;
      setMensajeErrorNombre('El campo "Nombre" solo acepta letras.');
    }else{
      setErrorNombre(false);
      errorNombre2=false;
      setMensajeErrorNombre(null);
    }
  }
  const onValidateApellidos=(apellidoCapturado)=>{
    if(!apellidoCapturado.trim()){
      setErrorApellidos(true);
      errorApellidos2=true;
      setMensajeErrorApellidos('El campo "Apellidos" no debe ser vacio.');
    } else if(!regexName.test(apellidoCapturado)){
      setErrorApellidos(true);
      errorApellidos2=true;
      setMensajeErrorApellidos('El campo "Apellidos" solo acepta letras.');
    }else{
      setErrorApellidos(false);
      errorApellidos2=false;
      setMensajeErrorApellidos(null);
    }
  }
  const onValidateCorreo=(correoCapturado)=>{
    if(!correoCapturado.trim()){
      setErrorCorreo(true);
      errorCorreo2=true;
      setMensajeErrorCorreo('El campo "Correo" no debe ser vacio.');
    } else if(!regexEmail.test(correoCapturado)){
      setErrorCorreo(true);
      errorCorreo2=true;
      setMensajeErrorCorreo('El campo "Correo" solo acepta letras.');
    }else{
      setErrorCorreo(false);
      errorCorreo2=false;
      setMensajeErrorCorreo(null);
    }
  }
  const onValidateCelular=(celularCapturado)=>{
    if(!celularCapturado.trim()){
      setErrorCelular(true);
      errorCelular2=true;
      setMensajeErrorCelular('El campo "Celular" no debe ser vacio.');
    } else if(!regexCel.test(celularCapturado)){
      setErrorCelular(true);
      errorCelular2=true;
      setMensajeErrorCelular('El campo "Celular" tiene un formato incorrecto.');
    }else{
      setErrorCelular(false);
      errorCelular2=false;
      setMensajeErrorCelular(null);
    }
  }
  const onValidateLugar=(lugarCapturado)=>{
    if(!lugarCapturado.trim()){
      setErrorLugar(true);
      errorLugar2=true;
      setMensajeErrorLugar('El campo "Aparcamiento asignado" no debe ser vacio.');
    } else if(!regexAll.test(lugarCapturado)){
      setErrorLugar(true);
      errorLugar2=true;
      setMensajeErrorLugar('El campo "Aparcamiento asignado" solo acepta letras.');
    }else{
      setErrorLugar(false);
      errorLugar2=false;
      setMensajeErrorLugar(null);
    }
  }
  const onValidateCantidadMeses=(cantMesCapturado)=>{
    if(!cantMesCapturado.trim()){
      setErrorCantidadMeses(true);
      errorCantidadMeses2=true;
      setMensajeErrorCantidadMeses('El campo "Cantidad de meses" no debe ser vacio.');
    } else if(!regexMonth.test(cantMesCapturado)){
      setErrorCantidadMeses(true);
      errorCantidadMeses2=true;
      if(cantMesCapturado==='0'||cantMesCapturado==='e'){
        setMensajeErrorCantidadMeses('El campo "Cantidad de meses" no puede ser 0.');
      }else{
        setMensajeErrorCantidadMeses('El campo "Cantidad de meses" solo acepta números positivos.');
      }
    }else{
      setErrorCantidadMeses(false);
      errorCantidadMeses2=false;
      setMensajeErrorCantidadMeses(null);
    }
  }
  //comprobar tamaños de los inputs(en proceso)
  const comprobarTamCi=(compCi)=>{
    if(compCi.length>4&&compCi.length<9){
      tamCi=false;
      setErrorCI(false);
      setMensajeErrorCI(null);
    }else{
      tamCi=true;
      setErrorCI(true);
      setMensajeErrorCI('La cantidad mínima es de 5 dígitos y la máxima es de 8 dígitos');
    }
  }
  const comprobarTamNombre=(compNombre)=>{
    if(compNombre.length>2&&compNombre.length<51){
      tamNombre=false;
      setErrorNombre(false);
      setMensajeErrorNombre(null);
    }else{
      tamNombre=true;
      setErrorNombre(true);
      setMensajeErrorNombre('La cantidad mínima es de tres letras y la máxima es de 50 letras');
    }
  }
  const comprobarTamApellido=(compApellido)=>{
    if(compApellido.length>2&&compApellido.length<51){
      tamApellido=false;
      setErrorApellidos(false);
      setMensajeErrorApellidos(null);
    }else{
      tamApellido=true;
      setErrorApellidos(true);
      setMensajeErrorApellidos('La cantidad mínima es de tres letras y la máxima es de 50 letras');
    }
  }
  const comprobarTamCorreo=(compCorreo)=>{
    if(compCorreo.length>2&&compCorreo.length<51){
      tamCorreo=false;
      setErrorCorreo(false);
      setMensajeErrorCorreo(null);
    }else{
      tamCorreo=true;
      setErrorCorreo(true);
      setMensajeErrorCorreo('La cantidad mínima es de tres letras y la máxima es de 50 letras');
    }
  }
  const comprobarTamCelular=(compCelular)=>{
    if(compCelular.length>7&&compCelular.length<9){
      tamCelular=false;
      setErrorCelular(false);
      setMensajeErrorCelular(null);
    }else{
      tamCelular=true;
      setErrorCelular(true);
      setMensajeErrorCelular('Debe ser un número con 8 dígitos');
    }
  }
  const comprobarTamLugar=(compLugar)=>{
    if(compLugar.length>0&&compLugar.length<10){
      tamLugar=false;
      setErrorLugar(false);
      setMensajeErrorLugar(null);
    }else{
      tamLugar=true;
      setErrorLugar(true);
      setMensajeErrorLugar('La cantidad máxima es de 10 letras');
    }
  }/*
  const comprobarTamCantidadMes=(compCantMes)=>{
    if(compCantMes.length>2&&compCantMes.length<51){
      tamCanMes=false;
      setErrorCantidadMeses(false);
      setMensajeErrorCantidadMeses(null);
    }else{
      tamCanMes=true;
      setErrorCantidadMeses(true);
      setMensajeErrorCantidadMeses('La cantidad mínima es de tres letras y la máxima es de 50 letras');
    }
  }*/
  //verificar todos los campos
  const comprobarCampos=()=>{
    //console.log(ci+'\n'+nombre+'\n'+apellido+'\n'+correo+'\n'+celular+'\n'+lugar+'\n'+cantidadMeses);
    onValidateCI(ci);
    if(errorCi2===false){
      comprobarTamCi(ci);
    }
    onValidateNombre(nombre);
    if(errorNombre2===false){
      comprobarTamNombre(nombre);
    }
    onValidateApellidos(apellido);
    if(errorApellidos2===false){
      comprobarTamApellido(apellido);
    }
    onValidateCorreo(correo);
    if(errorCorreo2===false){
      comprobarTamCorreo(correo);
    }
    onValidateCelular(celular);
    if(errorCelular2===false){
      comprobarTamCelular(celular);
    }
    onValidateLugar(lugar);
    if(errorLugar2===false){
      comprobarTamLugar(lugar);
    }
    onValidateCantidadMeses(cantidadMeses);
    /*if(errorCantidadMeses2===false){
      comprobarTamCantidadMes(cantidadMeses);
    }*/
    return tamCi||tamNombre||tamApellido||tamCorreo||tamCelular||tamLugar||tamCanMes;
  }
  //registra cliente/ redireccionar
  const registrarCliente=async(e)=>{
    //e.preventDefault();
    if(comprobarCampos()===false){
      //console.log(ci+'\n'+nombre+'\n'+apellido+'\n'+correo+'\n'+celular+'\n'+lugar+'\n'+cantidadMeses);
      await axios.post(conexionCliente,{CI:ci,
      nombre:nombre,
      apellido:apellido,
      correo:correo,
      celular:celular,
      cantidad_meses:cantidadMeses});
      //redireccion
      navigate('/');
    }
  }
  //cancelar con sweet alert
  const cancelarRegistroCliente=async(e)=>{
    e.preventDefault();
    Swal.fire({

      title: 'Advertencia',
      text:'Esta seguro que desea cancelar el registro',
      icon:'warning',
      showDenyButton: true,
      
    }).then(response=>{
      if(response.isConfirmed){
        navigate('/');
      }
    })
  }
  //html
  return (
    <div className='registrarCliente'>
      <header className="Encabezado">
    </header>
    <h1 className='title'><b>Registrar cliente</b></h1>
    <form className='container'>
      <div className='row'>
    <div className='col'>
      <label className='tit'><b>Registro datos del cliente</b></label>
      <Entrada
        tituloEntrada='CI' 
        tipo='text'
        valor={ci}
        contenido='Escriba aqui el número CI del cliente'
        cambio={manejarCi}
        
        mostrarAlerta={errorCI}
       mensajeAlerta={mensajeErrorCI}
      />
      <Entrada
       tituloEntrada='Nombre'
       tipo='text'
       valor={nombre}
       contenido='Escriba aqui el nombre del cliente'
       cambio={manejarNombre}
       
       mostrarAlerta={errorNombre}
       mensajeAlerta={mensajeErrorNombre}
      />
      <Entrada
       tituloEntrada='Apellidos'
       tipo='text'
       valor={apellido}
       contenido='Escriba aqui los apellidos del cliente'
       cambio={manejarApellido}
       //capturar={(e)=>onValidateApellidos()}
       mostrarAlerta={errorApellidos}
       mensajeAlerta={mensajeErrorApellidos}
      />
      <Entrada
       tituloEntrada='Correo'
       tipo='email'
       valor={correo}
       contenido='Escriba aqui el correo del cliente'
       cambio={manejarCorreo}
       //capturar={(e)=>onValidateCorreo()}
       mostrarAlerta={errorCorreo}
       mensajeAlerta={mensajeErrorCorreo}
      />
      <Entrada
      tituloEntrada='Celular'
      tipo='tel'
      valor={celular}
      contenido='Escriba aqui el número celular del cliente'
      cambio={manejarCelular}
      //capturar={(e)=>onValidateCelular()}
      mostrarAlerta={errorCelular}
      mensajeAlerta={mensajeErrorCelular}
      //formato='[0-8]{3}-[2-9]{4}'
      />
    </div>
    <div className='col'>
    <label className='tit'> <b>Registro datos respecto a la reserva</b></label>
    <Entrada
    tituloEntrada='Aparcamiento asignado'
    tipo='text'
    valor={lugar}
    contenido='Escriba aqui el aparcamiento asignado del cliente'
    cambio={manejarLugar}
    //capturar={(e)=>onValidateLugar()}
    mostrarAlerta={errorLugar}
    mensajeAlerta={mensajeErrorLugar} 
    />
    <Entrada
    tituloEntrada='Cantidad de meses'
    tipo='number'
    valor={cantidadMeses}
    cambio={manejarCantidadMeses}
    min={1}
    max={12}
    //capturar={(e)=>onValidateCantidadMeses()}
    mostrarAlerta={errorCantidadMeses}
    mensajeAlerta={mensajeErrorCantidadMeses}
    />
    </div> 
    <div className='col'>
    <label className='tit'> <b>Registro vehiculos del cliente</b></label> <br/>
    <div className='botonAgregarVehiculo'>
    <button className='agregarVehiculo' >Añadir Vehiculo</button>
    </div>
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Matrícula</th>
          <th>Acciones</th>
        </tr>
      </thead>
    </table>
    </div>
    </div>
    </form>
    <div className='row'>
      <div className='botones'>
      <button className='re' type='submit' onClick={registrarCliente}>Registrar</button>
      <button className='can' onClick={(e)=>cancelarRegistroCliente(e)}>Cancelar</button>
      </div>
    </div>
    <footer>
      <div>
     <p id='cont'>Contactos</p>
     </div>
    </footer></div>
  )
}

export default RegistrarUsuario;