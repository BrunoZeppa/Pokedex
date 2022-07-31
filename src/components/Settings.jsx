import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, } from 'react-router-dom';
import pokedexBanner from '../images/pokedexBanner.svg'
import { changeIsDark } from '../store/Slices/isDark.slice';



const Settings = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const isDark = useSelector(state => state.isDark);

    document.body.style = `background: ${isDark ? 'rgb(29, 27, 27)' : 'white'} `;
    


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
            <div className='settings'>
                <i className="fa-solid fa-arrow-left" onClick={() => navigate('/pokedex')} style={{ color: isDark ? 'white' : '', fontSize: "42px" }}></i>
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
            </div>
        </section>
    );
};


export default Settings;