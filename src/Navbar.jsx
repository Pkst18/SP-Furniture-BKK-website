import React, { useState } from 'react';

// --- ไอคอนที่ใช้เฉพาะใน Navbar ---
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
);
const XIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);
const ChevronDown = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
);

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('หน้าแรก');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const menuItems = [
    { name: 'หน้าแรก', href: '#home' },
    { name: 'บริการของเรา', href: '#services', hasDropdown: true },
    { name: 'แคทตาล็อก', href: '#catalog' },
    { name: 'ผลงานซ่อมโซฟา', href: '#portfolio' },
    { name: 'พิกัดร้าน', href: '#location' },
    { name: 'เกี่ยวกับเรา', href: '#about' },
    { name: 'ติดต่อเรา', href: '#location' }, // <-- แก้ตรงนี้: ให้ชี้ไปที่ #location (ตรงเบอร์โทร)
  ];

  const dropdownItems = ['ซ่อมโซฟา', 'หุ้มเบาะ', 'ซ่อมเก้าอี้', 'รับทำตามแบบ'];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-sans">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-[60px]">
          
          {/* Logo Mobile */}
          <div className="lg:hidden font-bold text-[#B8860B] text-lg">
            SP Furniture
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex h-full space-x-1">
            {menuItems.map((item) => (
              <li 
                key={item.name} 
                className={`group relative h-full flex items-center px-1
                  ${activeLink === item.name ? 'bg-[#D4AF37] text-white' : ''} 
                `}
              >
                <a 
                  href={item.href}
                  onClick={(e) => {
                    // เพิ่มฟังก์ชันให้เลื่อนแบบ Smooth เมื่อกดเมนู
                    e.preventDefault();
                    setActiveLink(item.name);
                    const element = document.querySelector(item.href);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-3 xl:px-4 h-full flex items-center font-medium transition-colors duration-200 text-sm xl:text-base whitespace-nowrap border-b-4 border-transparent
                    ${activeLink === item.name 
                      ? 'text-white border-[#D4AF37]' 
                      : 'text-[#B8860B] hover:text-[#D4AF37] hover:border-[#D4AF37]'} 
                  `}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 w-3 h-3" />}
                </a>

                {/* Dropdown Desktop */}
                {item.hasDropdown && (
                  <div className="hidden group-hover:block absolute top-full left-0 bg-white w-56 shadow-xl border-t-4 border-[#D4AF37] animate-fade-in z-50">
                    {dropdownItems.map((subItem) => (
                       <a key={subItem} href="#" className="block px-4 py-3 text-[#B8860B] hover:bg-gray-50 hover:text-[#D4AF37] hover:pl-6 transition-all border-b border-gray-100 text-sm">
                         {subItem}
                       </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full text-[#D4AF37] cursor-pointer hover:bg-gray-50 transition-all">
              <SearchIcon />
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#B8860B] focus:outline-none p-1"
            >
              {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide Down */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <ul className="flex flex-col">
            {menuItems.map((item) => (
              <li key={item.name} className="border-b border-gray-50 last:border-none">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center pr-4">
                    <a 
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        if(!item.hasDropdown) setIsMobileMenuOpen(false);
                        setActiveLink(item.name);
                        const element = document.querySelector(item.href);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`flex-1 block px-6 py-3 font-medium ${activeLink === item.name ? 'text-[#D4AF37] bg-gray-50' : 'text-gray-600'}`}
                    >
                      {item.name}
                    </a>
                    {item.hasDropdown && (
                      <button 
                        onClick={() => setOpenMobileDropdown(openMobileDropdown === item.name ? null : item.name)}
                        className="p-3 text-[#B8860B]"
                      >
                        <ChevronDown className={`w-4 h-4 transform transition-transform ${openMobileDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {item.hasDropdown && openMobileDropdown === item.name && (
                    <div className="bg-[#fcfbf8] pl-10 pr-4 py-2 space-y-2 text-sm border-t border-gray-100">
                      {dropdownItems.map((subItem) => (
                         <a key={subItem} href="#" className="block py-2 text-gray-500 hover:text-[#D4AF37]">{subItem}</a>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;