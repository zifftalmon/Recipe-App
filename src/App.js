import './App.css';
import './styles/Nav.css'
import Nav from './components/Nav';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Recipes from './components/Recipes';
import {HashRouter, Routes, Route} from 'react-router-dom'
import About from './components/About';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/recipes/:id' element={<Recipe/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
