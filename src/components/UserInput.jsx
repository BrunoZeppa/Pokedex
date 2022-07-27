import React, { useState } from 'react';
import { changeUser } from '../store/Slices/user.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import pokedexBanner from '../images/pokedexBanner.svg'

// 1. Crear la accion en el slice
// 2. Exportar la accion
// 3. Importarla en el componente donde la utilizaremos
// 4. Importar y ejecutar useDispatch
// 5. despachamos la acción

const UserInput = () => {

    const[userName, setUserName] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const capitalizeFirstLetter = (string) => {
        return string?.charAt(0).toUpperCase() + string?.slice(1);
    }

    const submit = e =>{
        e.preventDefault();
        dispatch(changeUser(capitalizeFirstLetter(userName)))
        navigate("/pokedex");
    }

    return (
        <header>
            <img src={pokedexBanner} alt="" />
            <h2>Hello trainer!</h2>
            <small>Give me your name to start</small>
        <form onSubmit={submit}>
            <label htmlFor=""></label>
            <input 
            type="text"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            placeholder='type your name..' />
            <button type='submit'>Start</button>
        </form>
        <div className='red-line'>
            <div className='black-line'>
                <div className='ellipse'>
                    <div className='black-circle'>
                        <div className='gray-circle'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </header>
    );
};

export default UserInput;