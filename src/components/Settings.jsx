import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, } from 'react-router-dom';
import pokedexBanner from '../images/pokedexBanner.svg'
import { changeIsDark } from '../store/Slices/isDark.slice';
import { setPokemonsPerPage } from '../store/Slices/pokemonsPerPage.slice';




const Settings = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isDark = useSelector(state => state.isDark);
    const pokemonsPerPage = useSelector(state => state.pokemonsPerPage)

    document.body.style = `background: ${isDark ? 'rgb(29, 27, 27)' : 'white'} `;



    return (
        <section>
            <div className='red-line'>
                <img src={pokedexBanner} alt="" className='banner' />
                <div className='black-line'>
                    <div className='ellipse'>
                        <div className='black-circle'>
                            <div className='gray-circle'>
                            <i className="fa-solid fa-arrow-left" onClick={() => navigate('/pokedex')}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='settings'>
               
                <aside>
                    <h2 style={{ color: isDark ? 'white' : '' }}>Change theme</h2>
                    <div className="check-container center first">
                        <span style={{ color: isDark ? 'white' : '' }}>Light</span>
                        <input
                            type="checkbox"
                            defaultChecked={isDark}
                            onChange={() => dispatch(changeIsDark(!isDark))}
                            role="switch" />
                        <span style={{ color: isDark ? 'white' : '' }}>Dark</span>
                    </div>
                </aside>
                <aside>
                    <h2 style={{ color: isDark ? 'white' : '' }}>Change pokemons per page</h2>
                    <select value={pokemonsPerPage} onChange={e => dispatch(setPokemonsPerPage(parseInt(e.target.value)))} style={{background: isDark? "black" : " ",color: isDark? "white" : " "}}>
                        <option value="4">4 pokemos</option>
                        <option value="8">8 pokemons</option>
                        <option value="12">12 pokemons</option>
                        <option value="20">20 pokemons</option>
                    </select>
                </aside>
            </div>
        </section>
    );
};


export default Settings;