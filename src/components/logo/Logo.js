import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 75 }} style={{ height: 125, width: 125 }} >
                <div className="Tilt-inner pa2"> <img src={logo} alt='logo' /> </div>
            </Tilt>
        </div>
    )
}

export default Logo;