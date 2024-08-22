import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  background-color: #000000;
`;

// Container da imagem, agora renomeado
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Image = ({ src, alt }) => {
  return (
    <ImageContainer>
      <StyledImage src={src} alt={alt} />
    </ImageContainer>
  );
};
export default Image;
