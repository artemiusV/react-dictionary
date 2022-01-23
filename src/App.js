import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react'
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';
import { useDebounce } from './hooks';

function App() {

  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([])

  const debouncedSearchTerm = useDebounce(word, 500);
  // Effect for API call
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        dictionaryApi(debouncedSearchTerm)
        /*  setIsSearching(true);
         searchCharacters(debouncedSearchTerm).then((results) => {
           setIsSearching(false);
           setResults(results);
         }); */
      } else {/* 
        setResults([]);
        setIsSearching(false); */
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  const dictionaryApi = async (word) => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      setMeanings(data.data)

    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);


  /*   useEffect(() => {
      if (word) {
        dictionaryApi()
      }
    }, [word]) */

  return (
    <div className="App"
      style={{ height: '100vh', background: "DarkMagenta", color: "white" }}>
      <Container
        maxWidth='md'
        stye={{ display: "flex", flexDirection: 'column', height: '100vh' }}>
        <Header
          word={word}
          setWord={setWord}
        />
        {meanings && (
          <Definitions word={word} meanings={meanings} />
        )}

      </Container>
    </div >
  );
}

export default App;
