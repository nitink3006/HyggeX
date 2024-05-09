import React, { useState } from 'react'
import './Content.css'
import bulb from "../Assets/bulb.png"
import sound from "../Assets/sound.png"
import refresh from "../Assets/refresh.png"
import right from "../Assets/arrow-right.png"
import left from "../Assets/arrow-left.png"
import expand from "../Assets/expand.png"
import logo from "../Assets/logo2.png"
import c_name from "../Assets/name.png"
import add from "../Assets/add.png"

const Content = () => {


    const [menu,setMenu] = useState();
  return (
    <div className='content'>
        <h2>Relation and Function (Mathematics)</h2>
        <ul className='content-main'>
            <li onClick={()=>{setMenu("study")}}>Study{menu==="study"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("quiz")}}>Quiz{menu==="quiz"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("test")}}>Test{menu==="test"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("game")}}>Game{menu==="game"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("others")}}>Others{menu==="others"?<hr/>:<></>}</li>
        </ul>

        <div className="container">
            <h1>9 + 6 + 7x - 2x - 3</h1>

            <div className='bulb'>
                <img src={bulb} alt="" />
            </div>

            <div className='sound'>
                <img src={sound} alt="" />
            </div>
        </div>

        <div className="content-last">
            <div className='refresh'>
            <img src={refresh} alt="" />
            </div>

            <div className='right'>
                <img src={right} alt=""/>
            </div>

            <h1><b>01/10</b></h1>

            <div className='left'>
                <img src={left} alt=""/>
            </div>

            <div className='expand'>
                <img src={expand} alt=""/>
            </div>
        </div>
        <div className='footer'>
        <div className='logo'>
            <img src={logo} alt=""/>
        </div>
        <h6>Published By</h6>
        <div className='name'>
            <img src={c_name} alt=""/>
        </div>

        <div className='add'>
            <img src={add} alt=""/>
        </div>
        <h3><b>Create FlashCard</b></h3>

        </div>


    </div>
  )
}

export default Content