import React from 'react';
import "../styles/lander.css";
import {token} from "../../../utils/constants.js"
import { Link } from 'react-router-dom';
const Lander = () => {
    return (
        <div className="intro-container">
            <h1 className="intro-text">CLICK HERE TO EXPLORE <span className='title-text'>EVALLO</span></h1>
            <Link to={token!==""?"/manage-content":"/signin"} className="explore-button">
                <i className="fas fa-arrow-right"></i> Explore
            </Link>
        </div>
    )
}

export default Lander