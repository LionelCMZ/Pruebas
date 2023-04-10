
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './paginas/Layout';
import RegistrarUsuario from './paginas/RegistrarUsuario';

function App() {
  return(
    <div className="App">
      
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Layout/>}></Route>
          <Route path='/registrarUsuario' element={<RegistrarUsuario/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
  /*<Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='RegistrarUsuario' element={<RegistrarUsuario/>}/>
        </Route>
      </Routes>*/ 
}

export default App;
