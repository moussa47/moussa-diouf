import React from 'react';
import {ButtonContainer} from '../styledComponents/button';
import {Link} from 'react-router-dom';
import {FaShoppingBag} from 'react-icons/fa';
import {GiRunningShoe} from 'react-icons/gi';
import {GiRobe} from 'react-icons/gi';

export default function Links() {
    return (
         <>
           <div className="container-fluid text-center d-none d-lg-block">
               <div className="row">
             
                   <div  className="col-sm-12 col-md-12 mx-auto col-lg-4">
                       <Link to='/chaussures'>
                            <ButtonContainer cart>
                            <span className="mr-2">
                            <GiRunningShoe />
                            </span>
                            chaussures
                            </ButtonContainer>
                       </Link>
                   </div>
                   <div  className="col-sm-12 col-md-12 mx-auto col-lg-4">
                   <Link to='/sacs'>
                            <ButtonContainer cart>
                            <span className="mr-2">
                            <FaShoppingBag />
                            </span>
                              sacs a main
                            </ButtonContainer>
                       </Link>
                   </div>
                   <div  className="col-sm-12  col-md-12 mx-auto col-lg-4">
                   <Link to='/vetements'>
                            <ButtonContainer cart>
                            <span className="mr-2">
                            <GiRobe />
                            </span>
                              vetements
                            </ButtonContainer>
                       </Link>
                   </div>
              
               </div>
           </div>

           <div className="container-fluid text-center d-sm-block d-lg-none">
               <div className="row">
             
                   <div  className="col-sm-12  col-md-12 mx-auto col-lg-4">
                   <Link to='/chaussures'>
                            <ButtonContainer cart>
                            <span className="mr-2">
                            <GiRunningShoe />
                            </span>
                            chaussures
                            </ButtonContainer>
                       </Link>
                   </div >
                   <div  className="col-sm-12  col-md-12 mx-auto col-lg-4">
                   <Link to='/sacs'>
                            <ButtonContainer cart>
                            <span className="mr-2">
                            <FaShoppingBag />
                            </span>
                              sacs a main
                            </ButtonContainer>
                       </Link>
                   </div>
                   <div  className="col-sm-12  col-md-12 mx-auto col-lg-4">
                   <Link to='/vetements'>
                            <ButtonContainer cart>
                            <span className="mr-2">
                            <GiRobe />
                            </span>
                              vetements
                            </ButtonContainer>
                       </Link>
                   </div>
              
               </div>
           </div>
           </>

    )
}
