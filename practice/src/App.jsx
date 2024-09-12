import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from './About';
import PNF from './PNF';

import Counter from './Counter';

import Navbar from './Components/Navbar';
import ExpenseTracker from './ExpenceTrackers';
import ConditionalRindering from './pages/ConditionalRindering';
import TrailApi from './pages/TrailApi';
import Recipe from './pages/Recipe';
import Viewrecipe from './pages/Viewrecipe';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path = '/' element ={<Home/>}/>
      <Route path ='/about' element ={<About/>}/>
      <Route pth ='/*' element ={<PNF/>}/>
      <Route path ='/xyz' element ={<Counter/>}/>
      <Route path ='/expense' element ={<ExpenseTracker/>}/>
    <Route path='conditionalRendering' element = {<ConditionalRindering />}/>
    <Route path='/api' element={<TrailApi/>}/>
    <Route path='/abc' element={<Recipe/>}/>
    <Route path='/recipe' element={<Viewrecipe/>}/>

      </Routes>

    
    </BrowserRouter>


    </div>
  );
}

export default App;