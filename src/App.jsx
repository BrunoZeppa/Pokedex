import './App.css'
import { HashRouter, Routes, Route, } from 'react-router-dom';
import Pokedex from './components/Pokedex';
import PokemonDetail from './components/PokemonDetail';
import UserInput from './components/UserInput';
import ProtectedRoutes from './components/ProtectedRoutes';
import Settings from './components/Settings';



function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<UserInput />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokemondetail/:id" element={<PokemonDetail />} />
            <Route path='/settings' element={<Settings />} />
          </Route>
        </Routes>
      </HashRouter>

    </div>
  )
}

export default App
