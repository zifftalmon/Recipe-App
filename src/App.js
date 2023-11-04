import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Recipes from './components/Recipes';
import {HashRouter, Routes, Route} from 'react-router-dom'
import About from './components/About';
import Favorites from './components/Favorites';

function App() {
  const pass = process.env.REACT_APP_SPOONCULAR_API_KEY;
  return (
    <HashRouter>
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path='/' element={<Home pass={pass}/>}/>
        <Route path='/recipes' element={<Recipes pass={pass}/>}/>
        <Route path='/recipes/:id/:title' element={<Recipe pass={pass}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
