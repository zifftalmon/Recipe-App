import './App.css';
import './styles/Nav.css'
import './styles/Recipes.css'
import Nav from './components/Nav';
import Home from './components/Home';
import Recipe from './components/Recipe';
import {HashRouter, Routes, Route} from 'react-router-dom'
import Search from './components/Search';


function App() {
  return (
    <HashRouter>
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipe/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
