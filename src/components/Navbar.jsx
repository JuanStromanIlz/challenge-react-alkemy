import { StyledNavbar } from 'styled-components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SearchForm } from 'styled-components/Form';
import { StyledButton, dark } from 'styled-components/Button';

export default function Navbar() {
  return (
    <StyledNavbar>
      <Container fluid>
        <Col xs='auto' lg={3}>
          <StyledNavbar.Brand href='/'>
            <img
              alt=''
              src='/logo.svg'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />
          </StyledNavbar.Brand>
        </Col>
        <Col xs='auto' lg={5}>
          <SearchForm onSubmit={(e)=> console.log(e)}>
            <div className='searchInput'>
              <SearchForm.Control size='sm' placeholder='Search a hero' />
              <StyledButton className='material-icons' variant={dark} type='submit'>search</StyledButton>
            </div>
          </SearchForm>
        </Col>
      </Container>
    </StyledNavbar>
  );
}