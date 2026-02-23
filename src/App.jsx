import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Renungan from './pages/Renungan';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-black font-sans">
        <Navbar />
        
        {/* Area Konten Dinamis (Berubah sesuai Rute) */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/renungan" element={<Renungan />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;