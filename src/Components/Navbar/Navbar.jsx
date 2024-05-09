import React, { useState } from 'react'
import './Navbar.css'
import hyggex from '../Assets/hyggeX.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    const [menu,setMenu] = useState();


  return (
    <div className='navbar'>
        <div className="nav-logo">
                <img src={hyggex} alt="" />
        </div>

            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("home")}}>Home{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("flashcard")}}>Flashcard{menu==="flashcard"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("contact")}}>Contact{menu==="contact"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("faq")}}>Faq{menu==="faq"?<hr/>:<></>}</li>
            </ul>

            <div className='nav-login'>
                <Link to='/login'><button>Login</button></Link>
            </div>
    </div>
    )
}

export default Navbar