import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonItem from './PokemonItem';
import pokedexBanner from '../images/pokedexBanner.svg';

const Pokedex = () => {

    const user = useSelector(state => state.user)
    const [pokemons, setPokemons] = useState([]);
    const [pokemonSearch, setPokemonSearch] = useState("");
    const navigate = useNavigate();
    const [pokemonsTypes, setPokemonsTypes] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154/')
            .then(res => setPokemons(res.data.results))

        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setPokemonsTypes(res.data.results))
    }, [])



    const search = e => {
        e.preventDefault();
        navigate(`/pokemondetail/${pokemonSearch}`);
    }

    const filterTypes = e => {
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))
    }

    const [page, setPage] = useState(1);

    /*======= this consts show the pokemons per page ============*/
    const lastIndex = page * 20;
    const firstIndex = lastIndex - 20;
    const pokemonsPagination = pokemons.slice(firstIndex, lastIndex)

    const numbers = [];

    let lastPage = Math.ceil(pokemons.length / 20)
    let initialPage = page < 5 ? 1 : (page - 4)
    if (page < (lastPage - 5)) {
        if (page > 5) {
            lastPage = (page + 4)
        } else {
            lastPage = 9;
        }
    }

    for (let i = initialPage; i <= lastPage; i++) {
        numbers.push(i)
    }

    const active = (num) => {
        if (num == page)
            return "rgba(255, 0, 0, 0.703)"
    }
    const activeNum = (num) => {
        if (num == page)
            return "white"
    }

    const disableFButton = (p) => {
        if (p == 1) {
            return "start-button"
        } else {
            return "vaca "
        }
    }
    const enebleFButton = (p) => {
        if (p !== 1) {
            return "button"
        } else {
            return " vaca"
        }
    }
    const disableLButton = (p) => {
        if (p == lastPage) {
            return "final-button"
        } else {
            return "vaca "
        }
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
            <div className='user-box'>
                <p><span>Welcome {user}, </span> lets find your pokemon</p>
                <div className='log-out' onClick={() => navigate('/')}><i className="fa-solid fa-right-from-bracket"></i></div>
            </div>
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
                        <PokemonItem pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url} key={pokemon.url ? pokemon.url : pokemon.pokemon.url} />
                    ))
                }
            </div>
            <aside>
                <button onClick={() => setPage(page - 1)}
                    disabled={page == 1}
                    id={disableFButton(page)}
                    className={enebleFButton(page)}><i className="fa-solid fa-angles-left"></i></button>
                {
                    numbers.map(number => (
                        <button key={number} onClick={() => setPage(number)} style={{ background: active(number), color: activeNum(number) }}>{number}</button>
                    ))
                }
                <button onClick={() => setPage(page + 1)}
                    disabled={page == lastPage}
                    id={disableLButton(page)}
                    className="button"><i className="fa-solid fa-angles-right"></i></button>
            </aside>
        </main>
    );
};

export default Pokedex;