import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #e5f0f7;
  padding: 20px;
  border-radius: 12px;
`;

// Container dos produtos, agora renomeado
const ProductsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Products = ({ products }) => {
  return (
    <ProductsContainer>
      <StyledProducts>
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            description={product.description}
            imageUrl={product.imageUrl}
          />
        ))}
      </StyledProducts>
    </ProductsContainer>
  );
};

export default Products;
