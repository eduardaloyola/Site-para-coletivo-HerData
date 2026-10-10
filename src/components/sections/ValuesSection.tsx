import { VALUES } from '../../data/siteContent'
import { useInView } from '../../hooks/useInView'

export function ValuesSection() {
  const { ref, inView } = useInView()

  return (
    <section id="valores" className="bg-navy py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-display text-pink text-sm tracking-[0.3em] uppercase mb-4">Nossos valores</p>
          <h2 className="font-display font-black uppercase text-white leading-[0.92]" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
            O QUE NOS<br /><span className="text-lavender">MOVE</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {VALUES.map((value, i) => (
            <div
              key={value.num}
              className={`${value.bg} border ${value.color} border-opacity-40 rounded-2xl p-8 hover:border-opacity-80 transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="font-display font-black text-6xl text-white/10 mb-4">{value.num}</p>
              <h3 className="font-display font-black text-white uppercase text-2xl mb-3">{value.title}</h3>
              <p className="text-white/60 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
