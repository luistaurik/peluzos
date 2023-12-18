import React, { useContext, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import '../components/Purchase.css';
import { MyContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const Purchase = () => {

  const navigate = useNavigate()
  const goToThanks = () => {
    navigate('/thanks');
    setAmount(0);
}

  const { pizzas, amount, setPizzas, setAmount } = useContext(MyContext);
  const OrderedPizzas = pizzas.filter((item) => (typeof item.quantity != 'undefined') && item.quantity > 0);


  const handleRemoveItem = (itemId) => {
    const index = pizzas.findIndex((p) => p.id === itemId);
    const ClientOrder = [...pizzas];
    
    if (index !== -1) { 
      const removedPizza = ClientOrder.splice(index, 1)[0];
      setAmount((prevAmount) => prevAmount - (removedPizza.quantity * removedPizza.price));
      setPizzas([...ClientOrder]);
    }
  };
  


  const handleIncreaseQuantity = (itemId) => {
    const index = pizzas.findIndex((p) => p.id === itemId);
    const ClientOrder = [...pizzas];
    if (typeof ClientOrder[index].quantity !== 'undefined') {
      ClientOrder[index].quantity++;
    } else {
      ClientOrder[index].quantity = 1;
    }
  
    setPizzas([...ClientOrder]);
    setAmount((prevAmount) => prevAmount + ClientOrder[index].price);
  };


  const handleDecreaseQuantity = (itemId) => {
    const index = pizzas.findIndex((p) => p.id === itemId);
    const ClientOrder = [...pizzas];
    if (typeof ClientOrder[index].quantity !== 'undefined' && ClientOrder[index].quantity > 0) {
      ClientOrder[index].quantity--; 
    } else {
      ClientOrder[index].quantity = 0;
    }
  
    setPizzas([...ClientOrder]);
    setAmount((prevAmount) => prevAmount - ClientOrder[index].price);
  };


  const calculateTotal = () => {
    return pizzas.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };


  return (
    <Container className="my-2 cart">
      <h2>Details of your cart</h2>
        <>
        {OrderedPizzas.map((item) => {
          return ( <Row key={item.id} className="mb-2 cart-item">
              <Col xs={3} className='cart-item-image'>
                <img src={item.pizza_img} alt={item.name} className="img-fluid cart-item-image" />
              </Col>
              <Col xs={5} className='cart-item-description'>
                <h5 className='item-title'>{item.name}</h5>
                <p className='item-price'>Precio unitario: ${item.price.toFixed(2)}</p>
              </Col>
              <Col xs={4} className="controls">
                <Button variant="success" className="ml-2 cart-control" onClick={() => handleIncreaseQuantity(item.id)}>
                  +
                </Button>
                <Button variant="light" className="ml-2 cart-control" onClick={() => handleIncreaseQuantity(item.id)}>
                {item.quantity}
                </Button>
                <Button variant="danger" className="ml-2 cart-control" onClick={() => handleDecreaseQuantity(item.id)}>
                  -
                </Button>
                <Button variant="danger" className="ml-2 cart-control" onClick={() => handleRemoveItem(item.id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
              </Col>
            </Row>
          )})}
          <Row className="mt-3">
            <Col className="total-cart">
              <strong>Total: ${amount}</strong>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="text-right">
              <Button variant="success" onClick={goToThanks}>Realizar Pedido</Button>
            </Col>
          </Row>
        </>
    </Container>
  );
};

export default Purchase;

