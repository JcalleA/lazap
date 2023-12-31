
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './views/Home/Home';
import { AuthContextProvider } from "./context/firebase/AuthContext/AuthContext";
import Menu from './views/Menu/Menu';
import Pedidos from './views/Pedidos/Pedidos';
import FormularioPedido from './views/FormularioPedido/FormularioPedido'

function App() {
  return (
    <div className="App">
    <AuthContextProvider>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/pedidos' element={<Pedidos/>}></Route>
        <Route path='/formulariopedido' element={<FormularioPedido/>}></Route>
        
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
