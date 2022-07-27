import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pokedexBanner from "../images/pokedexBanner.svg";




const PokemonDetail = () => {

    const [pokemons, setPokemons] = useState({});

    /*<aside id="landing-page-sec-2" className="aside2">
                        <div className="skill-bars">
                            <h4 className="skill1">HP:</h4>
                            <h4 className="skill1">Attack:</h4>
                            <h4 className="porcentaje1">{pokemons?.stats[1].base_stat}/150</h4>
                            <div className="progress-bar1" style={{ width: "60px" }} data-label=""> </div>
                            <h4 className="skill2">Defense</h4>
                            <h4 className="porcentaje2">{pokemons?.stats[2].base_stat}/150</h4>
                            <div className="progress-bar2" style={{ width: "60px" }} data-label=""> </div>
                            <h4 className="skill3">Speed</h4>
                            <h4 className="porcentaje3">{pokemons?.stats[5].base_stat}/150</h4>
                            <div className="progress-bar3" style={{ width: "60px" }} data-label=""> </div>
                        </div>
                    </aside>*/

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res =>setPokemons(res.data))
    }, [id]);

    const moves = pokemons.moves;

    const capitalizeFirstLetter = (string) => {
        return string?.charAt(0).toUpperCase() + string?.slice(1);
    }
    const textColor = (type) => {
        if (type == "grass") {
            return '#416460'
        } else if (type == "fire") {
            return '#E75C35'
        } else if (type == "water") {
            return '#1479FB'
        } else if (type == "bug") {
            return '#4AB648'
        } else if (type == "normal") {
            return '#735259'
        } else if (type == "ghost") {
            return '#323569'
        } else if (type == "rock") {
            return '#7E7E7E'
        } else if (type == "dark") {
            return '#030706'
        } else if (type == "dragon") {
            return '#478A93'
        } else if (type == "electric") {
            return '#0C1395'
        } else if (type == "poison") {
            return '#5B3184'
        } else if (type == "ice") {
            return '#6FBEDF'
        } else if (type == "steel") {
            return '#5E736C'
        } else if (type == "ground") {
            return '#654008'
        } else if (type == "fighting") {
            return '#96402A'
        } else if (type == "psychic") {
            return '#971B45'
        } else {
            return 'black'
        }
    }
    const backgroundColor = (type) => {
        if (type == "grass") {
            return "linear-gradient(#B1DBBC, #C3DEA3)";
        } else if (type == "fire") {
            return "linear-gradient(#E6901E, #E75C35)";
        } else if (type == "water") {
            return "linear-gradient(#133258, #1479FB, #82B2F1)";
        } else if (type == "bug") {
            return "linear-gradient(#62DB60, #3BB039, #AAFFA8)";
        } else if (type == "normal") {
            return "linear-gradient(#735259, #BC6B7C, #7C3F4C)";
        } else if (type == "ghost") {
            return "linear-gradient(#323569, #454AA8, #787DDA)";
        } else if (type == "rock") {
            return "linear-gradient(#7E7E7E, #8D8D94, #D3D3D3)";
        } else if (type == "dark") {
            return "linear-gradient(#030706, #0D1211, #5A5E5D)";
        } else if (type == "dragon") {
            return "linear-gradient(#478A93, #56A4AE, #A2BEC1)";
        } else if (type == "electric") {
            return "linear-gradient(#0C1395, #2B319B, #7075D9)";
        } else if (type == "poison") {
            return "linear-gradient(#5B3184, #A564E3, #CE9BFF)";
        } else if (type == "ice") {
            return "linear-gradient(#6FBEDF, #64CBF5, #BDEBFE)";
        } else if (type == "steel") {
            return "linear-gradient(#5E736C, #728881, #A8A8A8)";
        } else if (type == "ground") {
            return "linear-gradient(#654008, #895C1A, #D69638)";
        } else if (type == "fighting") {
            return "linear-gradient(#96402A, #F1613C, #CB735D)";
        } else if (type == "psychic") {
            return "linear-gradient(#971B45, #C23867, #CD7D98)";
        } else {
            return 'black'
        }
    }




    return (
        <section>

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

            <article style={{ background: backgroundColor(pokemons?.types?.[0].type.name) }}>
                <div className="s-card-top-space">
                    <img src={pokemons?.sprites?.other.dream_world.front_default} className="pokemon" alt="" />
                </div>
                <div className="s-card-middle-space">
                    <div className="name"><hr /><h3 style={{ color: textColor(pokemons?.types?.[0].type.name) }}>{pokemons?.name}</h3><hr /></div>
                    <div className="properties">
                        <div>
                            <p>Weight</p>
                            <strong style={{ color: textColor(pokemons?.types?.[0].type.name) }}>{pokemons?.weight}</strong>
                        </div>
                        <div>
                            <p>Height</p>
                            <strong style={{ color: textColor(pokemons?.types?.[0].type.name) }}>{pokemons?.height}</strong>
                        </div>
                    </div>
                    <div className="characteristics">
                        <div className="c-one">
                            <h2>Type</h2>
                            <div>
                                <button style={{ background: backgroundColor(pokemons?.types?.[0].type.name) }}>{capitalizeFirstLetter(pokemons?.types?.[0].type?.name)}</button>
                                <button style={{ background: backgroundColor(pokemons?.types?.[1]?.type.name) }}>{capitalizeFirstLetter(pokemons?.types?.[1]?.type?.name)}</button>
                            </div>
                        </div>
                        <div className="c-two">
                            <h2>Abilities</h2>
                            <div>
                                <button>{capitalizeFirstLetter(pokemons?.abilities?.[0].ability.name)}</button>
                                <button>{capitalizeFirstLetter(pokemons?.abilities?.[1].ability.name)}</button>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="s-card-bottom-space">
                    <h3>Stats</h3>
                    <h4>HP: {pokemons?.stats?.[0].base_stat}/150</h4>
                    <progress max="150" value={pokemons?.stats?.[0].base_stat}></progress>
                    <h4>Attack: {pokemons?.stats?.[1].base_stat}/150</h4>
                    <progress max="150" value={pokemons?.stats?.[1].base_stat}></progress>
                    <h4>Defense: {pokemons?.stats?.[2].base_stat}/150</h4>
                    <progress max="150" value={pokemons?.stats?.[2].base_stat}></progress>
                    <h4>Speed: {pokemons?.stats?.[5].base_stat}/150</h4>
                    <progress max="150" value={pokemons?.stats?.[5].base_stat}></progress>
                </div>
            </article>
            <article className="article-two" style={{ background: backgroundColor(pokemons?.types?.[0].type.name) }}>
                    <h3>Movements</h3>
                    <aside>
                    {
                        moves?.map(move => (
                            <div key={move.move.name} className="movements"> <p>{move.move.name}</p></div>
                        ))
                    }
                    </aside>
            </article>
        </section>
    );
};



export default PokemonDetail;