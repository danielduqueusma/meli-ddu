import './App.scss';
import Search from './components/search/search';
import Results from './routes/results/results';
import Detail from './routes/detail/detail';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([])
  const searchResults = (searchResults) => {
    setProducts(searchResults.data);
  }
  return (
    <>
      <header>
        <Search handleSearch={searchResults}></Search>
      </header>
      <Routes>
        <Route path='/' />
        <Route path='/items' element={ <Results products={products}/> } />
        <Route path='/items/:id' element={ <Detail/> } />
      </Routes>
    </>
  )
}

export default App;
