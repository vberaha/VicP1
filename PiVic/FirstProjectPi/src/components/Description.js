import React from 'react';
import styled from 'styled-components';

const StyledDescription = styled.p`
  color: #98F5F9;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 30px;
  background-color: #f0e5cf;
  padding: 15px;
  border-radius: 8px;
`;

// Container da descrição, agora renomeado
const DescriptionContainer = styled.div`
  text-align: center;
`;

const Description = ({ children }) => {
  return (
    <DescriptionContainer>
      <StyledDescription>{children}</StyledDescription>
    </DescriptionContainer>
  );
};
export default Description;
