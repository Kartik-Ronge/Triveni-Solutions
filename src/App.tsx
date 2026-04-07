import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Surveillance from './pages/Surveillance';
import About from './pages/AboutUs';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router basename="/Triveni-Solutions">
      <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30 selection:text-primary">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/surveillance" element={<Surveillance />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
