import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import '../components/Purchase.css';
import { MyContext } from '../context/Context';

const ThanksPage = () => {

  return (
    <Container className="my-2 details">
      <Row className='details-box'>
        <Col md={6} className='details-image'>
          <Image className='pizza-image' src='https://www.popolopizzeria.com/cdn/shop/products/pep_dd77f165-2119-4626-bfda-455eb92836e6_394x.jpg?v=1681304354' alt="Product" fluid />
        </Col>
        <Col md={6} className='details-text'>
          <h2 className='title'>{pizzaDetails.name}</h2>
          <p>DSdsdsdd</p>
          <ul className='ingredients-list'>
            <li>{pizzaDetails.ingredient_1}</li>
            <li>{pizzaDetails.ingredient_2}</li>
            <li>{pizzaDetails.ingredient_3}</li>
            <li>{pizzaDetails.ingredient_4}</li>
            <li>{pizzaDetails.ingredient_5}</li>
          </ul>
          <div className='details-footer'>
            <p className='footer-item price'>Price: ${pizzaDetails.price}</p>
            <Button className='footer-item btn-success btn-buy' onClick={clickHandler}>Agregar al carrito</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ThanksPage;

