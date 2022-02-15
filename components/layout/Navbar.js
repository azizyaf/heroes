import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarCMP = ({ brand }) => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>{brand}</Navbar.Brand>
        <Nav className='me-auto'>
          <Link href='/'>
            <Nav.Link href='#home'>Heroes</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarCMP;
