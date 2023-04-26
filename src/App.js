import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Details from './components/Details';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Header/>

     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/view-plant/:id' element={<Details/>}/>
     </Routes>
      
      

      <Footer/>
    
    </div>
  );
}

export default App;
