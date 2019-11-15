import React from 'react';
import styled from 'styled-components';
import { PhotoConsumer } from '../context';
import { ButtonContainer } from './styledComponents/button'
import { Link } from 'react-router-dom';
export default function Modal() {
    return (

        <>
            <PhotoConsumer>
                {value => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.photoDetail;
                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-capitalize p-5">

                                            <h5>{title}</h5>
                                            <img src={img} className="img-fluid" alt="img" />

                                            {/* <h5 className="text-muted">price : ${price}</h5> */}
                                            continuer a voir nos articles
                                            <Link to='/'>
                                           
                                                <ButtonContainer
                                                    onClick={() => closeModal()}
                                                > articles
                                             </ButtonContainer>
                                            </Link>
                                            aller voir nos sacs
                                            <Link to='/'>
                                            
                                                <ButtonContainer
                                                    onClick={() => closeModal()}
                                                    cart >
                                                    sacs
                                        </ButtonContainer>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )

                    }

                }}
            </PhotoConsumer>



        </>


    )
};

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;

background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;

#modal{
    background: var(--mainWhite);
    width: '100%';
}

`
