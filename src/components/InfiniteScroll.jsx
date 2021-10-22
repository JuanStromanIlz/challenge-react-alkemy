import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Col from 'react-bootstrap/Col';

export default function InfiniteScroll({items, pageItem: PageItem}) {
  const [loading, setLoading] = useState(true);
  const [moreItems, setMoreItems] = useState(true);
  const {ref, inView, entry} = useInView();
  const [currentPage, setCurrentPage] = useState(0);
  const [paginatedItems, setPaginateItems] = useState([]);
  const [showItems, setShowItems] = useState([]);

  function paginate (arr, size) {
    return arr.reduce((acc, val, i) => {
      let idx = Math.floor(i / size);
      let page = acc[idx] || (acc[idx] = []);
      page.push(val);
  
      return acc;
    }, [])
  }

  useEffect(()=> {
    if (loading) {
      let itemsPerPage = 8;
      let paginated = paginate(items, itemsPerPage);
      setPaginateItems(paginated);
      setShowItems(paginated[currentPage]);
    }

    return ()=> {
      setLoading(false);
    }
  }, [items, loading, currentPage]);

  useEffect(()=> {
    function addNewSetOfItems() {
      setMoreItems(false);
      let newPage = currentPage + 1;
      if (newPage >= paginatedItems.length) {
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
      <p>loading...</p>
    : 
      <> 
        {showItems.map(hero => 
          <Col className='card-container' xs={12} md={4} lg={3}>
            <PageItem hero={hero} simpleCard />
          </Col>
        )}      
        <div ref={ref}></div>
      </>
  );
}