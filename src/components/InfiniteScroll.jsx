import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Col from 'react-bootstrap/Col';
import Loading from 'styled-components/Loading';

export default function InfiniteScroll({items, pageItem: PageItem}) {
  const [loading, setLoading] = useState(true);
  const [maxPage, setMaxPage] = useState(false);
  const [moreItems, setMoreItems] = useState(true);
  const {ref, inView, entry} = useInView();
  const [currentPage, setCurrentPage] = useState(0);
  const [paginatedItems, setPaginateItems] = useState([]);
  const [showItems, setShowItems] = useState([]);

  useEffect(()=> {
    async function paginate (items) {
      let itemsPerPage = 8;

      const paginateFinished = (items, paginated) => Math.ceil(items.length / itemsPerPage) === paginated.length;
      
      let paginated = await items.reduce((acc, val, i) => {
        let idx = Math.floor(i / itemsPerPage);
        let page = acc[idx] || (acc[idx] = []);
        page.push(val);
    
        return acc;
      }, []);

      if (items.length > 0 && paginateFinished(items, paginated)) {
        setPaginateItems(paginated);
        setShowItems(paginated[0]);
      }
    }
    paginate(items);
    return ()=> {
      setLoading(false);
      setMoreItems(true);
    }
  }, [items]);

  useEffect(()=> {
    function addNewSetOfItems() {
      setMoreItems(false);
      let newPage = currentPage + 1;
      if (newPage >= paginatedItems.length) {
        setMaxPage(true);
        return;
      }
      setCurrentPage(newPage);
      setShowItems(prevValues => [...prevValues, ...paginatedItems[newPage]]);
      setTimeout(() => {
        setMoreItems(true);
      }, 1000);
    }

    if (entry && inView && moreItems) {
      addNewSetOfItems();
    }
  }, [currentPage, entry, inView, paginatedItems, moreItems]);

  return (
    loading ?
      <Loading />
    : 
      <> 
        {showItems.map(hero => 
          <Col className='card-container' key={hero.id} xs={12} md={4} lg={3}>
            <PageItem hero={hero} simpleCard />
          </Col>
        )}
        {maxPage ? null :
          <div ref={ref}>
            <Loading />
          </div>
        }
      </>
  );
}