import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full mt-12">
      <div className="bg-[#e5e5e5] py-8 flex flex-col items-center justify-center text-center px-4">
        <h3 className="font-bold text-lg mb-2">GPdI Sibulele</h3>
        <p className="font-semibold mb-4">Jalan Contoh No.123, Kota A, Provinsi A, 12345</p>
        
        {/* Placeholder Social Media Icons */}
        <div className="flex space-x-4 mb-4">
          <div className="w-8 h-8 bg-blue-800 text-white flex items-center justify-center font-bold">f</div>
          <div className="w-8 h-8 bg-pink-600 text-white flex items-center justify-center font-bold rounded-md">ig</div>
          <div className="w-10 h-8 bg-red-600 text-white flex items-center justify-center font-bold rounded-md">yt</div>
        </div>
        
        <p className="font-bold">Copyright © 2023</p>
      </div>
      <div className="bg-white py-4 text-center border-t border-gray-200">
        <p className="text-sm">© 2026 GPdI Jemaat Sibulele. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;