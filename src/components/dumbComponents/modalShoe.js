import React from 'react';
import styled from 'styled-components';
import { PhotoConsumer } from '../../context';
import { ButtonContainer } from '../styledComponents/button'
import { Link } from 'react-router-dom';
export default function Modalshoe() {
    return (

        <>
       
       
                            <ModalContainer>
                         
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-capitalize p-5">

                                            <h5>
                                               
                                            </h5>
                                            

                                            {/* <h5 className="text-muted">price : ${price}</h5> */}
                                           nos chaussures seront bientot dispo
                                            <Link to='/'>
                                           
                                                <ButtonContainer
                                                > accueil
                                             </ButtonContainer>
                                            </Link>
                                            aller voir nos sacs
                                            <Link to='/sacs'>
                                            
                                                <ButtonContainer
                                                    cart >
                                                    sacs
                                                </ButtonContainer>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                   



        </>


    )
};

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;


background: rgba(60,0,0,1);
display: flex;
align-items: center;
justify-content: center;

#modal{
    background: var(--mainWhite);
    width: '100%';
  
}

`
