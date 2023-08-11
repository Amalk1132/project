import React from 'react'
import './Pages/Mainpage/Mainpage.css'
const Mainpage = () => {
  return (
    <div className='main-page'>
        <div className='image'>
        <img src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-hero-image-bg.jpg' alt='shoeimage' />
        </div>
        <div className='content'>
        <h1 className='head'>Love the planet we walk on</h1>
        <p className='para'>Bibendum fermentum, aenean donec pretium aliquam blandit tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.</p>
        <div className='btn'>
        <button  >SHOP MEN </button>
        <button > SHOP WOMEN</button>
        </div>
        </div>
    </div>
  )
}

export default Mainpage