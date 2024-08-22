import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const StyledCard = styled.div`
  background-color: ##11243C;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 200px;
  margin: 15px;
`;

// Container do card, agora renomeado
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = ({ title, description, imageUrl }) => {
  return (
    <StyledCard>
      <Image src={imageUrl} alt={title} />
      <CardContainer>
        <h2>{title}</h2>
        <p>{description}</p>
      </CardContainer>
    </StyledCard>
  );
};

export default Card;
