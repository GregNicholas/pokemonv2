import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
  // const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  // const [nextPageUrl, setNextPageUrl] = useState();
  // const [previousPageUrl, setPreviousPageUrl] = useState();
  const [loading, setLoading] = useState(true);
  const [filterText, setFilterText] = useState('');

    const handleFilterTextChange = filterText => {
        setFilterText(filterText);
    }

  const fullPokeUrl = "https://pokeapi.co/api/v2/pokemon?limit=10000";

  // useEffect(() => {
  //   setLoading(true);
  //   let cancel;
  //   axios.get(currentPageUrl, {
  //     cancelToken: new axios.CancelToken(c => cancel = c)
  //   }).then(res => {
  //     setLoading(false);
  //     setNextPageUrl(res.data.next);
  //     setPreviousPageUrl(res.data.previous);
  //     setPokemon(res.data.results.map(p => p.name));
  //   });

  //   return () => cancel();
  // }, [currentPageUrl]);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(fullPokeUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false);
      setPokemon(res.data.results.map(p => p.name));
    });

    return () => cancel();
  }, [fullPokeUrl]);

  console.log(pokemon.filter(p => p.indexOf('saur') !== -1));

  if (loading) return "Loading...";

  return (
    <>
    <SearchBar 
                inStockOnly={inStockOnly} 
                onFilterTextChange={handleFilterTextChange}
                onInStockChange={handleInStockChange}
            />
    {/* <PokemonList pokemon={pokemon} /> */}

    </>
  );
}

export default App;
