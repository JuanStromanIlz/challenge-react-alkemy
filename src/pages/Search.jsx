import useQueryParams from 'hooks/useQueryParams';
import Navbar from 'components/Navbar';
import { StyledContainer } from 'styled-components/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StyledCol } from 'styled-components/Col';
import { searchByName } from 'services/SuperheroAPI';
import { useEffect, useState } from 'react';
import { SearchCard } from 'components/SearchCard';

export default function Search() {
  const [heroes, setHeroes] = useState([]);
  const [emptyRes, setEmptyRes] = useState(false);

  const query = useQueryParams();

  useEffect(()=> {

    async function getHeroFromQuery(query) {
      try {
        let res = await searchByName(query);
  
        if (res.response !== 'success') {
          setEmptyRes(true);
          return;
        }
  
        setEmptyRes(false);
        setHeroes(res.results);
      }
      catch(err) {
        setEmptyRes(true);
      }
    }

    getHeroFromQuery(query.get('query'));

  }, [query]);

  return (
    <StyledContainer fluid>
      <Row className='navbar-sticky'>
        <Navbar />
      </Row>
        <StyledCol xs={12}>
          <Row>
            {emptyRes ?
              <div>
                Empty List
              </div>
            : 
              <>
                <h4 className='col-title'>Search results for: {query.get('query')}</h4>
                {heroes.map(hero => 
                  <Col className='card-container' key={hero.id} xs={12} md={4} lg={3}>
                    <SearchCard hero={hero} />
                  </Col>
                )}
              </>
            }
          </Row>
        </StyledCol>
    </StyledContainer>
  );
}