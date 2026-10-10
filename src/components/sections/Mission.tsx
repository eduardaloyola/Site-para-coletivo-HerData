import { BarChart3, BrainCircuit, Sigma } from 'lucide-react'

import { useInView } from '../../hooks/useInView'

export function Mission() {
  const { ref, inView } = useInView()

  return (
    <section id="missao" ref={ref} className="relative py-32 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #261d42 0%, #1a1030 50%, #2a1060 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className={`max-w-4xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-display text-pink text-sm tracking-[0.3em] uppercase mb-8">Nossa missão</p>
          <h2 className="font-display font-black uppercase text-white leading-[0.92] mb-10" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}>
            NOSSA MISSÃO:
          </h2>
          <p className="text-lavender text-2xl md:text-3xl leading-relaxed font-display font-bold uppercase">
            Empoderar mulheres no estudo e na prática de dados, estatística e inteligência artificial, promovendo acesso, formação e impacto social.
          </p>
        </div>

        <div className={`mt-16 grid md:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            {
              title: 'Ciência de Dados',
              desc: 'Formação com perspectiva de gênero e raça, do básico ao avançado, fortalecendo o protagonismo feminino na área.',
              accent: 'bg-pink/15 border-pink/30',
              Icon: BarChart3,
            },
            {
              title: 'Inteligência Artificial',
              desc: 'Exploramos IA com ética, criatividade e responsabilidade social, ampliando o acesso e a participação de mulheres no campo.',
              accent: 'bg-violet/15 border-violet/30',
              Icon: BrainCircuit,
            },
            {
              title: 'Estatística',
              desc: 'Desenvolvemos pensamento analítico e quantitativo para interpretar dados, compreender realidades e transformar informação em ação.',
              accent: 'bg-purple/15 border-purple/30',
              Icon: Sigma,
            },
          ].map((item, i) => (
            <div key={i} className="border border-white/10 rounded-2xl p-8 hover:border-pink/50 hover:bg-white/5 transition-all">
              <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-xl border ${item.accent}`}>
                <item.Icon className="h-7 w-7 text-pink" strokeWidth={1.8} />
              </div>
              <h3 className="font-display font-black text-white text-xl uppercase mb-3">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
