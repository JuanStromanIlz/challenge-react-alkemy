import { useHistory } from 'react-router-dom';
import { StyledNavbar } from 'styled-components/Navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import SearchForm from './SearchForm';

export default function Navbar() {
  let history = useHistory();

  function loguot() {
    localStorage.removeItem('challange-react-alkemy');
    history.push('/login');
  }

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
        <Col>
          <div className='logout'>
            <button className='material-icons' onClick={loguot}>logout</button>
          </div>
        </Col>
      </Container>
    </StyledNavbar>
  );
}