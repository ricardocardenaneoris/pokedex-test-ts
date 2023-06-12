import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { PokemonAPI, Result } from './interfaces/Pokemon';

const limit = 10
const offset = 0


const App = () => {
  const [pokemonList, setPokemonList] = useState<Result[]>()

  const apiCall = async () => {
    const response: AxiosResponse<PokemonAPI> = await axios.get<PokemonAPI>(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);
    const data: PokemonAPI = response.data;
    setPokemonList(data?.results)
  }

  useEffect(() => {
    apiCall()
  },[])

  return <div>
    <h1>Pokedex</h1>
    <ul>
      {pokemonList?.map((x, i) => {
        return <li key={i}>{x.name}</li>
      })}
    </ul>
  </div>
}

export default App