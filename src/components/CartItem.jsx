import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const CartItem = ({ item, onRemove }) => {
  return (
    <Row className="mb-2">
      <Col xs={4}>
        <img src={item.image} alt={item.name} className="img-fluid" />
      </Col>
      <Col xs={6}>
        <h5>{item.name}</h5>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio unitario: ${item.price.toFixed(2)}</p>
      </Col>
      <Col xs={2} className="text-right">
        <Button variant="danger" onClick={() => onRemove(item.id)}>
          Eliminar
        </Button>
      </Col>
    </Row>
  );
};

export default CartItem;
