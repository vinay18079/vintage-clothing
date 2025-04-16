import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CheckoutContainer = styled.div`
  padding: 40px 0;
  max-width: 600px;
  margin: 0 auto;
`;

const CheckoutTitle = styled.h1`
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const PaymentMethod = styled.div`
  margin-top: 20px;
`;

const PaymentTitle = styled.h2`
  margin-bottom: 15px;
`;

const UPIInput = styled(Input)`
  text-transform: uppercase;
`;

const PayButton = styled.button`
  padding: 15px;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background: #444;
  }
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  margin-top: 10px;
`;

function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    upiId: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Here you would integrate with your payment gateway
      // This is a mock implementation
      const response = await axios.post('/api/payment', {
        ...formData,
        amount: 1099, // This would come from your cart total
        currency: 'INR'
      });

      // Handle successful payment
      console.log('Payment successful:', response.data);
      // Redirect to success page or show success message
    } catch (err) {
      setError('Payment failed. Please try again.');
      console.error('Payment error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Full Name</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Phone Number</Label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Shipping Address</Label>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <PaymentMethod>
          <PaymentTitle>Payment Method</PaymentTitle>
          <FormGroup>
            <Label>UPI ID</Label>
            <UPIInput
              type="text"
              name="upiId"
              value={formData.upiId}
              onChange={handleChange}
              placeholder="username@upi"
              required
            />
          </FormGroup>
        </PaymentMethod>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <PayButton type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Pay Now'}
        </PayButton>
      </Form>
    </CheckoutContainer>
  );
}

export default Checkout; 