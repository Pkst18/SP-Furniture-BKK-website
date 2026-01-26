import React, { useState } from 'react';

// --- Icons ---
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
);
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);
const ChevronDown = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
);
const ChevronRight = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('หน้าแรก');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [activeServiceCategory, setActiveServiceCategory] = useState(0); // สำหรับ Mega Menu

  // ข้อมูลเมนู "บริการของเรา" (ตามรูปภาพที่คุณส่งมา)
  const serviceMenuData = [
    {
      category: "รับซ่อมโซฟา",
      items: ["ซ่อมโซฟาถึงบ้าน", "รับซ่อมโซฟาผ้า", "รับซ่อมโซฟาหนังแท้", "รับซ่อมโซฟาหนังเทียม", "รับซ่อมโซฟาหลุยส์", "รับซ่อมโซฟาเฉพาะจุด", "รับซ่อมโซฟาเดี่ยว", "รับซ่อมโซฟาเข้ามุม", "รับซ่อมโซฟารีไลเนอร์"]
    },
    {
      category: "รับซ่อมเก้าอี้",
      items: ["รับซ่อมเก้าอี้โซฟา", "รับซ่อมเก้าอี้นวด", "รับซ่อมเก้าอี้เกมมิ่ง", "รับซ่อมเก้าอี้หลุยส์", "รับซ่อมเก้าอี้กินข้าว"]
    },
    {
      category: "รับหุ้มเบาะ",
      items: ["หุ้มเบาะโซฟา", "หุ้มเบาะเก้าอี้", "หุ้มเบาะหัวเตียง", "หุ้มเบาะผนัง"]
    },
    {
      category: "รับทำเบาะ",
      items: ["ทำเบาะตามขนาด", "เบาะรองนั่ง", "เบาะโซฟาไม้"]
    },
    {
      category: "รับเปลี่ยนหนัง",
      items: ["เปลี่ยนหนังแท้","เปลี่ยนหนังเทียม", "เปลี่ยนหนัง PU/JU/PVC", "เปลี่ยนผ้าหลุย", "เปลี่ยนผ้า ", "ผ้าหุ้มเกรดฟรีเมียม"]
    }
  ];

  const menuItems = [
    { name: 'หน้าแรก', href: '#home' },
    { name: 'บริการของเรา', href: '#services', hasDropdown: true },
    // { name: 'แคทตาล็อก', href: '#catalog' },
    { name: 'ผลงานซ่อมโซฟา', href: '#portfolio' },
    { name: 'ติดต่อเรา', href: '#location' },
  ];

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
                    if(!item.hasDropdown) {
                        e.preventDefault();
                        setActiveLink(item.name);
                        const element = document.querySelector(item.href);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`px-3 xl:px-4 h-full flex items-center font-medium transition-colors duration-200 text-sm xl:text-base whitespace-nowrap border-b-4 border-transparent cursor-pointer
                    ${activeLink === item.name 
                      ? 'text-white border-[#D4AF37]' 
                      : 'text-[#B8860B] hover:text-[#D4AF37] hover:border-[#D4AF37]'} 
                  `}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 w-3 h-3" />}
                </a>

                {/* --- Mega Dropdown for "บริการของเรา" --- */}
                {item.hasDropdown && (
                  <div className="hidden group-hover:flex absolute top-full left-0 bg-white shadow-xl border-t-4 border-[#D4AF37] animate-fade-in z-50 w-[600px] min-h-[300px] rounded-b-lg overflow-hidden">
                    
                    {/* ฝั่งซ้าย: หมวดหมู่ (Categories) */}
                    <div className="w-1/3 bg-[#333333] text-gray-300 py-2">
                        {serviceMenuData.map((service, index) => (
                            <div 
                                key={index}
                                onMouseEnter={() => setActiveServiceCategory(index)}
                                className={`px-4 py-3 cursor-pointer flex justify-between items-center transition-colors text-sm
                                    ${activeServiceCategory === index ? 'bg-[#D4AF37] text-white' : 'hover:bg-gray-700'}
                                `}
                            >
                                {service.category}
                                {activeServiceCategory === index && <ChevronRight className="w-3 h-3"/>}
                            </div>
                        ))}
                    </div>

                    {/* ฝั่งขวา: รายการย่อย (Sub Items) */}
                    <div className="w-2/3 bg-white p-4">
                        <h4 className="font-bold text-[#B8860B] mb-3 border-b pb-2 text-sm">
                            {serviceMenuData[activeServiceCategory].category}
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                            {serviceMenuData[activeServiceCategory].items.map((subItem, idx) => (
                                <a key={idx} href="#" className="text-sm text-gray-600 hover:text-[#D4AF37] hover:pl-1 transition-all flex items-center">
                                    <span className="w-1 h-1 bg-[#D4AF37] rounded-full mr-2"></span>
                                    {subItem}
                                </a>
                            ))}
                        </div>
                    </div>
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg max-h-[80vh] overflow-y-auto">
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
                        else setOpenMobileDropdown(openMobileDropdown === item.name ? null : item.name);
                        
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
                  
                  {/* Mobile Dropdown (Simplified) */}
                  {item.hasDropdown && openMobileDropdown === item.name && (
                    <div className="bg-[#fcfbf8] border-t border-gray-100">
                        {serviceMenuData.map((service, idx) => (
                            <div key={idx} className="px-6 py-2">
                                <p className="text-[#B8860B] font-bold text-sm mb-1">{service.category}</p>
                                <div className="pl-4 border-l-2 border-gray-200 space-y-1">
                                    {service.items.map((sub, sIdx) => (
                                        <a key={sIdx} href="#" className="block text-sm text-gray-500 hover:text-[#D4AF37] py-1">{sub}</a>
                                    ))}
                                </div>
                            </div>
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