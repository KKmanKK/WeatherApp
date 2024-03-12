import './App.css';
import { Search } from './components/Search/Search';
import { options, url } from './features/api';
import { debounse } from './features/debounce';

function App() {
  const loadDataCity = debounse(async (value: string) => {
    try {
      debugger;
      const response = await fetch(`${url}?city=${value}`, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }, 500);
  return (
    <>
      <Search loadDataCity={loadDataCity} />
    </>
  );
}

export default App;
