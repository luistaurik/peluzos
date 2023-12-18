import React, { useContext } from 'react'
import { Card, Col } from 'react-bootstrap';
import './Menu.css';
import { MyContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const Pizza = ({pizza}) => {

    const navigate = useNavigate()

    const {pizzas, setPizzas, setAmount} = useContext(MyContext);

    const goToDatils = () => {
        navigate(`/details/${pizza.id}`);
    }

    const clickHandler = () => {
        const index = pizzas.findIndex((p) => p.id === pizza.id);
        const ClientOrder = [...pizzas];
        if (typeof ClientOrder[index].quantity !== 'undefined') {
          ClientOrder[index].quantity++;
        } else {
          ClientOrder[index].quantity = 1;
        }
    
        setPizzas([...ClientOrder]);
        setAmount((prevAmount) => prevAmount + pizza.price);
      };

    return (
        <Col key={pizza.id}>
            <Card className='card'>
                <Card.Img variant="top" src={pizza.pizza_img} />
                <Card.Body>
                <Card.Title className='text-title'>{pizza.name}</Card.Title>
                <Card.Text className='text-description'>
                    <ul className='ingredients'>
                        <li>{pizza.ingredient_2}</li>
                        <li>{pizza.ingredient_3}</li>
                        {pizza.ingredient_4 === null ? (
                                <li>...</li>
                            ) : (
                                <li>{pizza.ingredient_4}</li>
                            )}            
                    </ul>
                </Card.Text>
                <Card.Text>
                    <h2 className='price'>${pizza.price.toFixed(2)}</h2>
                </Card.Text>
                <Card.Footer className='card-footer'>
                    <button className='btn btn-danger btn-information mt-1' onClick={goToDatils}>
                    See more
                    </button>
                    <button className='btn mx-3 btn-success btn-buy mt-1' onClick={clickHandler}>
                    Buy
                    </button>
                </Card.Footer>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Pizza;