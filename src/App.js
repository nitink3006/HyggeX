//import logo from './logo.svg';
//import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Prop from './Pages/Prop';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Prop/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
