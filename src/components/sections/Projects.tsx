import { useState } from 'react'

import { PROJECTS } from '../../data/siteContent'
import { useInView } from '../../hooks/useInView'

export function Projects() {
  const { ref, inView } = useInView()
  const [activeSlides, setActiveSlides] = useState<Record<number, number>>(() =>
    Object.fromEntries(PROJECTS.map((_, index) => [index, 0])),
  )

  const changeSlide = (projectIndex: number, direction: number) => {
    const total = PROJECTS[projectIndex].slides.length
    setActiveSlides((prev) => {
      const current = prev[projectIndex] ?? 0
      const next = (current + direction + total) % total
      return { ...prev, [projectIndex]: next }
    })
  }

  return (
    <section id="projetos" className="bg-navy-light py-32 px-6 grain relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <p className="font-display text-pink text-sm tracking-[0.3em] uppercase mb-4">Iniciativas</p>
            <h2 className="font-display font-black uppercase text-white leading-[0.92]" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
              O QUE<br /><span className="text-pink">FAZEMOS</span>
            </h2>
          </div>
          <a href="https://instagram.com/herdata.ba" target="_blank" rel="noreferrer" className="text-sm font-semibold text-white/50 hover:text-pink transition-colors underline underline-offset-4 font-display uppercase tracking-wider">
            Ver tudo no Instagram
          </a>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {PROJECTS.map((project, index) => {
            const currentIndex = activeSlides[index] ?? 0
            const currentImage = project.slides[currentIndex]

            return (
              <article key={project.title} className={`group transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 120}ms` }}>
                <div className="overflow-hidden rounded-xl mb-5 aspect-[16/10] bg-navy-mid relative border border-white/10">
                  <img src={currentImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                  <button type="button" aria-label={`Anterior em ${project.title}`} onClick={() => changeSlide(index, -1)} className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-navy/80 text-lg text-white/80 shadow-lg backdrop-blur-sm transition hover:border-pink hover:text-pink">
                    ‹
                  </button>
                  <button type="button" aria-label={`Próximo em ${project.title}`} onClick={() => changeSlide(index, 1)} className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-navy/80 text-lg text-white/80 shadow-lg backdrop-blur-sm transition hover:border-pink hover:text-pink">
                    ›
                  </button>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-1.5">
                    {project.slides.map((_, dotIndex) => (
                      <button
                        key={`${project.title}-${dotIndex}`}
                        type="button"
                        aria-label={`Ir para imagem ${dotIndex + 1} de ${project.title}`}
                        onClick={() => setActiveSlides((prev) => ({ ...prev, [index]: dotIndex }))}
                        className={`h-2 rounded-full transition-all ${dotIndex === currentIndex ? 'w-6 bg-pink' : 'w-2 bg-white/40 hover:bg-white/70'}`}
                      />
                    ))}
                  </div>
                </div>

                <span className="font-display text-xs text-pink tracking-[0.2em] uppercase">{project.tag}</span>
                <h3 className="font-display font-black text-white uppercase text-xl mt-2 mb-2 group-hover:text-pink transition-colors leading-tight">{project.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{project.desc}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
