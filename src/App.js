
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Questions from './components/Questions';

function App() {
  return (
    <div className="App">
      
        <Routes>
        <Route path={'/'} element={<Home/>}></Route>
  
       <Route path={'/Questions'} element={<Questions/>}></Route>
      </Routes>  
    </div>
  );
}

export default App;
