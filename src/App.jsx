import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Renungan from "./pages/Renungan";
import PengumumanGereja from "./pages/PengumumanGereja";
import RequestSuratJemaat from './pages/RequestSuratJemaat';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-black font-sans">
        <Navbar />

        {/* Area Konten Dinamis */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/renungan" element={<Renungan />} />
            <Route path="/pengumuman" element={<PengumumanGereja />} />
            <Route path="/request-surat" element={<RequestSuratJemaat />} />
            
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;