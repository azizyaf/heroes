import React from 'react';
import styled from 'styled-components';
import { Label } from 'semantic-ui-react';

const Filters = ({ children }) => {
  return (
    <Container>
      {children}
      <TagsContainer>
        <Label as='a' tag>
          Click on column title for sorting
        </Label>
        <Label as='a' color='teal' tag>
          Click on ... to expand row
        </Label>
      </TagsContainer>
    </Container>
  );
};

export default Filters;

const Container = styled.div`
  width: 50%;
  margin: 1%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #eee;

  @media (max-width: 768px) {
    width: 90%;
    margin: 2%;
  }
`;

const TagsContainer = styled.div`
  width: 80%;
  margin: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
