import './App.css';
import { Route, Routes } from 'react-router-dom';
import AllShowsComponent from './components/AllShowsComponent';
import MoviesComponent from './components/MoviesComponent';
import SeriesComponent from './components/SeriesComponent';
import BookmarkedComponent from './components/BookmarkedComponent';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {




return (
    <div className="App">
      <Header />
      <div className='screen-container'>
      <Routes>
        <Route exact path='/' element={<AllShowsComponent />}/>
        <Route path='/movies' element={<MoviesComponent />}/>
        <Route path='/series' element={<SeriesComponent />}/>
        <Route path='/bookmarked' element={<BookmarkedComponent/>}/>
      </Routes>
      <Footer />
      </div>

    </div>
  );
}

export default App;
