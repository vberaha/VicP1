import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: #4a4a4a;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  background-color: #EFC3CA;
  padding: 10px;
  border-radius: 8px;
`;

// Container do título, agora renomeado para evitar conflito
const TitleContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

// Componente Title, utilizando o StyledTitle
const Title = ({ children }) => {
  return (
    <TitleContainer>
      <StyledTitle>{children}</StyledTitle>
    </TitleContainer>
  );
};

export default Title;
