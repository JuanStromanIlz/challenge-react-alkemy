import QueryParams from 'hooks/QueryParams';
import Navbar from 'components/Navbar';
import { Wrapper } from 'styled-components/Wrapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { searchByName } from 'services/SuperheroAPI';
import { useEffect, useState } from 'react';
import { SearchList } from 'components/SearchList';
import { ListContainer } from 'styled-components/List';

export default function Search() {
  const [heroes, setHeroes] = useState([]);
  const [emptyRes, setEmptyRes] = useState(false);

  const query = QueryParams();

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
    <Wrapper>
      <Row className='navbar-sticky'>
        <Navbar />
      </Row>
      <Row>
        <Col as={ListContainer} xs={12} lg={5} className='offset-lg-3'>
          {emptyRes ?
            <div>
              Empty List
            </div>
          : 
            <SearchList heroes={heroes} />
          }
        </Col>
      </Row>
    </Wrapper>
  );
}