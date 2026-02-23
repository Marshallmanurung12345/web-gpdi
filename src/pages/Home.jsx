import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="w-full pb-16 text-black">
      {/* Hero Section */}
      <section className="bg-[#e5e5e5] mx-auto w-11/12 md:w-4/5 mt-8 p-12 text-center min-h-[300px] flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Ayat Alkitab Tema Tahunan</h1>
        <p className="text-xl mb-8 text-gray-800">Yeremia 29:11</p>
        <p className="text-left md:text-center text-lg max-w-4xl mx-auto">
          "Sebab Aku ini mengetahui rancangan-rancangan apa yang ada pada-Ku mengenai kamu, demikianlah firman TUHAN, yaitu rancangan damai sejahtera dan bukan rancangan kecelakaan, untuk memberikan kepadamu hari depan yang penuh harapan."
        </p>
      </section>

      {/* 3 Cards Section */}
      <section className="mx-auto w-11/12 md:w-4/5 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-[#0b1385] text-white p-6 flex flex-col justify-between min-h-[250px]">
          <div>
            <h2 className="text-xl font-bold text-center mb-6">Jadwal Ibadah</h2>
            <p className="text-sm leading-relaxed">
              Ibadah Raya I: Minggu, 08.00 WIB<br />
              Ibadah Raya II: Minggu, 10.30 WIB<br />
              Ibadah Sekolah Minggu: Minggu, 08.00 WIB
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-white text-black font-semibold px-4 py-1 text-sm border border-transparent hover:bg-gray-200">
              Detail
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0b1385] text-white p-6 flex flex-col justify-between min-h-[250px]">
          <div>
            <h2 className="text-xl font-bold text-center mb-6">Pengumuman Terbaru</h2>
            <ul className="text-sm space-y-2">
              <li>. Rapat Evaluasi Panitia Paskah</li>
              <li>. Pendataan Jemaat Baru 2026</li>
              <li>. Kerja Bakti Area Gereja Hari Sabtu</li>
            </ul>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-white text-black font-semibold px-4 py-1 text-sm border border-transparent hover:bg-gray-200">
              Selengkapnya
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#0b1385] text-white p-6 flex flex-col justify-between min-h-[250px]">
          <div>
            <h2 className="text-xl font-bold text-center mb-6">Renungan Hari Ini</h2>
            <p className="text-sm leading-relaxed">
              Menemukan damai di tengah badai kehidupan tidak berarti badainya berhenti, tetapi keyakinan bahwa Tuhan selalu memegang kendali atas hidup kita.
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <Link to="/renungan" className="bg-white text-black font-semibold px-4 py-1 text-sm border border-transparent hover:bg-gray-200 text-center">
              Baca Renungan
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mx-auto w-11/12 md:w-4/5 mt-12">
        <h2 className="text-3xl font-bold mb-6 text-black">Lokasi Gereja</h2>
        <div className="w-full h-64 bg-[#e5e5e5] border border-gray-400 flex items-center p-6 mb-6">
          <p className="text-gray-700 font-mono">Map wireframe</p>
        </div>
        <div className="space-y-4 font-bold text-lg text-black">
          <p>Alamat Lengkap Gereja Anda. Jalan Contoh No.123, Balige, Sumatera Utara, 22312</p>
          <p>Telepon : (0632) 123456</p>
          <p>Email : info@gpdisibulele.org</p>
        </div>
      </section>
    </main>
  );
};

export default Home;