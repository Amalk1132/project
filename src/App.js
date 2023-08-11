
import './App.css';
import {BrowserRouter, Outlet } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Pages/Navbar/Navbar';
import Mainpage from './Mainpage';
import Footer from './Pages/Footer/Footer';






function App() {
  return (
    <BrowserRouter >
    <div className="App">
     
     <Navbar/>

     <Mainpage />
     <Footer />
   
  
    
    </div>
    </BrowserRouter>
  );
}

export default App;


