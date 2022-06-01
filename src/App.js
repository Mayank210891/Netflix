import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Search from '@material-ui/icons/Search';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/Navigation/MainNavigation';
import Series from './components/Pages/Series';
import Trending from './components/Pages/Trending';
import Movies from './components/Pages/Movies';
import Search from './components/Pages/Search';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="app">
      <Container>
        <Routes>
          <Route path='/' element={<Trending />}/>
          <Route path='/movies' element={<Movies />} />
          <Route path='/search' element={<Search />} />
          <Route path='/series' element={<Series />} />
          </Routes>
      </Container>
    </div>
    <SimpleBottomNavigation></SimpleBottomNavigation>
    </BrowserRouter>    
  );
}

export default App;
