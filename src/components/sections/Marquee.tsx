export default function Marquee() {
  return (
    <section className="py-12 border-y border-slate-800 bg-black/20 z-10 relative">
      <div className="wrapper">
        <p className="text-center text-xs uppercase tracking-widest text-slate-500 mb-8">
          Trusted by Global Industry Leaders
        </p>
        <div className="marquee">
          <div className="marquee-track flex gap-16 items-center text-slate-600 text-2xl font-bold">
            <span>NOVA CORP</span> <i className="fas fa-circle text-[6px]"></i>
            <span>QUANTUM FINANCE</span> <i className="fas fa-circle text-[6px]"></i>
            <span>APEX TECH</span> <i className="fas fa-circle text-[6px]"></i>
            <span>VERTEX VENTURES</span> <i className="fas fa-circle text-[6px]"></i>
            <span>HELIOS ENERGY</span> <i className="fas fa-circle text-[6px]"></i>
            <span>NOVA CORP</span> <i className="fas fa-circle text-[6px]"></i>
            <span>QUANTUM FINANCE</span> <i className="fas fa-circle text-[6px]"></i>
            <span>APEX TECH</span> <i className="fas fa-circle text-[6px]"></i>
            <span>VERTEX VENTURES</span> <i className="fas fa-circle text-[6px]"></i>
            <span>HELIOS ENERGY</span> <i className="fas fa-circle text-[6px]"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
