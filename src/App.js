import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Author from './components/pages/Author';
import Feedback from './components/pages/Feedback';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/author' element={<Author />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path="/creator" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;
