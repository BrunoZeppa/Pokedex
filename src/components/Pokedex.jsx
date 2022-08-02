import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonItem from './PokemonItem';
import pokedexBanner from '../images/pokedexBanner.svg';
import { getSuggestionThunk, setSuggestionSearch } from '../store/Slices/suggestionSearch.slice';



const Pokedex = () => {
    
    const user = useSelector(state => state.user);

    const isDark = useSelector(state => state.isDark);

    const pokemonsPerPage = useSelector(state => state.pokemonsPerPage);

    const suggestionSearch = useSelector(state => state.suggestionSearch);

    const dispatch = useDispatch();

    

    document.body.style = `background: ${isDark ? 'rgb(29, 27, 27)' : 'white'} `;

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

    useEffect(() => {
        dispatch(getSuggestionThunk(pokemonSearch));

        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories/')
            .then(res => setSuggestionSearch(res.data.results))
    }, [pokemonSearch])



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
    const lastIndex = page * pokemonsPerPage;
    const firstIndex = lastIndex - pokemonsPerPage;
    const pokemonsPagination = pokemons.slice(firstIndex, lastIndex)

    const numbers = [];

    let lastPage = Math.ceil(pokemons.length / pokemonsPerPage)
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

    const lowerCaseFirstLetter = (string) => {
        return string?.charAt(0).toLowerCase() + string?.slice(1);
      }


    return (
        <main>
            <div className='red-line'>
                <img src={pokedexBanner} alt="" className='banner' />
                <div className='black-line'>
                    <div className='ellipse'>
                        <div className='black-circle'>
                            <div className='gray-circle' onClick={() => navigate('/settings')}>
                            <i className="fa-solid fa-gear"></i>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='user-box'>
                <p style={{color: isDark? "white" : " "}}><span>Welcome {user}, </span> lets find your pokemon</p>
                <div className='log-out' onClick={() => navigate('/')}><i className="fa-solid fa-right-from-bracket"></i></div>
            </div>
            <nav>
                <form onSubmit={search}>
                    <input type="text"
                        value={pokemonSearch}
                        onChange={e => setPokemonSearch(lowerCaseFirstLetter( e.target.value))}
                        placeholder='Type a pokemon'
                        style={{background: isDark? "black" : " ",color: isDark? "white" : " "}}
                    />
                    <button>search</button>
                </form >
            

                <div className='suggestion-search-container'>
                {suggestionSearch.map(suggestion => (
                    <div key={suggestion.name} className='sugestion-card'><p>{suggestion.name}</p></div>
                ))
                }
                </div>


                <select onChange={filterTypes} style={{background: isDark? "black" : " ",color: isDark? "hsl(210, 1%, 40%)" : " "}}>
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