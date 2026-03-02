import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `text-white px-5 py-3 inline-block ${
      isActive ? "font-bold underline" : "font-normal"
    }`;

  return (
    <nav className="bg-blue-900">
      <div className="mx-auto w-11/12 md:w-4/5 flex items-center gap-6">
        <NavLink to="/" className={linkClass}>
          Beranda
        </NavLink>

        <NavLink to="/profil-gereja" className={linkClass}>
          Profil Gereja
        </NavLink>

        <NavLink to="/jadwal-ibadah" className={linkClass}>
          Jadwal Ibadah
        </NavLink>

        <NavLink to="/pelayanan" className={linkClass}>
          Pelayanan
        </NavLink>

        <NavLink to="/galeri" className={linkClass}>
          Galeri Kegiatan
        </NavLink>

        {/* INI YANG PENTING */}
        <NavLink to="/pengumuman" className={linkClass}>
          Pengumuman
        </NavLink>

        <NavLink to="/kontak" className={linkClass}>
          Kontak
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;