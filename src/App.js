import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import StarshipList from './StarshipList/StarshipList';
import StarshipDetails from './StarshipDetail/StarshipDetail';

function App() {
  return (
    <>
    <Routes>      
      <Route path='/' element={<StarshipList />} />
      <Route path='/starship' element={<StarshipDetails />} />
    </Routes>
    </>
  );
}

export default App;
