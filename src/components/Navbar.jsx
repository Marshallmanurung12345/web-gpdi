import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#0b1385] text-white py-4 px-8 flex justify-between items-center w-full">
      <div className="flex items-center space-x-3">
        {/* Placeholder Logo */}
        <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center text-xs text-[#0b1385] font-bold">
          GPdI
        </div>
        <span className="font-semibold text-sm md:text-base">GPdI Sibulele Balige</span>
      </div>
      
      <ul className="hidden md:flex space-x-6 text-sm">
        <li><Link to="/" className="hover:text-gray-300">Beranda</Link></li>
        <li><a href="#" className="hover:text-gray-300">Profil Gereja</a></li>
        <li><a href="#" className="hover:text-gray-300">Jadwal Ibadah</a></li>
        <li><a href="#" className="hover:text-gray-300">Pelayanan</a></li>
        <li><a href="#" className="hover:text-gray-300">Galeri Kegiatan</a></li>
        <li><a href="#" className="hover:text-gray-300">Pengumuman</a></li>
        <li><a href="#" className="hover:text-gray-300">Kontak</a></li>
      </ul>

      <div>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-1 rounded-full text-sm font-semibold transition-colors">
          LOGIN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;