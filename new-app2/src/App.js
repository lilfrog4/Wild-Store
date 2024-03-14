
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Tshirts from './Pages/Tshirts';
import Mainpage from './Pages/Mainpage';
import Sweatshirts from './Pages/Sweathirts';
import Accessories from './Pages/Accessories';
import Login from './Pages/Login';
import AddProductT from './Pages/AddProductT';

function App() {
  return (
    
   <div>
    
    <Routes>
      <Route index element={<Mainpage/>}/>
      <Route path='logo' element={<Mainpage/>}/>
      <Route path='tshirts' element={<Tshirts/>}/>
      <Route path='sweatshirts' element={<Sweatshirts/>}/>
      <Route path='accessories' element={<Accessories/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='productT' element={<AddProductT/>}/>
    </Routes>
   </div>
  );
}

export default App;
