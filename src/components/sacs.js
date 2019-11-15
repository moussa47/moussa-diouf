import React, { Component } from 'react';

import {Photo}  from '../photoData';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Title from './dumbComponents/title';
import { ButtonContainer } from './styledComponents/button';
export default class Sacs extends Component {
    state={
        photo: Photo
    }
    render() {
        const photo = this.state.photo.filter(item=>item.title === 'sac a main');
        const photoMap = photo.map(item=>item);
        console.log(photoMap.id)
        
        return (
           <>
          
            
                    <div className="back sacs">  
                    <div className="py-5 ">
                   
                    <div className="container">
                        <ButtonContainer>
                            <Link to='/'>
                                 retourner a l'accueil
                            </Link>
                        </ButtonContainer>
                    <Title name="Nos" title="sacs"/>
                        <div className="row">
                        {photoMap.map(item=>{
                return(
                    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">

                        <div className="card " >
                        <div className="img-container p-5 petit" >
                        <Link to='#'>
                        <img src={item.img} alt="photo" className="card-img-top " />

                        </Link>
                        <span className="text-capitalize text-blue">contacts : 771575201</span>
                        
                        </div>
                        {/* card footer */}
                        <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {item.title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            .....
                            <span className="mr-1">
                            frs
                            </span>
                        </h5>

                        </div>
                        </div>
                        </ProductWrapper> )}) }
                    </div>
                    </div>
                    </div>
                    </div>
               
          
                
</>
            
        )
    }
}

const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 1s linear;
}
.card-footer{
    background: aqua;
    border-top: transparent;
    transition: all 1s linear;
}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,2);
        box-shadow: 2px 2px 5px 0px; rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247,247,247);
    }
}
.img-container{
    position: relative;
 overflow: hidden;
}
.card-img-top{
    transition: all 1s linear;
}
.img-container:hover .card-img-top{
    transform: scale(1.2);
}
.card-btn{
    position: absolute;
    bottom: 0;
    right:0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size:1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%,100%);
    transition: all 1s linear;
}
.img-container:hover .card-btn{
    transform:translate(0,0);
}
.card-btn:hover{
    color: var(--mainBlue);
    cursor: pointer;
}

`

