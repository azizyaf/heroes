import styled from 'styled-components';

const Table = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Table;

const Container = styled.div`
  width: 50%;
  margin: 1%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    margin: 2%;
  }
`;
