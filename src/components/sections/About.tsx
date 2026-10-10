import { useInView } from '../../hooks/useInView'

export function About() {
  const { ref, inView } = useInView()

  return (
    <section id="sobre" className="relative bg-navy-light py-32 px-6 grain overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-display text-pink text-sm tracking-[0.3em] uppercase mb-6">Quem somos</p>
          <h2 className="font-display font-black uppercase text-white leading-[0.92] mb-8" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
            UM COLETIVO<br />
            CRIADO E<br />
            LIDERADO POR<br />
            <span className="text-pink">MULHERES.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Somos o HerData, um coletivo que conecta dados, impacto social e protagonismo feminino. Conectamos ensino, pesquisa e inovação com as necessidades sociais e tecnológicas do presente.
          </p>
        </div>

        <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: '2021', l: 'Fundação em Salvador, BA' },
              { n: 'STEM', l: 'Representatividade de Gênero e Raça' },
              { n: '265+', l: 'Seguidoras e comunidade ativa' },
              { n: '∞', l: 'Possibilidades para mulheres na tecnologia' },
            ].map((item, i) => (
              <div key={i} className="bg-navy-mid border border-white/10 rounded-2xl p-6 hover:border-pink/40 transition-colors">
                <p className="font-display font-black text-pink text-4xl uppercase">{item.n}</p>
                <p className="text-white/50 text-sm mt-2 leading-snug">{item.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
