import React, { Component } from 'react'
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {PhotoConsumer} from '../../context';

import {ButtonContainer } from '../styledComponents/button';
export default class Navbar extends Component {

    state = {
        isOpen: false
    };
    handleToggle = () => {
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    render() {

         
       
        return (
                <PhotoConsumer>
                      {value=>{
                          return(
            <nav className="navbar" onClick={()=>value.closeModal()}>
                <div className="nav-center">
                    <div className="nav-header">


                   

                        {/* <Link to="/">
                        <img src={logo} alt="beach resort"/>
                        </Link> */}

                        <div>
                       <Link to="/">
                       <ButtonContainer cart>
                            <span>Karballah</span>
                           </ButtonContainer>
                        </Link>
                       </div>
                        
                        <div className={{marginTop: 20}}>
                       <button type="button" className=" nav-btn"
                       onClick={this.handleToggle}>
                            
                           <FaAlignRight className="nav-icon"/>
                       </button>
                       </div>
                      
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":
                    "nav-links"}>
                    <li>
                        <Link to='/sacs'  className="a">
                        <ButtonContainer cart onClick={this.handleToggle}>sacs </ButtonContainer></Link>
                    </li>
                    <li>
                        <Link to='/modalvet' className="a">
                        <ButtonContainer cart onClick={this.handleToggle}>vetements</ButtonContainer></Link>
                    </li>
                   
                    <li >
                        <Link to='/modalshoe'  className="a"> <ButtonContainer cart onClick={this.handleToggle}>chaussures</ButtonContainer></Link>
                    </li>
                   
                    </ul>
                </div>
            </nav>

            )
                      }}
                      </PhotoConsumer>
        )
    }
}

