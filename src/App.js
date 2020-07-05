import React, {useState, useEffect} from 'react';
import Header from './components/ui/header';
import axios from 'axios';
import ChatacterGrid from './components/chatacters/chatacterGrid';
import Search from './components/ui/search';
import './App.css';

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [limit, Setlimit] = useState(11);
  const [offset, SetOffset] = useState(0);

  const fetchItems = async (offset=0, data) => {
    const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}&limit=${limit}&offset=${offset}`)
    // setItems(result.data);
    setItems(items.concat(result.data));
    setLoading(false);
  }
  
  useEffect(() => {
    fetchItems();
  }, [query])

  const fetchMore = async (e) => {
    if (limit < 63) {
      let newOffset = offset + limit;
      await SetOffset(newOffset);
      await fetchItems(newOffset);
    }
  }

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <ChatacterGrid isLoading={isLoading} items={items} />
      {!isLoading && <button type="submit" onClick={ () => fetchMore(offset) }> Load More </button>}
      </div>
  );
}

export default App;
