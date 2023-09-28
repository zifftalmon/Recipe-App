import './App.css';
import './styles/Nav.css'
import './styles/Recipes.css'
import Nav from './components/Nav';
import Home from './components/Home';
import Recipes from './components/Recipes';
import {HashRouter, Routes, Route} from 'react-router-dom'
import Recipe from './components/Recipe';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <route path='/recipe/:id' element={<Recipe/>}/>
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
