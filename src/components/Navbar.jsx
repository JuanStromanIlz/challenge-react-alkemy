import { StyledNavbar } from 'styled-components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchForm from './SearchForm';

export default function Navbar() {

  return (
    <StyledNavbar>
      <Container fluid>
        <Col xs={1}>
          <StyledNavbar.Brand href='/'>
            <img
              alt=''
              src='/icon.svg'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />
          </StyledNavbar.Brand>
        </Col>
        <Col xs={8} lg={5} className='offset-lg-2 offset-1'>
          <SearchForm />
        </Col>
      </Container>
    </StyledNavbar>
  );
}