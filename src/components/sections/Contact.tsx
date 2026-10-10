import { useInView } from '../../hooks/useInView'

export function Contact() {
  const { ref, inView } = useInView()

  return (
    <section id="contato" className="bg-navy py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-display text-pink text-sm tracking-[0.3em] uppercase mb-6">Faça parte</p>
          <h2 className="font-display font-black uppercase text-white leading-[0.92] mb-8" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
            JUNTE-SE<br />
            AO<br />
            <span className="text-pink">MOVIMENTO</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            O HerData é um coletivo em crescimento. Se você tem interesse em ciência de dados, IA ou estatística, venha fazer parte da nossa comunidade.
          </p>
          <div className="flex flex-col gap-3">
            <a href="https://instagram.com/herdata.ba" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/60 hover:text-pink transition-colors group">
              <span className="w-10 h-10 rounded-full border border-white/10 group-hover:border-pink flex items-center justify-center text-sm transition-colors">IG</span>
              <span className="font-display font-bold uppercase">@herdata.ba</span>
            </a>
            <a href="https://herdata.ba" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/60 hover:text-pink transition-colors group">
              <span className="w-10 h-10 rounded-full border border-white/10 group-hover:border-pink flex items-center justify-center text-sm transition-colors">🌐</span>
              <span className="font-display font-bold uppercase">herdata.ba</span>
            </a>
            <a href="mailto:herdata.ba@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-pink transition-colors group">
              <span className="w-10 h-10 rounded-full border border-white/10 group-hover:border-pink flex items-center justify-center text-sm transition-colors">✉</span>
              <span className="font-display font-bold uppercase">herdata.ba@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
