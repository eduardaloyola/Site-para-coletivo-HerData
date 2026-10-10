import { useInView } from '../../hooks/useInView'

export function Manifesto() {
  const { ref, inView } = useInView()

  return (
    <section className="py-32 px-6 overflow-hidden relative grain" ref={ref} style={{ background: 'linear-gradient(135deg, #e8569a 0%, #9b4dca 60%, #5b2d8e 100%)' }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <p className="font-display font-black uppercase text-white/5 whitespace-nowrap" style={{ fontSize: '20vw' }}>HERDATA</p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`max-w-3xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-display text-sm tracking-[0.3em] uppercase text-white/60 mb-8">Nossa crença</p>
          <h2 className="font-display font-black uppercase text-white leading-[0.92] mb-10" style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}>
            "CONECTANDO<br />DADOS,<br />CRIANDO<br />FUTURO."
          </h2>
          <p className="text-white/70 text-xl leading-relaxed max-w-xl">
            Cada dado coletado, cada análise feita, cada mulher formada é um passo para um Brasil mais justo e representativo na ciência e na tecnologia.
          </p>
        </div>
      </div>
    </section>
  )
}
