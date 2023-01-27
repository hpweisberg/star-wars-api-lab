import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import StarshipList from './StarshipList/StarshipList';

function App() {
  return (
    <>
    <Routes>      
      <Route path='/' element={<StarshipList />} />
    </Routes>
    </>
  );
}

export default App;
