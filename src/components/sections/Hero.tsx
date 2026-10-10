import { useInView } from '../../hooks/useInView'

export function Hero() {
  const { ref, inView } = useInView()

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grain pt-24 pb-20 px-6"
      style={{
        background:
          'radial-gradient(circle at 15% 15%, rgba(232,86,154,0.20), transparent 18%), radial-gradient(circle at 80% 25%, rgba(156,123,214,0.24), transparent 22%), linear-gradient(180deg, #120d1d 0%, #1a112d 40%, #120d1d 100%)',
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:26px_26px]" />
        <svg className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10" viewBox="0 0 600 600">
          {[[120,80],[300,60],[480,120],[540,300],[480,480],[300,540],[120,480],[60,300],[300,300]].map(([x,y],i,arr) => (
            arr.slice(i+1).map(([x2,y2],j) => (
              Math.abs(x-x2)+Math.abs(y-y2) < 300 &&
              <line key={`${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2} stroke="#e8569a" strokeWidth="1"/>
            ))
          ))}
          {[[120,80],[300,60],[480,120],[540,300],[480,480],[300,540],[120,480],[60,300],[300,300]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r={i===8?8:5} fill="#e8569a"/>
          ))}
        </svg>
        <svg className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-5" viewBox="0 0 400 400">
          {[[80,80],[200,40],[320,80],[360,200],[320,320],[200,360],[80,320],[40,200]].map(([x,y],i,arr) => (
            arr.slice(i+1).map(([x2,y2],j) => (
              <line key={`${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2} stroke="#9b6fd6" strokeWidth="1.5"/>
            ))
          ))}
          {[[80,80],[200,40],[320,80],[360,200],[320,320],[200,360],[80,320],[40,200]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r={4} fill="#9b6fd6"/>
          ))}
        </svg>
      </div>

      <div className={`max-w-7xl mx-auto w-full relative z-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="font-display text-pink text-sm tracking-[0.3em] uppercase mb-6">
          Coletivo de Ciência de Dados
        </p>

        <h1 className="font-display font-black uppercase leading-[0.92] text-white mb-6" style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}>
          DADOS QUE<br />
          MOVEM <span className="text-pink italic">IDEIAS.</span><br />
          IDEIAS QUE<br />
          MOVEM O <span className="text-lavender">MUNDO.</span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12">
          <p className="text-white/60 text-lg max-w-lg leading-relaxed">
            Representatividade de Gênero e Raça na STEM — conectamos dados, impacto social e protagonismo feminino.
          </p>
          <div className="flex gap-4 flex-shrink-0">
            <a href="#sobre" className="px-7 py-3.5 bg-pink text-white font-semibold rounded-full hover:bg-pink-light transition-colors text-sm uppercase tracking-wide">
              Conheça o coletivo
            </a>
            <a href="https://instagram.com/herdata.ba" target="_blank" rel="noreferrer" className="px-7 py-3.5 border border-white/20 text-white/80 font-semibold rounded-full hover:border-pink hover:text-pink transition-colors text-sm">
              @herdata.ba
            </a>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-4 text-white/30 text-xs font-display tracking-[0.2em] uppercase">
          <div className="w-10 h-px bg-white/20" />
          Protagonismo · Transformação · Inovação · Diversidade
        </div>
      </div>
    </section>
  )
}
