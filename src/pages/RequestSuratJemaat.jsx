// RequestSuratJemaat.jsx
import { useState } from "react";

const suratTypes = [
  { id: "baptis", label: "Surat Keterangan Baptis" },
  { id: "nikah", label: "Surat Nikah" },
  { id: "pindah", label: "Surat Pindah Jemaat" },
  { id: "lainnya", label: "Surat Administrasi Lainnya" },
];

export default function RequestSuratJemaat() {
  const today = new Date().toLocaleDateString("id-ID", {
    day: "2-digit", month: "long", year: "numeric",
  });

  const [selectedSurat, setSelectedSurat] = useState("baptis");
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    namaLengkap: "", nik: "", tempatTanggalLahir: "",
    alamat: "", nomorTelepon: "", keperluan: "",
    uploadDokumen: null, keteranganTambahan: "",
  });

  const selectedLabel = suratTypes.find((s) => s.id === selectedSurat)?.label || "";

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "uploadDokumen") {
      setFormData((prev) => ({ ...prev, uploadDokumen: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleReset = () => {
    setFormData({ namaLengkap: "", nik: "", tempatTanggalLahir: "", alamat: "", nomorTelepon: "", keperluan: "", uploadDokumen: null, keteranganTambahan: "" });
    setShowPreview(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 px-4 py-2 flex items-center gap-6 text-sm">
        <div className="flex items-center gap-1 font-bold text-blue-700 text-xs">
          <span>⛪</span><span>Gereja Pentakosta di Indonesia</span>
        </div>
        {["Renungan Harian", "Manajemen Ibadah Rayon", "Request Surat", "Pengumuman"].map((item) => (
          <a key={item} href="#" className={`text-xs ${item === "Request Surat" ? "font-bold text-gray-900 border-b-2 border-blue-600 pb-1" : "text-gray-500 hover:text-gray-800"}`}>{item}</a>
        ))}
        <div className="ml-auto flex items-center gap-3">
          <span className="text-gray-500 text-xs">🔔</span>
          <span className="text-gray-600 text-xs">Nama User</span>
          <button className="bg-red-500 text-white text-xs px-3 py-1 rounded">Logout</button>
        </div>
      </nav>

      {/* Main */}
      <main className="flex-1 w-11/12 md:w-4/5 mx-auto py-8">
        <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: "Courier New, monospace" }}>Layanan Surat Jemaat</h1>
        <p className="text-gray-500 text-sm mb-6">Pengajuan dan Pembuatan Surat Administrasi Gereja Secara Online</p>
        <hr className="mb-6" />

        {/* Pilih Jenis Surat */}
        <div className="mb-6">
          <p className="font-semibold mb-3">Pilih Jenis Surat</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {suratTypes.map((surat) => (
              <div key={surat.id} onClick={() => setSelectedSurat(surat.id)}
                className={`border-2 rounded cursor-pointer p-2 flex flex-col items-center gap-2 ${selectedSurat === surat.id ? "border-blue-600 bg-blue-50" : "border-gray-300 bg-gray-100"}`}>
                <div className="w-10 h-10 bg-gray-800 rounded" />
                <span className="text-xs text-center text-gray-700">{surat.label}</span>
                <button className={`text-xs px-3 py-1 rounded text-white ${selectedSurat === surat.id ? "bg-blue-600" : "bg-gray-400"}`}>Isi Form</button>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {[
            { label: "Nama Lengkap", name: "namaLengkap", placeholder: "Isi di sini" },
            { label: "NIK / Nomor Identitas", name: "nik", placeholder: "isi di sini" },
            { label: "Tempat & Tanggal Lahir", name: "tempatTanggalLahir", placeholder: "Isi di sini" },
            { label: "Alamat", name: "alamat", placeholder: "Isi di sini" },
            { label: "Nomor Telepon", name: "nomorTelepon", placeholder: "isi di sini" },
          ].map(({ label, name, placeholder }) => (
            <div key={name}>
              <label className="block text-sm font-semibold mb-1">{label}</label>
              <input type="text" name={name} value={formData[name]} onChange={handleChange} placeholder={placeholder}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
          ))}

          <div>
            <label className="block text-sm font-semibold mb-1">Jenis Surat</label>
            <input type="text" value={selectedLabel} readOnly className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-50" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Keperluan Surat</label>
            <input type="text" name="keperluan" value={formData.keperluan} onChange={handleChange} placeholder="Isi disini"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Tanggal Pengajuan</label>
            <input type="text" value={today} readOnly className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-50 text-gray-500" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Upload Dokumen Pendukung</label>
            <input type="file" name="uploadDokumen" onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Keterangan Tambahan</label>
            <textarea name="keteranganTambahan" value={formData.keteranganTambahan} onChange={handleChange}
              placeholder="Tambahkan Keterangan Tambahan" rows={4}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6 flex-wrap">
          <button onClick={() => setShowPreview(true)} className="bg-gray-800 text-white px-4 py-2 text-sm rounded hover:bg-gray-700">Preview PDF</button>
          <button onClick={() => setShowPreview(true)} className="bg-gray-800 text-white px-4 py-2 text-sm rounded hover:bg-gray-700">Generate PDF</button>
          <button onClick={handleReset} className="border border-gray-400 text-gray-700 px-4 py-2 text-sm rounded hover:bg-gray-100">Reset Form</button>
        </div>
        <p className="text-xs text-gray-500 mt-2">Surat akan otomatis terformat dalam bentuk PDF resmi gereja setelah form selesai diisi.</p>

        {/* PDF Preview */}
        {showPreview && (
          <div className="mt-8 border border-gray-300 rounded bg-gray-100 p-8">
            <div className="bg-white min-h-96 p-8 shadow-sm max-w-2xl mx-auto">
              <div className="flex flex-col items-center mb-6 border-b-2 border-gray-800 pb-4">
                <div className="w-16 h-16 bg-gray-900 rounded mb-2" />
                <p className="font-bold text-lg">Kop Surat Gereja</p>
                <p className="text-sm text-gray-600">Alamat Gereja</p>
              </div>
              <p className="text-sm mb-4"><span className="font-semibold">Nomor Surat :</span> <span className="underline text-blue-600">Otomatis</span></p>
              <div className="text-sm mb-8 leading-relaxed">
                {formData.namaLengkap ? (
                  <p>Yang bertanda tangan di bawah ini menerangkan bahwa <strong>{formData.namaLengkap}</strong>
                    {formData.nik ? `, NIK: ${formData.nik}` : ""}
                    {formData.tempatTanggalLahir ? `, lahir di ${formData.tempatTanggalLahir}` : ""}
                    {formData.alamat ? `, beralamat di ${formData.alamat}` : ""}, telah mengajukan <strong>{selectedLabel}</strong>
                    {formData.keperluan ? ` untuk keperluan ${formData.keperluan}` : ""}.
                    {formData.keteranganTambahan ? ` ${formData.keteranganTambahan}` : ""}
                  </p>
                ) : (
                  <p className="text-gray-500">Isi surat akan ditampilkan disini. Ini adalah placeholder untuk teks surat yang akan di generate secara otomatis berdasarkan data form</p>
                )}
              </div>
              <p className="text-sm mb-16">Hormat Kami ,</p>
              <div className="flex justify-end">
                <div className="text-center">
                  <div className="border-b border-gray-800 w-32 mb-1" />
                  <p className="text-sm font-semibold">Nama Pendeta</p>
                  <p className="text-sm text-gray-600">Jabatan</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button className="bg-gray-900 text-white px-8 py-3 rounded font-semibold hover:bg-gray-700">Download PDF</button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
<footer className="bg-white border-t border-gray-300 mt-8">
  <div className="w-11/12 md:w-4/5 mx-auto py-6 flex flex-col md:flex-row justify-between gap-4 text-xs">
    <div>
      <p className="font-bold mb-1">Sistem Informasi GPdi Jemaat Sibulele</p>
      <p className="text-gray-700">Versi Sistem: versi</p>
      <p className="text-gray-700">Tahun: tahun</p>
    </div>
    <div className="text-right text-gray-700">
      <p>Panduan Penggunaan</p>
      <p>Hubungi Administrator</p>
      <p>Kebijakan Privasi Internal</p>
    </div>
  </div>
  <div className="border-t border-gray-300 text-center py-3 text-xs text-gray-600">
  </div>
</footer>
    </div>
  );
}