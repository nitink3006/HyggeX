import React from "react"
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = () => {
    return(
        <div className="breadcrum">
            Home <img src={arrow_icon} alt="" /> Flashcard <img src={arrow_icon} alt="" /> Mathematics <img src={arrow_icon} alt="" /> Relation and Function 
        </div>
    )
}

export default Breadcrum