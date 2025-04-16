import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const ProductsContainer = styled.div`
  padding: 40px 0;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;

const ProductCard = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  position: relative;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 15px;
`;

const ProductTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.1rem;
`;

const ProductPrice = styled.p`
  margin: 0;
  font-weight: bold;
  color: #333;
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background: #444;
  }
`;

const LikeButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const HeartIcon = styled(FaHeart)`
  color: #ff6b6b;
  font-size: 1.2rem;
`;

const HeartOutlineIcon = styled(FaRegHeart)`
  color: #333;
  font-size: 1.2rem;
`;

const products = [
  {
    id: 1,
    name: "Vintage Classic T-Shirt",
    price: 999,
    category: "t-shirts",
    image: "https://via.placeholder.com/300x400",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 2,
    name: "Retro Button-Up Shirt",
    price: 1499,
    category: "shirts",
    image: "https://via.placeholder.com/300x400",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 3,
    name: "Premium Innerwear Pack",
    price: 799,
    category: "inners",
    image: "https://via.placeholder.com/300x400",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  // Add more products as needed
];

function Products() {
  const [category, setCategory] = useState('all');
  const [size, setSize] = useState('all');
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (productId) => {
    setLikedProducts(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const filteredProducts = products.filter(product => {
    if (category === 'all' && size === 'all') return true;
    if (category === 'all') return product.sizes.includes(size);
    if (size === 'all') return product.category === category;
    return product.category === category && product.sizes.includes(size);
  });

  return (
    <ProductsContainer>
      <FilterContainer>
        <Filter>
          <span>Category:</span>
          <Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">All</option>
            <option value="t-shirts">T-Shirts</option>
            <option value="shirts">Shirts</option>
            <option value="inners">Innerwear</option>
          </Select>
        </Filter>
        <Filter>
          <span>Size:</span>
          <Select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="all">All</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductGrid>
        {filteredProducts.map(product => (
          <ProductCard key={product.id}>
            <LikeButton onClick={() => toggleLike(product.id)}>
              {likedProducts.includes(product.id) ? <HeartIcon /> : <HeartOutlineIcon />}
            </LikeButton>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductPrice>₹{product.price}</ProductPrice>
              <AddToCartButton>Add to Cart</AddToCartButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductsContainer>
  );
}

export default Products; 