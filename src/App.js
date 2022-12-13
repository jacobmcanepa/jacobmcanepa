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
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/jacobmcanepa' element={ <Home /> } />
          <Route exact path='/about' element={ <About /> } />
          <Route exact path='/work' element={ <Work /> } />
          <Route exact path='/contact' element={ <Contact /> } />
          <Route path='*' element={ <PageNotFound /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
