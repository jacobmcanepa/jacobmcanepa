import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Router>
      <div className='min-h-screen'>
        <Nav />

        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/jacobmcanepa' element={ <Home /> } />
          <Route exact path='/about' element={ <PageNotFound /> } />
          <Route exact path='/work' element={ <PageNotFound /> } />
          <Route exact path='/contact' element={ <Contact /> } />
          <Route exact path='*' element={ <PageNotFound /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
