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
      <div>
        <Nav />

        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/work' element={ <Work /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='*' element={ <Home /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
