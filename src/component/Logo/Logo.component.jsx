import React from 'react';

// assets
import LogoImage from '../../assets/icons8-fingerprint-64.png';

import Tilt from 'react-parallax-tilt';

import './Logo.styles.css';


const Logo = () => {

    return (
        <div className='ma4 mt0'>
        <Tilt style={{width: '150px'}} className='tilt br2 shadow-2'>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '150px',
                    width: '150px'
                }}>
          <img src={LogoImage} width='70'  alt=""/>
        </div>
      </Tilt>
        </div>
    )
}

export default Logo;
