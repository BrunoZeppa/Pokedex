import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonItem from './PokemonItem';
import pokedexBanner from '../images/pokedexBanner.svg';

const Pokedex = () => {

    const user = useSelector(state => state.user)
    const [pokemons, setPokemons] = useState([]);
    const[pokemonSearch, setPokemonSearch] = useState("");
    const navigate = useNavigate();
    const [pokemonsTypes, setPokemonsTypes] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1154/')
        .then(res => setPokemons(res.data.results))

        axios.get('https://pokeapi.co/api/v2/type/')
        .then(res => setPokemonsTypes(res.data.results))
    },[])

 

    const search = e => {
        e.preventDefault();
        navigate(`/pokemondetail/${pokemonSearch}`);
    }

    const filterTypes = (e) => {
        alert('se selecciono un tipo' + e.target.value)
        axios.get(e.target.value)
        .then(res => setPokemons(res.data.pokemon))
    }

const [page, setPage] = useState(1); 
const lastIndex = page * 20;
const firstIndex = lastIndex - 20;
const pokemonsPagination = pokemons.slice(firstIndex,lastIndex)

const lastPage = Math.ceil(pokemons.length/20)

const numbers = [];
for( let i = 1; i <= lastPage; i++){
    numbers.push(i)
}

    return (
        <main>
            <div className='red-line'>
                <img src={pokedexBanner} alt="" className='banner' />
            <div className='black-line'>
                <div className='ellipse'>
                    <div className='black-circle'>
                        <div className='gray-circle'>

                        </div>

                    </div>
                </div>
            </div>
        </div>
            <p><span>Welcome {user}, </span> lets find your pokemon</p>
            <nav>
            <form onSubmit={search}>
                <input type="text"
                value={pokemonSearch} 
                onChange={e => setPokemonSearch(e.target.value)}
                placeholder='Type a pokemon'
                />
                <button>search</button>
            </form >
            <select onChange={filterTypes}>
                <option value=''>Or select by type</option>
                {
                    pokemonsTypes.map(type => (
                        <option key={type.url} value={type.url}>
                            {type.name}
                        </option>
                    ))
                }
            </select>
           
            </nav>
            <div className='card-container'>
                {
                    pokemonsPagination.map(pokemon => (
                        <PokemonItem  pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url} key={pokemon.url ? pokemon.url : pokemon.pokemon.url}/>
                    ))
                }
            </div>
            <aside>
            {
               numbers.map(number => (
                     <button onClick={() => setPage(number)} key={number}>{number}</button>
                ))
            }
            </aside>
        </main>
    );
};

export default Pokedex;