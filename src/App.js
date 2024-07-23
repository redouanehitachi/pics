
import SearchBar from './components/SearchBar'
function App() {

  const hundleSubmit = (term) => {
    console.log('do a search with terme ', term);
  };
  return (
    <div>
      <SearchBar onSubmit={hundleSubmit} />
    </div>
  );
}

export default App;
