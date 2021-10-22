import useQueryParams from 'hooks/useQueryParams';
import Navbar from 'components/Navbar';
import { StyledContainer } from 'styled-components/Container';
import Row from 'react-bootstrap/Row';
import { StyledCol } from 'styled-components/Col';
import { searchByName } from 'services/SuperheroAPI';
import { useEffect, useState } from 'react';
import HeroCard from 'components/HeroCard';
import InfiniteScroll from 'components/InfiniteScroll';

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

  }, [query, heroes]);

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
                <InfiniteScroll items={heroes} pageItem={HeroCard} />
              </>
            }
          </Row>
        </StyledCol>
    </StyledContainer>
  );
}