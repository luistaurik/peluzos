import React, { useContext, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import './Menu.css';
import { MyContext } from "../context/Context";
import Pizza from './Pizza';

const Menu = () => {

  const {pizzas} = useContext(MyContext);

  console.log(pizzas)
  return (
    <Row xs={2} md={3} lg={4} className="g-3 menu-section">
            {pizzas.map((p) => {
              return <Pizza pizza={p} key={p.id}/>
            })
          }
    </Row>
  );
};

export default Menu;
