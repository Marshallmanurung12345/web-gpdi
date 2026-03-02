import React, { useMemo, useState } from "react";

const PengumumanGereja = () => {
  // Dummy data (nanti bisa diganti dari API)
  const globalPengumuman = useMemo(
    () => [
      {
        id: "g1",
        scope: "Global",
        title: "Judul Pengumuman Global Penting",
        datetime: "2023-10-27 10:00",
        author: "Pendeta",
        summary:
          "Ringkasan isi pengumuman ini, menjelaskan secara singkat poin-poin penting yang perlu diketahui jemaat. Ini adalah contoh ringkasan yang bisa lebih panjang.",
        important: true,
      },
      {
        id: "g2",
        scope: "Global",
        title: "Pengumuman Global : Ibadah Doa Bersama",
        datetime: "2023-10-27 10:00",
        author: "Pendeta",
        summary:
          "Ringkasan isi pengumuman ini, menjelaskan secara singkat poin-poin penting yang perlu diketahui jemaat.",
        important: false,
      },
    ],
    []
  );

  const rayonPengumuman = useMemo(
    () => [
      {
        id: "r1",
        scope: "Rayon",
        title: "Pengumuman Rayon Saya : Rapat rutin",
        datetime: "2023-10-27 10:00",
        author: "Ketua Rayon",
        summary:
          "Ringkasan isi pengumuman ini, menjelaskan secara singkat poin-poin penting yang perlu diketahui jemaat. Ini adalah contoh ringkasan yang bisa lebih panjang.",
        mine: true,
      },
    ],
    []
  );

  const aktivitas = useMemo(
    () => [
      {
        id: "a1",
        title: "Judul Pengumuman Penting 1",
        author: "Pendeta",
        scope: "Global",
        status: "Publish",
        datetime: "2024-01-01 10:00",
      },
      {
        id: "a2",
        title: "Judul Pengumuman Penting 2",
        author: "Ketua Rayon",
        scope: "Rayon",
        status: "Publish",
        datetime: "2024-01-01 10:00",
      },
      {
        id: "a3",
        title: "Draft Pengumuman Baru",
        author: "Pendeta",
        scope: "Global",
        status: "Draft",
        datetime: "2024-01-01 10:00",
      },
    ],
    []
  );

  // Form state
  const [judul, setJudul] = useState("");
  const [cakupan, setCakupan] = useState("Rayon saya");
  const [isi, setIsi] = useState("");
  const [kirimNotif, setKirimNotif] = useState(false);

  const Badge = ({ text }) => (
    <span className="inline-flex items-center px-2 py-0.5 text-xs rounded bg-gray-200 text-gray-700">
      {text}
    </span>
  );

  const PrimaryButton = ({ children, className = "", ...props }) => (
    <button
      {...props}
      className={`px-4 py-2 rounded border border-blue-800 bg-blue-800 text-white text-sm hover:bg-blue-900 active:scale-[0.99] transition ${className}`}
    >
      {children}
    </button>
  );

  const LightButton = ({ children, className = "", ...props }) => (
    <button
      {...props}
      className={`px-4 py-2 rounded border border-gray-400 bg-white text-gray-800 text-sm hover:bg-gray-50 active:scale-[0.99] transition ${className}`}
    >
      {children}
    </button>
  );

  const WarnButton = ({ children, className = "", ...props }) => (
    <button
      {...props}
      className={`px-4 py-2 rounded border border-yellow-700 bg-yellow-500 text-black text-sm hover:bg-yellow-600 active:scale-[0.99] transition ${className}`}
    >
      {children}
    </button>
  );

  const DangerButton = ({ children, className = "", ...props }) => (
    <button
      {...props}
      className={`px-4 py-2 rounded border border-red-800 bg-red-700 text-white text-sm hover:bg-red-800 active:scale-[0.99] transition ${className}`}
    >
      {children}
    </button>
  );

  const AnnouncementCard = ({
    scope,
    title,
    datetime,
    author,
    summary,
    showMineActions = false,
    showImportantLabel = false,
  }) => {
    return (
      <div className="border-b border-gray-300 py-6">
        <h3 className="text-lg md:text-xl font-bold text-black">{title}</h3>

        <div className="mt-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="flex items-center gap-3 flex-wrap">
            <Badge text={scope} />
            {showImportantLabel && (
              <span className="text-sm text-gray-700">Penting</span>
            )}
            <span className="text-sm text-gray-700">
              <span className="font-semibold">Tanggal &amp; Jam Publish:</span>{" "}
              {datetime}
            </span>
          </div>

          <div className="text-sm text-gray-800">
            <span className="font-semibold">Pembuat :</span> {author}
          </div>
        </div>

        <p className="mt-3 text-sm md:text-base text-gray-800">{summary}</p>

        <div className="mt-4 flex items-center gap-3">
          {showMineActions ? (
            <>
              <WarnButton type="button">Edit</WarnButton>
              <DangerButton type="button">Hapus</DangerButton>
              <PrimaryButton type="button">Detail</PrimaryButton>
            </>
          ) : (
            <PrimaryButton type="button">Detail</PrimaryButton>
          )}
        </div>
      </div>
    );
  };

  return (
    <main className="mx-auto w-11/12 md:w-4/5 mt-10 mb-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Pengumuman Gereja
        </h1>
        <p className="mt-2 text-gray-700">Informasi Resmi untuk Jemaat</p>
      </div>

      {/* Placeholder Ayat */}
      <div className="mt-8 bg-gray-300 h-48 md:h-56 flex items-center justify-center rounded-sm">
        <span className="text-gray-700">Placeholder (Ayat )</span>
      </div>

      {/* Daftar Pengumuman + tombol */}
      <div className="mt-8 flex items-center justify-between">
        <h2 className="text-lg md:text-xl font-bold text-black">
          Daftar Pengumuman
        </h2>
        <button
          type="button"
          className="px-4 py-2 rounded border border-gray-400 bg-gray-100 text-sm hover:bg-gray-200 transition"
        >
          + Buat Pengumuman Rayon
        </button>
      </div>

      {/* List pengumuman */}
      <div className="mt-4 border-t border-gray-300">
        {/* Global penting */}
        {globalPengumuman
          .filter((x) => x.important)
          .map((item) => (
            <AnnouncementCard
              key={item.id}
              scope="Global"
              title={item.title}
              datetime={item.datetime}
              author={item.author}
              summary={item.summary}
              showImportantLabel
            />
          ))}

        {/* Rayon saya */}
        {rayonPengumuman.map((item) => (
          <AnnouncementCard
            key={item.id}
            scope="Rayon"
            title={item.title}
            datetime={item.datetime}
            author={item.author}
            summary={item.summary}
            showMineActions={item.mine}
          />
        ))}

        {/* Global lainnya */}
        {globalPengumuman
          .filter((x) => !x.important)
          .map((item) => (
            <AnnouncementCard
              key={item.id}
              scope="Global"
              title={item.title}
              datetime={item.datetime}
              author={item.author}
              summary={item.summary}
            />
          ))}
      </div>

      {/* Form Buat Pengumuman Rayon */}
      <section className="mt-10 bg-gray-300 p-6 rounded-sm">
        <h3 className="font-bold text-lg text-black">
          Form Buat Pengumuman Rayon
        </h3>

        <div className="mt-5 space-y-4">
          <div>
            <label className="block text-sm text-gray-900 mb-1">
              Judul Pengumuman
            </label>
            <input
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              type="text"
              className="w-full border border-gray-400 bg-white px-3 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-900 mb-1">Cakupan</label>
            <input
              value={cakupan}
              onChange={(e) => setCakupan(e.target.value)}
              type="text"
              className="w-full border border-gray-400 bg-white px-3 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-900 mb-1">
              Isi Pengumuman
            </label>
            <textarea
              value={isi}
              onChange={(e) => setIsi(e.target.value)}
              rows={6}
              className="w-full border border-gray-400 bg-white px-3 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-gray-900">
            <input
              type="checkbox"
              checked={kirimNotif}
              onChange={(e) => setKirimNotif(e.target.checked)}
              className="h-4 w-4"
            />
            Kirim notifikasi ke Jemaat
          </label>

          <div className="flex items-center gap-3">
            <LightButton type="button">Publish</LightButton>
            <LightButton type="button">Simpan Draft</LightButton>
            <LightButton type="button">Batal</LightButton>
          </div>

          <div className="pt-2 text-xs text-gray-700 space-y-1">
            <p>Tanggal dan jam publish tercatat otomatis</p>
            <p>Semua aktivitas publish akan dicatat dalam log sistem</p>
          </div>
        </div>
      </section>

      {/* Riwayat Aktivitas */}
      <section className="mt-10">
        <h3 className="text-lg font-bold text-black">
          Riwayat Aktivitas Pengumuman
        </h3>

        <div className="mt-4 overflow-x-auto border border-gray-300 rounded-sm">
          <table className="min-w-[900px] w-full text-sm">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="border-b border-gray-300 px-4 py-3">Judul</th>
                <th className="border-b border-gray-300 px-4 py-3">Pembuat</th>
                <th className="border-b border-gray-300 px-4 py-3">Cakupan</th>
                <th className="border-b border-gray-300 px-4 py-3">Status</th>
                <th className="border-b border-gray-300 px-4 py-3">
                  Tanggal &amp; Jam
                </th>
                <th className="border-b border-gray-300 px-4 py-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {aktivitas.map((row) => (
                <tr key={row.id} className="bg-white">
                  <td className="border-b border-gray-200 px-4 py-3">
                    {row.title}
                  </td>
                  <td className="border-b border-gray-200 px-4 py-3">
                    {row.author}
                  </td>
                  <td className="border-b border-gray-200 px-4 py-3">
                    {row.scope}
                  </td>
                  <td className="border-b border-gray-200 px-4 py-3">
                    {row.status}
                  </td>
                  <td className="border-b border-gray-200 px-4 py-3">
                    {row.datetime}
                  </td>
                  <td className="border-b border-gray-200 px-4 py-3">
                    <button className="text-blue-800 hover:underline">
                      Edit
                    </button>
                    <span className="mx-2 text-gray-400">|</span>
                    <button className="text-red-700 hover:underline">
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default PengumumanGereja;