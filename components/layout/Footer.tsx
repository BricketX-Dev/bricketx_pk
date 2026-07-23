export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#a5adb6]/20 pt-[48px] pb-[32px]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-[28px] lg:gap-[40px]">
          <div>
            <a href="/" className="font-sans font-bold text-[22px] tracking-tight flex items-center gap-[9px] mb-[14px] group">
              <span className="w-[9px] h-[9px] rounded-full bg-[#c39967] shadow-[0_0_10px_rgba(195,153,103,0.5)] group-hover:shadow-[0_0_15px_rgba(195,153,103,0.8)] transition-shadow duration-300" />
              Bricket<span className="text-[#c39967]">X</span>&nbsp;PK
            </a>
            <p className="text-[#a5adb6] text-[14px] max-w-[280px]">
              The operational backbone of the BricketX network. Karachi, Pakistan.
            </p>
          </div>
          
          <div className="flex flex-col">
            <h4 className="font-sans font-medium text-[12px] tracking-[0.08em] uppercase text-[#a5adb6] mb-[16px]">Departments</h4>
            {['Technology', 'Marketing', 'Operations', 'Creative', 'Production'].map(link => (
              <a key={link} href="#" className="text-[#a5adb6]/70 text-[14px] mb-[10px] transition-all duration-300 hover:text-[#c39967] hover:translate-x-1 inline-block w-max">{link}</a>
            ))}
          </div>
          
          <div className="flex flex-col">
            <h4 className="font-sans font-medium text-[12px] tracking-[0.08em] uppercase text-[#a5adb6] mb-[16px]">Explore</h4>
            {['What We Build', 'Our Ecosystem', 'Global Operations', 'Innovation Lab'].map(link => (
              <a key={link} href="#" className="text-[#a5adb6]/70 text-[14px] mb-[10px] transition-all duration-300 hover:text-[#c39967] hover:translate-x-1 inline-block w-max">{link}</a>
            ))}
          </div>
          
          <div className="flex flex-col">
            <h4 className="font-sans font-medium text-[12px] tracking-[0.08em] uppercase text-[#a5adb6] mb-[16px]">Company</h4>
            <a href="#" className="text-[#a5adb6]/70 text-[14px] mb-[10px] transition-all duration-300 hover:text-[#c39967] hover:translate-x-1 inline-block w-max">Culture</a>
            <a href="#" className="text-[#a5adb6]/70 text-[14px] mb-[10px] transition-all duration-300 hover:text-[#c39967] hover:translate-x-1 inline-block w-max">Careers</a>
            <a href="#" className="text-[#a5adb6]/70 text-[14px] mb-[10px] transition-all duration-300 hover:text-[#c39967] hover:translate-x-1 inline-block w-max">Contact</a>
            <a href="#" className="text-[#a5adb6]/70 text-[14px] mb-[10px] transition-all duration-300 hover:text-[#c39967] hover:translate-x-1 inline-block w-max">BricketX.com &nearr;</a>
          </div>
        </div>
        
        <div className="mt-[48px] pt-[24px] border-t border-[#a5adb6]/20 flex justify-between flex-wrap gap-[10px] font-sans font-medium text-[12px] text-[#a5adb6]/70">
          <span>© 2026 BricketX Pakistan</span>
          <span>UK/BVI · DUBAI · KENYA · PAKISTAN</span>
        </div>
      </div>
    </footer>
  );
}