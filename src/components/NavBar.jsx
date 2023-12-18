import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import { MyContext } from '../context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavBar = () => {

  const navigate = useNavigate()
  const {amount} = useContext(MyContext);
  const location = useLocation();

  const goToCart = (e) => {
    navigate('/cart');
  } 

  const goToHome = () => {
    navigate('/')
  }

  const isHome = location.pathname === '/';
  const navbarOpacity = isHome ? "rgba(168, 119, 95, 0.038)" : "rgba(168, 119, 95, 0.9)";


  return (
    <Navbar className='navbar-peluzos' variant="dark" style={{ backgroundColor: navbarOpacity }}>
      <Navbar.Brand onClick={goToHome}>Peluzos Pizzas</Navbar.Brand>
      <Nav className="nav-list">
        <Nav.Link className='nav-item'>
        <FontAwesomeIcon icon={faCartShopping} onClick={(e)=> goToCart(e)} className='cart-icon'/><p className='cart-amount'>${amount.toFixed(2)}</p>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
