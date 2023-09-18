import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//se importa el componente
import ShowPersonaje from './components/ShowPersonaje';
import CreatePersonaje from './components/CreatePersonaje';
import EditPersonaje from './components/EditPersonaje';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowPersonaje/>} />
          <Route path='/create' element={ <CreatePersonaje/>} />
          <Route path='/edit/:id' element={ <EditPersonaje/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
