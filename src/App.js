import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import DevWork from './pages/DevWork';
import VideoWork from './pages/VideoWork';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='min-h-screen'>
        <Nav />

        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/jacobmcanepa' element={ <Home /> } />
          <Route exact path='/about' element={ <About /> } />
          <Route exact path='/devwork' element={ <PageNotFound /> } />
          <Route exact path='/videowork' element={ <PageNotFound /> } />
          <Route exact path='/contact' element={ <Contact /> } />
          <Route exact path='*' element={ <PageNotFound /> } />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
