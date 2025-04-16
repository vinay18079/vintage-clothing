import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 40px 0;
`;

const CartTitle = styled.h1`
  margin-bottom: 30px;
`;

const CartItems = styled.div`
  margin-bottom: 30px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  margin: 0 0 10px 0;
`;

const ItemPrice = styled.p`
  margin: 0;
  font-weight: bold;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`;

const Quantity = styled.span`
  min-width: 30px;
  text-align: center;
`;

const RemoveButton = styled.button`
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #ff5252;
  }
`;

const CartSummary = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CheckoutButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 15px;
  background: #333;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 20px;
  &:hover {
    background: #444;
  }
`;

function Cart() {
  // This would normally come from a state management solution
  const cartItems = [
    {
      id: 1,
      name: "Vintage Classic T-Shirt",
      price: 999,
      quantity: 1,
      image: "https://via.placeholder.com/100x100"
    }
  ];

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 100;
  const total = subtotal + shipping;

  return (
    <CartContainer>
      <CartTitle>Your Cart</CartTitle>
      <CartItems>
        {cartItems.map(item => (
          <CartItem key={item.id}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>₹{item.price}</ItemPrice>
              <QuantityControl>
                <QuantityButton>-</QuantityButton>
                <Quantity>{item.quantity}</Quantity>
                <QuantityButton>+</QuantityButton>
              </QuantityControl>
            </ItemDetails>
            <RemoveButton>Remove</RemoveButton>
          </CartItem>
        ))}
      </CartItems>
      <CartSummary>
        <SummaryRow>
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </SummaryRow>
        <SummaryRow>
          <span>Shipping</span>
          <span>₹{shipping}</span>
        </SummaryRow>
        <SummaryRow>
          <strong>Total</strong>
          <strong>₹{total}</strong>
        </SummaryRow>
        <CheckoutButton to="/checkout">Proceed to Checkout</CheckoutButton>
      </CartSummary>
    </CartContainer>
  );
}

export default Cart; 