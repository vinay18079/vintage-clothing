import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  &:hover {
    color: #666;
  }
`;

const CartIcon = styled(Link)`
  color: #333;
  font-size: 1.5rem;
  text-decoration: none;
  position: relative;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff6b6b;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.8rem;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>Vintage</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
      <CartIcon to="/cart">
        <FaShoppingCart />
        <CartCount>0</CartCount>
      </CartIcon>
    </HeaderContainer>
  );
}

export default Header; 