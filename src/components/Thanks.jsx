import React from 'react';
import { Container } from 'react-bootstrap';
import '../components/Thanks.css'
import '../components/Product.css'
import thanksImage from '../assets/thanks-image.jpg';



const Thanks = () => {
  return (
    <>
        <Container className='thanks'>
            <img src={thanksImage} alt="" className='thanks-details' />
            <h3>Thanks for your order</h3>
            <p>Your yummmmy pizza is going to you! 🛵</p>
        </Container>
    </>
  )
}

export default Thanks