
import './App.css';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home'
import WatchHistory from './Pages/WatchHistory'

import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/watch-history' element={<WatchHistory/>} />        
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
