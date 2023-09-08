import { Navigate, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import PetSimulator from './components/PetSimulator';
import { GeometryCalculator } from './components/GeometryCalculator';
import LibraryApp from './components/Library/LibraryApp';
import ContactApp from './components/contact/ContactApp';
import { Navbarr } from './Navbar';
import { Home } from './Home';


export const App = () => {
  return (
    <>
 
    <Navbarr />
    <Routes>

    <Route path='/task' element= { <TaskList/> } />
    <Route path='/simulador' element= { <PetSimulator /> } />
    <Route path='/geometry' element= { <GeometryCalculator/> } />
    <Route path='/library' element= { <LibraryApp/> } />
    <Route path='/contact' element= { <ContactApp/> } />
    <Route path='/Home' element= { <Home/> } />
    
    
    {/* Comodin */}
    <Route path='/*' element= { < Navigate to=  "/Home" /> } />

  </Routes>
    
    </>
  );
}
