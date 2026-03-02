import React, { useState } from 'react';

const PengumumanGereja = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    judul: '',
    cakupan: 'Rayon saya',
    isi: '',
    kirimNotifikasi: false,
  });
  const [editId, setEditId] = useState(null);

  const pengumumanList = [
    {
      id: 1,
      judul: 'Judul Pengumuman Global  Penting',
      tipe: 'Global',
      tanggal: '2023-10-27 10:00',
      pembuat: 'Pendeta',
      ringkasan:
        'Ringkasan isi pengumuman ini, menjelaskan secara singkat poin-poin penting yang perlu diketahui jemaat. Ini adalah contoh ringkasan yang bisa lebih panjang.',
      isOwn: false,
    },
    {
      id: 2,
      judul: 'Pengumuman Rayon Saya : Rapat rutin',
      tipe: 'Rayon',
      tanggal: '2023-10-27 10:00',
      pembuat: 'Ketua Rayon',
      ringkasan:
        'Ringkasan isi pengumuman ini, menjelaskan secara singkat poin-poin penting yang perlu diketahui jemaat. Ini adalah contoh ringkasan yang bisa lebih panjang.',
      isOwn: true,
    },
    {
      id: 3,
      judul: 'Pengumuman Global : Ibadah Doa Bersama',
      tipe: 'Global',
      tanggal: '2023-10-27 10:00',
      pembuat: 'Pendeta',
      ringkasan:
        'Ringkasan isi pengumuman ini, menjelaskan secara singkat poin-poin penting yang perlu diketahui jemaat. Ini adalah contoh ringkasan yang bisa lebih panjang.',
      isOwn: false,
    },
  ];

  const riwayatList = [
    { id: 1, judul: 'Judul Pengumuman Penting 1', pembuat: 'Pendeta', cakupan: 'Global', status: 'Publish', tanggal: '2024-01-01 10:00' },
    { id: 2, judul: 'Judul Pengumuman Penting 2', pembuat: 'Ketua Rayon', cakupan: 'Rayon', status: 'Publish', tanggal: '2024-01-01 10:00' },
    { id: 3, judul: 'Draft Pengumuman Baru', pembuat: 'Pendeta', cakupan: 'Global', status: 'Draft', tanggal: '2024-01-01 10:00' },
  ];

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleBatalForm = () => {
    setShowForm(false);
    setFormData({ judul: '', cakupan: 'Rayon saya', isi: '', kirimNotifikasi: false });
    setEditId(null);
  };

  return (
    <main className="mx-auto w-11/12 md:w-4/5 mt-8 mb-20 text-black">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold mb-1" style={{ fontFamily: 'Courier New, monospace' }}>
          Pengumuman Gereja
        </h1>
        <p className="text-gray-600 text-base">Informasi Resmi untuk Jemaat</p>
      </div>

      {/* Placeholder Ayat */}
      <div className="w-full bg-gray-200 flex items-center justify-center mb-8" style={{ minHeight: '180px' }}>
        <span className="text-gray-500 text-lg">Placeholder (Ayat )</span>
      </div>

      {/* Daftar Pengumuman */}
      <div className="mb-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Daftar Pengumuman</h2>
          <button
            onClick={() => setShowForm(true)}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 text-sm font-semibold"
          >
            + Buat Pengumuman Rayon
          </button>
        </div>

        <hr className="border-gray-400 mb-4" />

        {pengumumanList.map((item) => (
          <div key={item.id} className="mb-6">
            <h3 className="text-lg font-bold mb-1">{item.judul}</h3>
            <div className="flex items-center gap-4 mb-2 flex-wrap">
              <span
                className={`text-xs font-semibold px-2 py-0.5 border ${
                  item.tipe === 'Global'
                    ? 'bg-gray-100 border-gray-400 text-gray-700'
                    : 'bg-blue-100 border-blue-400 text-blue-700'
                }`}
              >
                {item.tipe}
              </span>
              <span className="text-sm text-gray-600">Tanggal &amp; Jam Publish: {item.tanggal}</span>
              <span className="text-sm font-semibold ml-2">
                Pembuat : <span className="font-normal">{item.pembuat}</span>
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-3">{item.ringkasan}</p>
            <div className="flex gap-2">
              {item.isOwn && (
                <>
                  <button
                    onClick={() => { setEditId(item.id); setShowForm(true); }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 text-sm font-semibold"
                  >
                    Edit
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 text-sm font-semibold">
                    Hapus
                  </button>
                </>
              )}
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-1 text-sm font-semibold">
                Detail
              </button>
            </div>
            <hr className="border-gray-300 mt-4" />
          </div>
        ))}
      </div>

      {/* Form Buat Pengumuman Rayon */}
      {showForm && (
        <div className="bg-gray-200 p-6 mb-8">
          <h3 className="text-lg font-bold mb-4">
            {editId ? 'Edit Pengumuman Rayon' : 'Form Buat Pengumuman  Rayon'}
          </h3>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Judul Pengumuman</label>
            <input
              type="text"
              name="judul"
              value={formData.judul}
              onChange={handleFormChange}
              className="w-full border border-gray-400 bg-white px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Cakupan</label>
            <input
              type="text"
              name="cakupan"
              value={formData.cakupan}
              onChange={handleFormChange}
              className="w-full border border-gray-400 bg-white px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Isi Pengumuman</label>
            <textarea
              name="isi"
              value={formData.isi}
              onChange={handleFormChange}
              rows={5}
              className="w-full border border-gray-400 bg-white px-3 py-2 text-sm focus:outline-none resize-y"
            />
          </div>

          <div className="flex items-center gap-2 mb-4">
            <input
              type="checkbox"
              id="kirimNotifikasi"
              name="kirimNotifikasi"
              checked={formData.kirimNotifikasi}
              onChange={handleFormChange}
              className="w-4 h-4"
            />
            <label htmlFor="kirimNotifikasi" className="text-sm">
              Kirim notifikasi ke Jemaat
            </label>
          </div>

          <div className="flex gap-2 mb-3">
            <button className="bg-white border border-gray-400 hover:bg-gray-100 text-black px-4 py-1 text-sm font-semibold">
              Publish
            </button>
            <button className="bg-white border border-gray-400 hover:bg-gray-100 text-black px-4 py-1 text-sm font-semibold">
              Simpan Draft
            </button>
            <button
              onClick={handleBatalForm}
              className="bg-white border border-gray-400 hover:bg-gray-100 text-black px-4 py-1 text-sm font-semibold"
            >
              Batal
            </button>
          </div>

          <p className="text-xs text-gray-600 mb-1">Tanggal dan jam publish tercatat otomatis</p>
          <p className="text-xs text-gray-600">Semua aktivitas publish akan dicatat dalam  log silstem</p>
        </div>
      )}

      {/* Riwayat Aktivitas Pengumuman */}
      <div>
        <h2 className="text-xl font-bold mb-4">Riwayat Aktivitas Pengumuman</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 border border-gray-300">
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Judul</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Pembuat</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Cakupan</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Status</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Tanggal &amp; Jam</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {riwayatList.map((item) => (
                <tr key={item.id} className="border border-gray-300">
                  <td className="border border-gray-300 px-3 py-2">{item.judul}</td>
                  <td className="border border-gray-300 px-3 py-2">{item.pembuat}</td>
                  <td className="border border-gray-300 px-3 py-2">{item.cakupan}</td>
                  <td className="border border-gray-300 px-3 py-2">{item.status}</td>
                  <td className="border border-gray-300 px-3 py-2">{item.tanggal}</td>
                  <td className="border border-gray-300 px-3 py-2">
                    <span className="text-blue-700 cursor-pointer hover:underline">Edit</span>
                    {' | '}
                    <span className="text-red-600 cursor-pointer hover:underline">Hapus</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default PengumumanGereja;