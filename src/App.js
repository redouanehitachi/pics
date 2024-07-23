
import { useState } from 'react';
import searchImages from './components/api';
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList';

function App() {
  const [images, setimages] = useState([]);

  const hundleSubmit = async (term) => {
    const result = await searchImages(term);
    setimages(result);
  };
  return (
    <div>
      <SearchBar onSubmit={hundleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
