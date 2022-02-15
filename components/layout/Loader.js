import styled from 'styled-components';
import { BarLoader } from 'react-spinners';

const Loader = ({ text }) => {
  return (
    <Container>
      <BarLoader height={4} width={100} />
      <h5>{text}</h5>
    </Container>
  );
};

export default Loader;

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 50px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
