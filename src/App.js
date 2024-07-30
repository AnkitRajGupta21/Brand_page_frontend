import {FaBars} from "react-icons/fa";
import './App.css';
import DropdownMenu from "./Components/Mens";
import Navigation from './Nav';
import Hero from './Components/hero';
import { BrowserRouter, Routes,Route } from'react-router-dom'
import Kids from "./Components/Kids";
import Sign from "./Components/sign";
import SNKRS from "./Components/SNKRS";
import PrivateComponent from "./Components/PrivateComponent";
import WomenMenu from "./Components/Women";
import Login from "./Components/login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
      
       <div >
           
       <Navigation/> 
         
          <Routes>
            <Route element={<PrivateComponent/>}>
          <Route path="/" element={<h1>HEllo Sale</h1>} />
          <Route path="/Mens" element={<DropdownMenu/>} />  
          <Route path="/Women" element={<WomenMenu/>} />   
          <Route path="/SNKRS" element={<SNKRS/>} />     
          <Route path="/Kids" element={<Kids/>} />  
          <Route path="/Hero" element={<Hero/>} />

      <Route path="/Sale" element={<h1>HEllo Sale</h1>} />
      </Route>
      <Route path="/sign" element={<Sign/>} />  
      <Route path="/login" element={<Login/>} />
     </Routes>
       </div>
       </header>
     
      
      </BrowserRouter>
    </div>
  );
}

export default App;
