import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import MainHeader from './components/Navbar/MainHeader';
import Home from './components/Pages/Home/Home';
import Projects from './components/Pages/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <HashRouter basename='/'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
