import React, { Component } from 'react';
import {PhotoConsumer} from './context';
import {Link} from 'reacit-router-dom';
// mport {ButtonContainer} from './button';

export default class Details extends Component {
    render() {
        
        return (
           <PhotoConsumer>
               {value=>{
                   const {id,title,img,info,price,company} =
                   value.detailPhoto;
                   return(
                       <div className="container py-5 details">
                            {/* title */}
                            <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                            </div>
                            {/* product info */}
                            <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3 ">
                                <img src={img}  className="img-fluid" alt="image"/>
                            </div>
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h1>model: {title}</h1>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        fabriqué par : <span className="text-uppercase">
                                            {company}
                                        </span>
                                        <strong>
                                            price: 
                                            {price} <span>frcs</span>
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        informations du produit:
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/* link */}
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>
                                               retourner 
                                            </ButtonContainer>
                                        </Link>
                                        {/* <ButtonContainer
                                        cart
                                       
                                        onClick={()=>{
                                          
                                            value.openModal(id);

                                        }}
                                        >
                                            {inCart?"déja pris":"ajouter dans le panier"}
                                        </ButtonContainer> */}
                                    </div>
                            </div>

                            </div>
                       </div>
                   )
               }}
           </PhotoConsumer>
        )
    }
}
