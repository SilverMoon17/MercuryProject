import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import '../../modules/cart/cart.css';
import Image from 'react-bootstrap/Image';
import myImage from '../../../resources/avatar.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Cart.css';
import logo from "../../../resources/logo(black).svg";

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 10, quantity: 1,description:"КОФТА БЕЛАЯ" },
    { id: 2, name: 'Item 2', price: 15, quantity: 2,description:"тяги бархатные"},
    { id: 3, name: 'Item 3', price: 20, quantity: 3,description:"девочка уендсдей"}
  ]);

  const handleQuantityChange = (itemId, newQuantity) => {
    setItems(prevItems =>
      prevItems.map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const handleIncrement = (itemId) => {
    setItems(prevItems =>
      prevItems.map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const handleDecrement = (itemId) => {
    setItems(prevItems =>
      prevItems.map(item => {
        if (item.id === itemId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <Container style={{ backgroundColor: 'white' }}>
      <Row>
                    <Col md={4} sm={8} className="ideas-logo-block d-flex align-items-center">
                        <img src={logo} alt="" width={306} />
                        <h2 className="merch-title">Cart</h2>
                    </Col>
                </Row>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <Row>
            <Col md={3}>
              <Image src={myImage} thumbnail />
            </Col>
            <Col md={6}>
              <h3>{item.name}</h3>
              <div className = "item-description">
                {item.description}
              </div>
              <p>Price: ${item.price}</p>
              <p>
                Quantity:{' '}
                <button className="quantity-btn1" onClick={() => handleDecrement(item.id)}>-</button>
                <input
                  type="number"
                  className= "quantity-input"
                  disabled= {true}
                  value={item.quantity}
                  onChange={e =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                />
                <button className="quantity-btn1" onClick={() => handleIncrement(item.id)}>+</button>
              </p>             
            </Col>
            <Col md={3}>
              <h3>Total: ${item.price * item.quantity}</h3>
            </Col>
          </Row>
        </div>
      ))}
      <hr />
      <h3>Total: ${calculateTotal()}</h3>
    </Container>
  );
};

export default Cart;
