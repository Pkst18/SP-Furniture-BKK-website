import React, { useState } from 'react';
import Navbar from './Navbar';

// --- Icons Components ---
const XIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 inline-block mr-2 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
);
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#D4AF37] flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
);
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

// --- Facebook Feed Section (แบบ 3 ช่อง Custom) ---
const FacebookFeed = () => {
  // จำลองข้อมูลโพสต์ (ในอนาคตถ้าเชื่อม API จริงค่อยเปลี่ยนตรงนี้)
  // ผมดึงรูปจาก Portfolio มาใส่ให้ดูก่อนนะครับ
  const posts = [
    { id: 1, date: "2 ชั่วโมงที่แล้ว", title: "ส่งงานชุดเก้าอี้หลุยส์", desc: "ขอบคุณลูกค้าที่ไว้วางใจ ส่งงานชุดใหญ่ หุ้มผ้าทอลายหลุยส์เกรดพรีเมียม สวยงามอลังการ...", image: "/images/SofaLuxRed.jpg" },
    { id: 2, date: "เมื่อวานนี้", title: "รับซ่อมโซฟาหนังแท้", desc: "งานฟื้นฟูสภาพหนังเก่า ขาด รอยขีดข่วน กลับมาสวยเหมือนใหม่ ด้วยเทคนิคเฉพาะของทางร้าน...", image: "/images/SofaBrown.jpg" },
    { id: 3, date: "3 วันที่แล้ว", title: "เก้าอี้โมเดิร์น สั่งทำพิเศษ", desc: "งานสั่งทำตามขนาด พื้นที่จำกัดก็ทำได้ เลือกวัสดุและสีได้ตามใจชอบ งานเนี๊ยบ...", image: "/images/ChairModern.jpg" },
    { id: 4, date: "1 สัปดาห์ที่แล้ว", title: "รีวิวงานซ่อมเก้าอี้ไม้", desc: "เก้าอี้เก่าแกะสลัก ทำสีไม้ใหม่ บุเบาะใหม่ สวยคลาสสิก แข็งแรงทนทาน...", image: "/images/ChairVintage.jpg" },
    { id: 5, date: "2 สัปดาห์ที่แล้ว", title: "โซฟาเบดสีครีม", desc: "ซ่อมโครงสร้างที่หัก เปลี่ยนฟองน้ำอัดแน่นพิเศษ นั่งสบาย ไม่ยุบตัว...", image: "/images/SofaCream.jpg" },
    { id: 6, date: "20 ม.ค. 2026", title: "โปรโมชั่นเดือนนี้", desc: "ลดค่าแรง 10% สำหรับงานหุ้มเบาะโซฟาชุดใหญ่ สอบถามราคาด่วน...", image: "/images/SofaNavy.jpg" },
  ];

  return (
    <section className="py-16 bg-[#fcfbf8] border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* หัวข้อ */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#B8860B]">อัปเดตผลงานผ่าน Facebook</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
          <p className="text-gray-500 mt-2">ติดตามข่าวสารและรีวิวงานจริงได้ที่เพจของเรา</p>
        </div>

        {/* ส่วนแสดง Grid 3 ช่อง + Scrollable */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
           
           {/* Header ของกล่องเสมือน */}
           <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100 px-2">
              <div className="flex items-center gap-3">
                 <img src="/images/โสภาพรLogo.png" alt="Logo" className="w-10 h-10 rounded-full border border-gray-200" />
                 <div>
                    <h3 className="font-bold text-gray-800 text-sm">โสภาพร เฟอร์นิเจอร์</h3>
                    <p className="text-xs text-gray-400">Facebook Page</p>
                 </div>
              </div>
              <a 
                href="https://www.facebook.com/profile.php?id=100076142374650" 
                target="_blank" 
                rel="noreferrer"
                className="text-xs bg-[#e7f3ff] text-[#1877F2] px-3 py-1 rounded font-bold hover:bg-[#dbeeff]"
              >
                ถูกใจเพจ 👍
              </a>
           </div>

           {/* --- พื้นที่ Scrollable (3 ช่อง) --- */}
           <div className="h-[500px] overflow-y-auto custom-scrollbar pr-2">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {posts.map((post) => (
                 <div key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                   {/* รูปภาพ */}
                   <div className="h-48 overflow-hidden bg-gray-100 relative">
                     <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=No+Image"; }}
                     />
                   </div>
                   
                   {/* เนื้อหา */}
                   <div className="p-4 flex-1 flex flex-col">
                     <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">โพสต์เมื่อ: {post.date}</span>
                        <FacebookIcon /> {/* Icon FB เล็กๆ */}
                     </div>
                     <h4 className="font-bold text-gray-800 mb-1 line-clamp-1">{post.title}</h4>
                     <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">{post.desc}</p>
                     
                     <a 
                       href="https://www.facebook.com/profile.php?id=100076142374650" 
                       target="_blank" 
                       rel="noreferrer"
                       className="text-center block w-full py-2 border border-[#e5e7eb] rounded text-sm font-bold text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors"
                     >
                       ดูบน Facebook
                     </a>
                   </div>
                 </div>
               ))}
               
               {/* กล่องดูเพิ่มเติม */}
               <div className="min-h-[200px] bg-[#f9fafb] border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 text-center hover:bg-[#f0f9ff] hover:border-[#1877F2] transition-colors cursor-pointer group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                     <FacebookIcon />
                  </div>
                  <h4 className="font-bold text-gray-700 group-hover:text-[#1877F2]">ดูโพสต์ทั้งหมด</h4>
                  <a href="https://www.facebook.com/profile.php?id=100076142374650" target="_blank" rel="noreferrer" className="text-xs text-gray-500 mt-1 underline">คลิกเพื่อไปที่เพจ</a>
               </div>

             </div>
           </div>

        </div>
      </div>
    </section>
  );
};

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const scrollToPortfolio = () => {
    const section = document.getElementById('portfolio');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const portfolioItems = [
  { 
    id: 1, 
    src: "/images/ChairBoxRed.jpg", 
    title: "สตูลลูกเต๋าสีแดง (Cube Red)", 
    description: "เก้าอี้สตูลทรงสี่เหลี่ยมจัตุรัส บุหนัง PVC สีแดงสด ขนาดกะทัดรัด" 
  },
  { 
    id: 2, 
    src: "/images/ChairBoxWhite.jpg", 
    title: "สตูลลูกเต๋าสีขาว (Cube White)", 
    description: "เก้าอี้สตูลทรงสี่เหลี่ยมจัตุรัส บุหนัง PVC สีขาวสะอาดตา สไตล์มินิมอล" 
  },
  { 
    id: 3, 
    src: "/images/ChairRectangleRed.jpg", 
    title: "ม้านั่งสตูลยาวสีแดง (Long Bench)", 
    description: "สตูลยาวทรงสี่เหลี่ยมผืนผ้า บุหนัง PVC สีแดง รองรับการนั่งได้ 2-3 ท่าน" 
  },
  { 
    id: 4, 
    src: "/images/ChairGreen.jpg", 
    title: "เก้าอี้วินเทจสีเขียวมะกอก", 
    description: "เก้าอี้พนักพิงบุหนังโทนสีเขียว Classic Green ขาไม้จริงแข็งแรง" 
  },
  { 
    id: 5, 
    src: "/images/ChairModern.jpg", 
    title: "เก้าอี้โมเดิร์น Loft Grey", 
    description: "เก้าอี้ทรงโมเดิร์นบุผ้าสีเทา เย็บลายตาราง ขาเหล็กทรงตัว U สีดำด้าน" 
  },
  { 
    id: 6, 
    src: "/images/ChairLuxuryRed.jpg", 
    title: "อาร์มแชร์หลุยส์ Grand Red", 
    description: "เก้าอี้หลุยส์ทรงใหญ่ แกะสลักขอบทอง บุผ้าทอลายวิจิตรสีแดงเลือดหมู" 
  },
  { 
    id: 7, 
    src: "/images/ChairRed.jpg", 
    title: "เก้าอี้ไม้วินเทจลายดอก", 
    description: "เก้าอี้โครงไม้ทำสีน้ำตาลแดง บุผ้าทอลายดอกไม้สไตล์คลาสสิก" 
  },
  { 
    id: 8, 
    src: "/images/ChairVintage.jpg", 
    title: "เก้าอี้หลุยส์พนักรี (Oval Back)", 
    description: "เก้าอี้ไม้สไตล์หลุยส์ พนักพิงวงรี บุผ้าทอลายสีทองตัดเขียว งานแกะสลัก" 
  },
  { 
    id: 9, 
    src: "/images/ChairVintage2.jpg", 
    title: "เก้าอี้ทานข้าวลายทอง", 
    description: "เก้าอี้ไม้ทรงมาตรฐาน บุผ้าลวดลายสีทอง ดูเรียบหรูและอบอุ่น" 
  },
  { 
    id: 10, 
    src: "/images/ChairVintage3.jpg", 
    title: "เก้าอี้จัดเลี้ยงลายริ้ว", 
    description: "เก้าอี้ไม้พนักพิงสูง บุผ้าลายริ้วสีทอง-แดง เหมาะสำหรับห้องจัดเลี้ยง" 
  },
  { 
    id: 11, 
    src: "/images/LeatherChairColorful.jpg", 
    title: "โซฟาเรโทร Colorful Collection", 
    description: "ชุดเก้าอี้และโซฟาสไตล์เรโทร หุ้มหนัง PVC สีสันสดใส (เขียว, เหลือง, แดง)" 
  },
  { 
    id: 12, 
    src: "/images/LeatherChairSet.jpg", 
    title: "ชุดรับแขกวินเทจ Blue Teal", 
    description: "ชุดโซฟาและเก้าอี้อาร์มแชร์หนังสีน้ำเงินอมเขียว พร้อมโต๊ะกลางไม้สัก" 
  },
  { 
    id: 13, 
    src: "/images/LeatherLongWhiteChair.jpg", 
    title: "โซฟายาววินเทจสีขาว", 
    description: "โซฟายาวบุหนังสีขาว ดึงกระดุมพนักพิงสไตล์คลาสสิก ขาเหลา" 
  },
  { 
    id: 14, 
    src: "/images/ChairSetLux.jpg", 
    title: "โซฟาเรโทร Black & White", 
    description: "ชุดรับแขกใหญ่ โซฟาหนังดึงกระดุมสีขาวและดำ พร้อมโต๊ะกลางไม้ขนาดใหญ่" 
  },
  { 
    id: 15, 
    src: "/images/SofaGray.jpg", 
    title: "โซฟาผ้า 3 ที่นั่ง (Light Grey)", 
    description: "โซฟาบุผ้าสีเทาอ่อน รูปทรงหนานุ่ม มาพร้อมหมอนอิงเข้าชุด" 
  },
  { 
    id: 16, 
    src: "/images/SofaGray2.jpg", 
    title: "โซฟา L-Shape โมเดิร์น (Dark Base)", 
    description: "โซฟาเข้ามุมสีเทาเข้ม ฐานสีดำ ดีไซน์เรียบง่ายทันสมัย" 
  },
  { 
    id: 17, 
    src: "/images/SofaGray3.jpg", 
    title: "โซฟาโค้งทูโทน (Two-Tone)", 
    description: "โซฟาบุผ้าสีเทาตัดฐานสีน้ำตาล พนักแขนทรงโค้งมน ดูหรูหรา" 
  },
  { 
    id: 18, 
    src: "/images/SofaGrayT.jpg", 
    title: "โซฟา L-Shape พนักพิงสูง", 
    description: "โซฟาเข้ามุมสีเทา พนักพิงศีรษะหนานุ่ม รองรับสรีระได้ดีเยี่ยม" 
  },
  { 
    id: 19, 
    src: "/images/SofaWhite.jpg", 
    title: "โซฟาหนัง Minimalist White", 
    description: "โซฟาทรงกล่องบุหนังสีขาว ดีไซน์เหลี่ยมมุมชัดเจน สไตล์โมเดิร์น" 
  },
  { 
    id: 20, 
    src: "/images/SofaBrown.jpg", 
    title: "โซฟาหนัง Modern Brown", 
    description: "โซฟายาวบุหนังสีน้ำตาลอ่อน ทรงโมเดิร์น ขาโครเมียม" 
  },
  { 
    id: 21, 
    src: "/images/SofaCream.jpg", 
    title: "โซฟา L-Shape สีครีม", 
    description: "โซฟาเข้ามุมบุผ้าสีครีมเบจ ให้ความรู้สึกอบอุ่นและกว้างขวาง" 
  },
  { 
    id: 22, 
    src: "/images/SofaFabricBlueWhite.jpg", 
    title: "โซฟาเบดลายทาง (Blue Stripe)", 
    description: "โซฟาปรับนอนได้ บุผ้าลายทางขาว-น้ำเงิน สไตล์ลำลอง" 
  },
  { 
    id: 23, 
    src: "/images/SofaLuxRed.jpg", 
    title: "โซฟาเข้ามุมดึงกระดุม (Red Booth)", 
    description: "โซฟาเข้ามุมทรงบูธ บุหนังสีแดงสด ดึงกระดุมเพชร สไตล์คาราโอเกะ/คลับ" 
  },
  { 
    id: 24, 
    src: "/images/SofaLuxuryRed.jpg", 
    title: "ตั่งนอนหลุยส์ (Chaise Lounge)", 
    description: "เก้าอี้นอนยาวสไตล์หลุยส์ บุผ้าลายวิจิตรสีแดง โครงไม้แกะสลักทอง" 
  },
  { 
    id: 25, 
    src: "/images/SofaNavy.jpg", 
    title: "โซฟา L-Shape สีกรมท่า", 
    description: "โซฟาเข้ามุมบุผ้าสีกรมท่า (Navy Blue) ดีไซน์มินิมอล นั่งสบาย" 
  }

  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans relative">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Chonburi&family=Sarabun:wght@300;400;500;700&display=swap');
          h1, .thai-font { font-family: 'Chonburi', cursive; }
          /* Custom Scrollbar for Chrome/Safari */
          .custom-scrollbar::-webkit-scrollbar { width: 8px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 4px; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #9ca3af; }
        `}
      </style>

      {/* 1. Header Section */}
      <header className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
            <div className="flex-shrink-0">
               <img 
                 src="/images/โสภาพรLogo.jpg" 
                 alt="โสภาพร เฟอร์นิเจอร์ Logo" 
                 className="w-48 h-48 rounded-full object-cover shadow-md border-4 border-[#D4AF37] p-1 bg-white"
               />
            </div>

            <div className="flex-1 pt-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#D4AF37] mb-2 tracking-wide thai-font">
                โสภาพร เฟอร์นิเจอร์
              </h1>
              <p className="text-[#B8860B] text-lg font-medium">
                ซ่อมเฟอร์นิเจอร์ทุกชนิด โซฟา เก้าอี้ หัวเตียง และสั่งทำตามแบบ
              </p>
              <p className="text-gray-400 text-sm mt-1">
                วัสดุคุณภาพเกรดพรีเมียม พร้อมบริการรับ-ส่ง และรับประกันงาน
              </p>
            </div>
            
            <div className="hidden md:block mt-4 text-right">
                <a href="tel:0807520242" className="bg-[#D4AF37] hover:bg-[#B8860B] text-white px-8 py-3 rounded-full transition-all text-sm font-bold shadow-lg flex items-center gap-2 mb-2 justify-center">
                   <span>📞</span> โทร: 080-752-0242 (พี่โสภา)
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
        <section id="home" className="relative h-[600px] bg-gray-900 flex items-center justify-center text-white overflow-hidden">
          {/* Background Image (Optional overlay) */}
          <div className="absolute inset-0 bg-black/70 z-0"></div>
          
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <span className="text-[#D4AF37] font-bold tracking-wider uppercase text-sm md:text-base mb-4 block thai-font animate-fade-in-up">
              โสภาพร เฟอร์นิเจอร์
            </span>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight thai-font">
              รับสั่งทำและซ่อม <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2E5BF]">
                เฟอร์นิเจอร์ครบวงจร
              </span>
            </h2>

            {/* ส่วนคำอธิบายที่แก้ไขใหม่ให้ครบถ้วน */}
            <p className="text-lg md:text-2xl text-gray-200 mb-8 font-light max-w-4xl mx-auto leading-relaxed">
              เชี่ยวชาญงานซ่อม <strong className="text-white">เก้าอี้นวดไฟฟ้า รีไคลเนอร์ La-Z-Boy</strong> และโซฟาทุกชนิด <br className="hidden lg:block" />
              รับหุ้มเบาะหัวเตียง บุผนังห้อง และทำเบาะตามขนาด <br className="hidden lg:block" />
              วัสดุเกรดพรีเมียม พร้อมบริการรับ-ส่งถึงบ้าน
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={scrollToPortfolio}
                className="w-full sm:w-auto bg-[#D4AF37] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#D4AF37] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#D4AF37]/30"
              >
                ดูผลงานจริง
              </button>
              <a 
                href="tel:0875985475" 
                className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <span>📞</span> สอบถามราคา
              </a>
            </div>

            {/* Tags บริการเพิ่มเติม (เพื่อให้เห็นภาพชัดขึ้นทันที) */}
            <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-gray-400 opacity-80">
              <span className="px-3 py-1 border border-gray-600 rounded-full">#ซ่อมเก้าอี้นวด</span>
              <span className="px-3 py-1 border border-gray-600 rounded-full">#หุ้มเบาะLaZBoy</span>
              <span className="px-3 py-1 border border-gray-600 rounded-full">#ซ่อมโซฟาหลุยส์</span>
              <span className="px-3 py-1 border border-gray-600 rounded-full">#บุผนังหัวเตียง</span>
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
        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#B8860B]">บริการของเรา</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
              <p className="text-gray-500 mt-4 text-lg">
                รับหุ้มเปลี่ยนหนัง โซฟา เก้าอี้ ทุกชนิด มีบริการรับ-ส่ง
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: เก้าอี้ไฟฟ้า/พักผ่อน */}
              <div className="bg-[#fcfbf8] p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-[#D4AF37] rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-md group-hover:scale-110 transition-transform">
                  🛋️
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">เก้าอี้ไฟฟ้า & รีไคลเนอร์</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  เชี่ยวชาญงานซ่อมและเปลี่ยนหนัง <strong>เก้าอี้นวดไฟฟ้า, เก้าอี้เลซี่บอย (La-Z-Boy)</strong>, และรีไคลเนอร์ทุกรุ่น คืนสภาพความนุ่มสบายเหมือนใหม่
                </p>
              </div>

              {/* Card 2: งานโครงการ */}
              <div className="bg-[#fcfbf8] p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-[#D4AF37] rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-md group-hover:scale-110 transition-transform">
                  🏢
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">งานโครงการ & ร้านค้า</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  รับเหมางานใหญ่ <strong>เก้าอี้ห้องประชุม, งานมหาลัย</strong>, โซฟาร้านคาราโอเกะ, ผับ และร้านอาหาร งานสั่งทำตามขนาด (Made to order)
                </p>
              </div>

              {/* Card 3: วัสดุครบวงจร */}
              <div className="bg-[#fcfbf8] p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-[#D4AF37] rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-md group-hover:scale-110 transition-transform">
                  🧵
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">วัสดุเกรดพรีเมียม</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  มีหนังและผ้าให้เลือกครบ <strong>หนังแท้, หนังเทียม, PU, JU, PVC</strong>, ผ้าหลุยส์ และผ้าเกรดพรีเมียมหลากหลายสี
                </p>
              </div>
            </div>

            {/* Banner บริการรับส่ง */}
            <div className="mt-10 bg-[#D4AF37] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between text-white shadow-lg">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="bg-white/20 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold">มีบริการรับ-ส่งสินค้า</h4>
                  <p className="text-white/90 text-sm">อำนวยความสะดวก รับเฟอร์นิเจอร์มาซ่อมถึงที่ และส่งคืนเมื่อเสร็จงาน</p>
                </div>
              </div>
              <a href="tel:0875985475" className="bg-white text-[#B8860B] px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
                <span>📞</span> โทร: 080-752-0242 (พี่โสภา)
              </a>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 bg-[#fcfbf8]">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#B8860B]">ผลงานล่าสุด</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
              <p className="text-gray-500 mt-2 text-sm">
                (ภาพจากผลงานจริง) เลื่อนลงเพื่อดูเพิ่มเติม
              </p>
            </div>
            
            <div className="h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {portfolioItems.map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => setSelectedImage(item)} 
                    className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative group cursor-pointer border border-gray-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x300/e5e7eb/a3a3a3?text=${item.title}`; 
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                      <span className="text-white font-bold text-lg mb-2">{item.title}</span>
                      <span className="text-xs text-white border border-white px-3 py-1 rounded-full hover:bg-white hover:text-[#D4AF37] transition-colors">
                        ดูรายละเอียด
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact Section */}
        <section id="location" className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#B8860B]">พิกัดร้าน / ที่อยู่</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
              <p className="text-gray-500 mt-2">แวะมาปรึกษา หรือส่งเฟอร์นิเจอร์มาประเมินราคาได้ที่หน้าร้าน</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              <div className="bg-[#fcfbf8] p-8 rounded-lg border border-gray-100 shadow-sm h-full">
                <h3 className="text-2xl font-bold text-[#B8860B] mb-6 flex items-center thai-font">
                   <MapPinIcon /> โสภาพร เฟอร์นิเจอร์
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
                         <a href="tel:0807520242" className="flex items-center text-[#B8860B] hover:text-[#D4AF37] transition-colors">
                          <span className="w-6 h-6 bg-[#D4AF37] text-white rounded-full flex items-center justify-center mr-2 text-xs">📞</span>
                          <span className="font-bold">080-752-0242</span> <span className="text-gray-500 ml-2">(พี่โสภา)</span>
                        </a>
                      </li>
                      <li>
                       
                         <a href="tel:0875985475" className="flex items-center text-[#B8860B] hover:text-[#D4AF37] transition-colors">
                          <span className="w-6 h-6 bg-[#D4AF37] text-white rounded-full flex items-center justify-center mr-2 text-xs">📞</span>
                          <span className="font-bold">087-598-5475</span> <span className="text-gray-500 ml-2">(ช่างหน่อย)</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.facebook.com/profile.php?id=100076142374650" 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center text-[#1877F2] hover:text-[#0d65d9] transition-colors mt-3 pt-3 border-t border-gray-100"
                        >
                          <span className="w-8 h-8 bg-[#1877F2] text-white rounded-full flex items-center justify-center mr-3 shadow-sm">
                            <FacebookIcon />
                          </span>
                          <div className="flex flex-col">
                            <span className="font-bold text-sm">ติดตามผลงานทาง Facebook</span>
                            <span className="text-xs text-gray-500">โสภาพร เฟอร์นิเจอร์</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <a 
                    href="https://maps.app.goo.gl/pdoG55sANYgaVVj97" 
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9488007011346!2d100.698323!3d13.721549599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d61d717b57aed%3A0xe168acb426e14295!2z4LmC4Liq4Lig4Liy4Lie4Lij4LmA4Lif4Lit4Lij4LmM4LiZ4Li04LmA4LiI4Lit4Lij4LmM!5e0!3m2!1sth!2sth!4v1768929478926!5m2!1sth!2sth" 
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

        {/* Facebook Feed Section (Modified) */}
        <FacebookFeed />

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
                 onError={(e) => {
                    e.target.src = `https://via.placeholder.com/800x600/e5e7eb/a3a3a3?text=${selectedImage.title}`; 
                 }}
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
        <div className="flex justify-center items-center gap-4 mb-4">
           <a href="https://www.facebook.com/profile.php?id=100076142374650" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-all">
              <FacebookIcon /> 
              <span className="text-sm font-bold">Facebook Page</span>
           </a>
        </div>
        <p>© 2026 SP Furniture BKK. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;