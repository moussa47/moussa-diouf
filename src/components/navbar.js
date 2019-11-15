import React from 'react';
import brandLogo from '../brandLogo.png';
import {Link} from 'react-router-dom';
import shop  from '../shop.svg';
import {MdSmartphone} from 'react-icons/md';
import {NavWrapper,ButtonContainer} from './styledComponents/button';


export default function Navbar() {
    return (
        
        <NavWrapper className="navbar navbar-expand-sm nav navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={shop} alt="logo" className="navbar-brand shop"/>
                </Link>
              
               
                      
            

                <ul className="navbar-nav align-items-center ul">
                   
                    <li className="nav-item m5">
                       <Link to='/' className="nav-link">
                       <ButtonContainer >
                       karballah-shop
                       </ButtonContainer>
                      
                       </Link>
                    </li>
                   
                    
                </ul>

                <Link to='/' className="ml-auto d-none d-lg-block">
                <ButtonContainer bien>
                <span className="mr-2">
                
                </span>
                bienvenue
                </ButtonContainer>
                </Link>
              

               
                


            </NavWrapper>
  
    
    )
};



