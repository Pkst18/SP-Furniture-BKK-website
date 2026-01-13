import React, { useState } from 'react';
import Navbar from './Navbar';

// ไอคอนที่ใช้ใน App
const XIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 inline-block mr-2 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
);
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#D4AF37] flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
);

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  // ฟังก์ชันสำหรับเลื่อนหน้าจอ (Smooth Scroll)
  const scrollToPortfolio = () => {
    const section = document.getElementById('portfolio');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ข้อมูลรูปภาพ
  const portfolioItems = [
    { id: 1, src: "/images/SofaLuxRed.jpg", title: "โซฟาหลุยส์แดง", description: "งานหุ้มเบาะใหม่สไตล์หรูหรา" },
    { id: 2, src: "/images/SofaBrown.jpg", title: "โซฟาหนังสีน้ำตาล", description: "ซ่อมรอยขาดและทำสีใหม่" },
    { id: 3, src: "/images/ChairVintage.jpg", title: "เก้าอี้วินเทจ", description: "บุผ้าลายดอกไม้สไตล์ย้อนยุค" },
    { id: 4, src: "/images/SofaNavy.jpg", title: "โซฟากำมะหยี่น้ำเงิน", description: "เปลี่ยนฟองน้ำและหุ้มใหม่" },
    { id: 5, src: "/images/ChairBoxRed.jpg", title: "เก้าอี้สตูลแดง", description: "งานสั่งทำตามขนาด" },
    { id: 6, src: "/images/SofaCream.jpg", title: "โซฟาเบดสีครีม", description: "ซ่อมโครงสร้างที่หัก" },
    { id: 7, src: "/images/ChairGreen.jpg", title: "เก้าอี้พักผ่อนสีเขียว", description: "หุ้มหนัง PU เกรดพรีเมียม" },
    { id: 8, src: "/images/SofaFabricBlueWhite.jpg", title: "โซฟาผ้าลายทาง", description: "ซักทำความสะอาดและซ่อมตะเข็บ" },
    { id: 9, src: "/images/ChairRed.jpg", title: "เก้าอี้ทำงานสีแดง", description: "เปลี่ยนโช๊คและล้อ" },
    { id: 10, src: "/images/SofaGray.jpg", title: "โซฟาตัวแอลสีเทา", description: "เสริมฟองน้ำอัดแน่นพิเศษ" },
    { id: 11, src: "/images/ChairVintage2.jpg", title: "เก้าอี้ไม้แกะสลัก", description: "ขัดทำสีไม้และบุเบาะใหม่" },
    { id: 12, src: "/images/SofaGray2.jpg", title: "โซฟาโมเดิร์นสีเทาเข้ม", description: "หุ้มผ้า Pasaya กันน้ำ" },
    { id: 13, src: "/images/ChairBoxWhite.jpg", title: "สตูลขาว", description: "งานดีไซน์มินิมอล" },
    { id: 14, src: "/images/SofaRedNormal.jpg", title: "โซฟารับแขกสีแดง", description: "ซ่อมสปริงที่ยุบตัว" },
    { id: 15, src: "/images/SofaGray3.jpg", title: "โซฟา 3 ที่นั่ง", description: "งานหุ้มหนังแท้อิตาลี" },
    { id: 16, src: "/images/ChairRectangleRed.jpg", title: "เบาะนั่งสี่เหลี่ยม", description: "บุผนังตกแต่งร้านอาหาร" },
    { id: 17, src: "/images/SofaWhite.jpg", title: "โซฟาหนังแท้สีขาว", description: "ฟื้นฟูสภาพหนังเก่า" },
    { id: 18, src: "/images/SofaGrayT.jpg", title: "โซฟาเข้ามุม", description: "ปรับทรงให้เข้ากับพื้นที่" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans relative">
      
      {/* 1. Header Section */}
      <header className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
            <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md flex-shrink-0">
              <img className="w-full h-full object-cover rounded-full" src="/public/images/logo.jpg" alt="" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl lg:text-4xl font-bold text-[#D4AF37] mb-2 tracking-wide">
                SP Furniture BKK
              </h1>
              <p className="text-[#B8860B] text-lg font-medium">
                รับสั่งทำและซ่อมเฟอร์นิเจอร์ทุกชนิด โซฟา เก้าอี้ หัวเตียง
              </p>
              <p className="text-gray-400 text-sm mt-1">
                ด้วยวัสดุคุณภาพ พร้อมบริการรับ-ส่ง และประกันงาน
              </p>
            </div>
            
            <div className="hidden md:block mt-2 text-right">
                <a href="tel:0875985475" className="bg-[#D4AF37] hover:bg-[#B8860B] text-white px-8 py-3 rounded-full transition-all text-sm font-bold shadow-lg flex items-center gap-2 mb-2 justify-center">
                   <span>📞</span> โทร: 087-598-5475 (ช่างหน่อย)
                </a>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Navbar Component */}
      <Navbar />

      {/* 3. Main Content */}
      <main>
        
        {/* Hero Section */}
        <section id="home" className="relative h-[500px] bg-gray-800 flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <span className="text-[#D4AF37] font-bold tracking-wider uppercase text-sm mb-4 block">
              SP Furniture BKK
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              รับสั่งทำและซ่อม<br/>
              <span className="text-[#D4AF37]">เฟอร์นิเจอร์ทุกชนิด</span>
            </h2>
            <p className="text-lg md:text-2xl text-gray-200 mb-8 font-light">
              โซฟา เก้าอี้ หัวเตียง ด้วยวัสดุคุณภาพ<br className="hidden md:block"/>
              พร้อมบริการรับ-ส่ง และประกันงาน
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              {/* ปุ่มดูผลงานของเรา: กดแล้วเลื่อนไป #portfolio */}
              <button 
                onClick={scrollToPortfolio}
                className="bg-[#D4AF37] text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-[#D4AF37] transition-colors border-2 border-[#D4AF37] cursor-pointer"
              >
                ดูผลงานของเรา
              </button>
              <a href="tel:0875985475" className="bg-transparent text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-black transition-colors border-2 border-white">
                สอบถามราคา
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-10 border-b border-gray-100">
           <div className="max-w-[1200px] mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
                 {[
                   "บริการสั่งทำเฟอร์นิเจอร์",
                   "บริการซ่อมแซมเฟอร์นิเจอร์",
                   "วัสดุคุณภาพสูง",
                   "บริการรับ-ส่งเฟอร์นิเจอร์",
                   "รับประกันงานซ่อม"
                 ].map((feature, idx) => (
                   <div key={idx} className="flex flex-col items-center justify-center p-4 bg-[#fcfbf8] rounded-lg border border-[#f0e6d2] shadow-sm hover:shadow-md transition-shadow">
                      <div className="mb-3 bg-white p-2 rounded-full shadow-sm">
                        <CheckIcon />
                      </div>
                      <span className="text-[#B8860B] font-medium text-sm md:text-base">{feature}</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#B8860B]">บริการของเรา</h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['ซ่อมโซฟา', 'หุ้มเบาะใหม่', 'ซ่อมเก้าอี้สำนักงาน', 'รับทำตามแบบ'].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center group">
                <div className="w-16 h-16 bg-[#fcfbf8] rounded-full mx-auto mb-4 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
                  🛠️
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service}</h3>
                <p className="text-gray-500 text-sm">บริการคุณภาพ ใช้วัสดุเกรดพรีเมียม รับประกันผลงาน</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 bg-[#fcfbf8]">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#B8860B]">ผลงานล่าสุด</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
              <p className="text-gray-500 mt-2 text-sm">
                เลื่อนลงเพื่อดูผลงานเพิ่มเติม ({portfolioItems.length} รายการ)
              </p>
            </div>
            
            <div className="h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {portfolioItems.map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => setSelectedImage(item)} 
                    className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative group cursor-pointer border border-gray-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                      <span className="text-white font-bold text-lg mb-2">{item.title}</span>
                      <span className="text-xs text-white border border-white px-3 py-1 rounded-full hover:bg-white hover:text-[#D4AF37] transition-colors">
                        ดูรูปขยาย
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#B8860B]">พิกัดร้าน / ที่อยู่</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
              <p className="text-gray-500 mt-2">แวะมาปรึกษา หรือส่งเฟอร์นิเจอร์มาประเมินราคาได้ที่หน้าร้าน</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              <div className="bg-[#fcfbf8] p-8 rounded-lg border border-gray-100 shadow-sm h-full">
                <h3 className="text-2xl font-bold text-[#B8860B] mb-6 flex items-center">
                   <MapPinIcon /> SP Furniture BKK
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p className="leading-relaxed">
                    <strong className="text-gray-800">ที่อยู่:</strong><br/>
                    701 ถ.อ่อนนุช ปากซอยอ่อนนุช 73/3<br/>
                    เขตประเวศ เเขวงประเวศ<br/>
                    กรุงเทพมหานคร 10250
                  </p>
                  <p>
                    <strong className="text-gray-800">เวลาทำการ:</strong><br/>
                    จันทร์ - เสาร์: 10:30 - 17:30 น.<br/>
                    <span className="text-red-500 text-sm">(หยุดวันอาทิตย์)</span>
                  </p>
                  <hr className="border-gray-200 my-4"/>
                  <div>
                    <p className="mb-2"><strong className="text-gray-800">ติดต่อสอบถาม:</strong></p>
                    <ul className="space-y-2">
                      <li>
                        <a href="tel:0875985475" className="flex items-center text-[#B8860B] hover:text-[#D4AF37] transition-colors">
                          <span className="w-6 h-6 bg-[#D4AF37] text-white rounded-full flex items-center justify-center mr-2 text-xs">📞</span>
                          <span className="font-bold">087-598-5475</span> <span className="text-gray-500 ml-2">(ช่างหน่อย)</span>
                        </a>
                      </li>
                      <li>
                        <a href="tel:0807520242" className="flex items-center text-[#B8860B] hover:text-[#D4AF37] transition-colors">
                          <span className="w-6 h-6 bg-[#D4AF37] text-white rounded-full flex items-center justify-center mr-2 text-xs">📞</span>
                          <span className="font-bold">080-752-0242</span> <span className="text-gray-500 ml-2">(พี่โสภา)</span>
                        </a>
                      </li>
                    </ul>
                    <p className="mt-4"><strong className="text-gray-800">Line ID:</strong> <span className="text-green-600 font-bold">@spfurniture</span></p>
                  </div>
                  
                  <a 
                    href="https://goo.gl/maps/placeholder" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block mt-6 bg-[#D4AF37] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#B8860B] transition-colors"
                  >
                    📍 นำทางไปที่ร้าน
                  </a>
                </div>
              </div>

              <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md border border-gray-200 relative group">
                <iframe 
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.907998967379!2d100.65416431483013!3d13.72390099036505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQzJzI2LjAiTiAxMDDCsDM5JzIzLjAiRQ!5e0!3m2!1sen!2sth!4v1626162616261!5m2!1sen!2sth" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-500" 
                ></iframe>
                <div className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded text-xs text-gray-500 shadow-sm pointer-events-none group-hover:opacity-0 transition-opacity">
                  แผนที่ร้าน (Google Maps)
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Modal / Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full h-full flex items-center justify-center p-2">
               <button 
                 onClick={() => setSelectedImage(null)}
                 className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-[#D4AF37] transition-colors z-10"
               >
                 <XIcon className="w-8 h-8"/>
               </button>
               <img 
                 src={selectedImage.src} 
                 alt={selectedImage.title} 
                 className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                 onClick={(e) => e.stopPropagation()}
               />
               <div className="absolute bottom-4 left-0 w-full text-center text-white p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg pointer-events-none">
                  <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                  <p className="text-sm opacity-80">{selectedImage.description}</p>
               </div>
            </div>
          </div>
        )}

      </main>

      <footer className="bg-[#B8860B] text-white py-8 text-center">
        <p>© 2026 SP Furniture BKK. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;