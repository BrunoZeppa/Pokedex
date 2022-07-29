import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const PokemonItem = ({ pokemonUrl }) => {

    const [pokemonItem, setPokemonItem] = useState({});

    const navigate = useNavigate();

    const capitalizeFirstLetter = (string) => {
        return string?.charAt(0).toUpperCase() + string?.slice(1);
      }
      
      const textColor = (type) => {
        if(type == "grass"){
            return '#416460'
        }else if(type == "fire"){
            return '#E75C35'
        }else if(type == "water"){
            return '#1479FB'
        }else if(type == "bug"){
            return '#4AB648'
        }else if(type == "normal"){
            return '#735259'
        }else if(type == "ghost"){
            return '#323569'
        }else if(type == "rock"){
            return '#7E7E7E'
        }else if(type == "dark"){
            return '#030706'
        }else if(type == "dragon"){
            return '#478A93'
        }else if(type == "electric"){
            return '#0C1395'
        }else if(type == "poison"){
            return '#5B3184'
        }else if(type == "ice"){
            return '#6FBEDF'
        }else if(type == "steel"){
            return '#5E736C'
        }else if(type == "ground"){
            return '#654008'
        }else if(type == "fighting"){
            return '#96402A'
        }else if(type == "psychic"){
            return '#971B45'
        }else{
            return 'black'
        }
    }    
    const backgroundColor = (type) => {
        if(type == "grass"){
            return "linear-gradient(#B1DBBC, #C3DEA3)";
        }else if(type == "fire"){
            return "linear-gradient(#E6901E, #E75C35)";
        }else if(type == "water"){
            return "linear-gradient(#133258, #1479FB, #82B2F1)";
        }else if(type == "bug"){
            return "linear-gradient(#62DB60, #3BB039, #AAFFA8)";
        }else if(type == "normal"){
            return "linear-gradient(#735259, #BC6B7C, #7C3F4C)";
        }else if(type == "ghost"){
            return "linear-gradient(#323569, #454AA8, #787DDA)";
        }else if(type == "rock"){
            return "linear-gradient(#7E7E7E, #8D8D94, #D3D3D3)";
        }else if(type == "dark"){
            return "linear-gradient(#030706, #0D1211, #5A5E5D)";
        }else if(type == "dragon"){
            return "linear-gradient(#478A93, #56A4AE, #A2BEC1)";
        }else if(type == "electric"){
            return "linear-gradient(#0C1395, #2B319B, #7075D9)";
        }else if(type == "poison"){
            return "linear-gradient(#5B3184, #A564E3, #CE9BFF)";
        }else if(type == "ice"){
            return "linear-gradient(#6FBEDF, #64CBF5, #BDEBFE)";
        }else if(type == "steel"){
            return "linear-gradient(#5E736C, #728881, #A8A8A8)";
        }else if(type == "ground"){
            return "linear-gradient(#654008, #895C1A, #D69638)";
        }else if(type == "fighting"){
            return "linear-gradient(#96402A, #F1613C, #CB735D)";
        }else if(type == "psychic"){
            return "linear-gradient(#971B45, #C23867, #CD7D98)";
        }else{
            return 'black'
        }
    }


    useEffect(() => {
        axios.get(pokemonUrl)
            .then(res => setPokemonItem(res.data))
    }, []);


    
    return (
        <article onClick={() => navigate(`/pokemondetail/${pokemonItem.id}`)} style={{background: backgroundColor(pokemonItem.types?.[0].type?.name)}}>
            <div className='card-top-space'></div>
            <div className='card-middle-space'>
                <img src={pokemonItem.sprites?.other.dream_world?.front_default} alt="" />
                <h3 style={{color: textColor(pokemonItem.types?.[0].type?.name)}}>{capitalizeFirstLetter(pokemonItem.name)}</h3>
                <p>{capitalizeFirstLetter(pokemonItem.types?.[0].type?.name)}</p>
                <small>Type</small>
            </div>
            <div className='card-bottom-space'>
                <div className='abilities'><small>HP</small><h3 style={{color: textColor(pokemonItem.types?.[0].type?.name)}}>{pokemonItem.stats?.[0].base_stat}</h3></div>
                <div className='abilities'><small>ATTACK</small><h3 style={{color: textColor(pokemonItem.types?.[0].type?.name)}}>{pokemonItem.stats?.[1].base_stat}</h3></div>
                <div className='abilities'><small>SHIELD</small><h3 style={{color: textColor(pokemonItem.types?.[0].type?.name)}}>{pokemonItem.stats?.[2].base_stat}</h3></div>
                <div className='abilities'><small>SPEED</small><h3 style={{color: textColor(pokemonItem.types?.[0].type?.name)}}>{pokemonItem.stats?.[5].base_stat}</h3></div>
            </div>
        </article>

    );
};

export default PokemonItem;