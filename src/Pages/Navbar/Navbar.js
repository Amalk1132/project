import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Person2Icon from '@mui/icons-material/Person2';
import './Navbar.css'
import Plashoe from '../Navpage/Plashoe';
import Men from '../Navpage/Men';
import Women from '../Navpage/Women';
import Collection from '../Navpage/Collection';
import Lookbook from '../Navpage/Lookbook';
import Sale from '../Navpage/Sale';
import Contact from '../Navpage/Contact';
import Ourstory from '../Navpage/Ourstory';
import Cartpage from '../Navpage/Cartpage';
import Loginpage from '../Navpage/Loginpage';
import{Routes,Route, Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='parent'>
        <div className='nav-left'>
        
        <ul className='orderded' >
        <Link to={"./plashoe"}> <h4>PLASHOE </h4></Link>
           
            <Link to={"/men"}> <li className='list'  >MEN</li></Link>
            <Link to={'/women'}> <li className='list'>WOMEN</li></Link>
            <Link to={'/collection'}><li className='list'>COLLECTION</li></Link>
            <Link to={'/lookbook'}><li className='list'>LOOKBOOK</li></Link>
            <Link to={'/sale'}><li  className='list'>SALE</li></Link>
           
        </ul>
        </div >
        <div className='nav-right'>
            <ul  className='orderded'>
            <Link to={"/ourstory"}><li  className='list'>OUR STORY</li></Link>
            <Link to={"/contact"}><li  className='list'>CONTACT</li></Link>
            <Link to={"/cartpage"}><li className='icons-nav' ><LocalMallIcon /></li></Link>
                 <Link to={"/loginpage"}><li className='icons-nav' ><Person2Icon /></li></Link>
            
                

                
            </ul>

        </div>
        
         
        <Routes>
          <Route path='/' element={<Plashoe />}/>
          <Route path='/men' element={<Men />}/>
          <Route path='/women' element={<Women />}/>
          <Route path='/collection' element={<Collection />}/>
          <Route path='/lookbook' element={<Lookbook/>}/>
          <Route path='/sale' element={<Sale />}/>
          <Route path='/ourstory' element={<Ourstory />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/cartpage' element={<Cartpage/>}/>
          <Route path='/loginpage' element={<Loginpage />}/>
        </Routes>
       
       
    </div>
  )
}

export default Navbar
