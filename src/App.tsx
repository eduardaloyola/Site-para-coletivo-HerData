import { useState, useEffect, useRef } from 'react'

// ─── Logo SVG ──────────────────────────────────────────────────────────────
function HerdataLogo({ size = 48, textSize = 'text-2xl', light = false }: { size?: number; textSize?: string; light?: boolean }) {
  const c = light ? '#ffffff' : '#ffffff'
  const nodes = [
    [50, 10], [82, 28], [90, 58], [72, 84], [50, 90],
    [28, 84], [10, 58], [18, 28], [50, 50], [50, 30],
    [70, 40], [70, 65], [30, 65], [30, 40],
  ]
  const edges = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],
    [8,9],[8,10],[8,11],[8,12],[8,13],
    [0,9],[1,10],[2,10],[3,11],[4,11],[5,12],[6,12],[7,13],
    [9,13],[9,10],[10,11],[11,12],[12,13],
  ]
  return (
    <div className="flex items-center gap-3">
      <svg width={size} height={size} viewBox="0 0 100 100">
        {edges.map(([a, b], i) => (
          <line key={i}
            x1={nodes[a][0]} y1={nodes[a][1]}
            x2={nodes[b][0]} y2={nodes[b][1]}
            stroke={c} strokeWidth="1.5" strokeOpacity="0.7"
          />
        ))}
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 8 ? 5 : 3.5} fill={c} />
        ))}
      </svg>
      <span className={`font-serif-logo ${textSize} tracking-tight`} style={{ color: c }}>
        herdata
      </span>
    </div>
  )
}

// ─── Nav ───────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Missão', href: '#missao' },
  { label: 'Valores', href: '#valores' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur border-b border-white/10 py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#"><HerdataLogo size={36} textSize="text-xl" /></a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href}
              className="text-sm font-medium text-white/70 hover:text-pink transition-colors tracking-wide">
              {l.label}
            </a>
          ))}
          <a href="#contato"
            className="ml-2 px-5 py-2.5 bg-pink text-white text-sm font-semibold rounded-full hover:bg-pink-light transition-colors">
            Faça parte
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <span className={`block w-6 h-0.5 bg-white transition-all mb-1.5 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all mb-1.5 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy-light border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} className="text-base text-white/80" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contato" className="mt-2 px-5 py-3 bg-pink text-white text-sm font-semibold rounded-full text-center" onClick={() => setOpen(false)}>
            Faça parte
          </a>
        </div>
      )}
    </nav>
  )
}

// ─── Hero ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen bg-navy flex flex-col justify-center overflow-hidden grain pt-24 pb-20 px-6">
      {/* Background nodes decoration */}
      <div className="absolute inset-0 pointer-events-none">
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

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <p className="font-display text-pink text-sm tracking-[0.3em] uppercase mb-6">
          Coletivo de Ciência de Dados
        </p>

        <h1 className="font-display font-black uppercase leading-[0.92] text-white mb-6"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}>
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
            <a href="#sobre"
              className="px-7 py-3.5 bg-pink text-white font-semibold rounded-full hover:bg-pink-light transition-colors text-sm uppercase tracking-wide">
              Conheça o coletivo
            </a>
            <a href="https://instagram.com/herdata.ba" target="_blank" rel="noreferrer"
              className="px-7 py-3.5 border border-white/20 text-white/80 font-semibold rounded-full hover:border-pink hover:text-pink transition-colors text-sm">
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

// ─── About ─────────────────────────────────────────────────────────────────
function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.15 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return { ref, inView }
}

function About() {
  const { ref, inView } = useInView()
  return (
    <section id="sobre" className="relative bg-navy-light py-32 px-6 grain overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-display text-pink text-sm tracking-[0.3em] uppercase mb-6">Quem somos</p>
          <h2 className="font-display font-black uppercase text-white leading-[0.92] mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
            UM LABORATÓRIO<br />
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
              <div key={i}
                className={`bg-navy-mid border border-white/10 rounded-2xl p-6 hover:border-pink/40 transition-colors`}>
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

// ─── Mission ───────────────────────────────────────────────────────────────
function Mission() {
  const { ref, inView } = useInView()
  return (
    <section id="missao" ref={ref}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #261d42 0%, #1a1030 50%, #2a1060 100%)' }}>
      {/* Decorative star burst */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-64 h-64 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200">
          {Array.from({length: 12}).map((_,i) => {
            const a = (i/12)*Math.PI*2
            return <line key={i} x1="100" y1="100"
              x2={100+Math.cos(a)*95} y2={100+Math.sin(a)*95}
              stroke="#e8569a" strokeWidth="2"/>
          })}
          <circle cx="100" cy="100" r="12" fill="#e8569a"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className={`max-w-4xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-display text-pink text-sm tracking-[0.3em] uppercase mb-8">Nossa missão</p>
          <h2 className="font-display font-black uppercase text-white leading-[0.92] mb-10"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}>
            NOSSA MISSÃO:
          </h2>
          <p className="text-lavender text-2xl md:text-3xl leading-relaxed font-display font-bold uppercase">
            Empoderar mulheres nas áreas de ciência de dados, IA e estatística, promovendo aprendizado contínuo e impacto social.
          </p>
        </div>

        <div className={`mt-16 grid md:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { icon: '📊', title: 'Ciência de Dados', desc: 'Formação técnica com perspectiva de gênero e raça, do básico ao avançado.' },
            { icon: '🤖', title: 'Inteligência Artificial', desc: 'Exploramos IA com ética e responsabilidade social como pilares fundamentais.' },
            { icon: '📐', title: 'Estatística', desc: 'Ferramentas quantitativas para revelar desigualdades e embasar mudanças reais.' },
          ].map((item, i) => (
            <div key={i} className="border border-white/10 rounded-2xl p-8 hover:border-pink/50 hover:bg-white/5 transition-all">
              <p className="text-3xl mb-4">{item.icon}</p>
              <h3 className="font-display font-black text-white text-xl uppercase mb-3">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Values ────────────────────────────────────────────────────────────────
const VALUES = [
  {
    num: '01',
    title: 'Inclusão e Diversidade',
    desc: 'Um espaço que acolhe diferentes identidades, histórias e perspectivas, fortalecendo a pluralidade.',
    color: 'border-pink',
    bg: 'bg-pink/10',
  },
  {
    num: '02',
    title: 'Empoderamento Feminino',
    desc: 'Estimulamos o protagonismo das mulheres na tecnologia e na liderança criando oportunidades e visibilidade.',
    color: 'border-purple-light',
    bg: 'bg-purple/10',
  },
  {
    num: '03',
    title: 'Protagonismo',
    desc: 'Mulheres no centro da narrativa — como autoras, líderes e protagonistas da transformação tecnológica.',
    color: 'border-lavender',
    bg: 'bg-lavender/10',
  },
  {
    num: '04',
    title: 'Inovação com Impacto',
    desc: 'Tecnologia só faz sentido quando transforma vidas reais. Inovamos com propósito social.',
    color: 'border-pink',
    bg: 'bg-pink/10',
  },
]

function ValuesSection() {
  const { ref, inView } = useInView()
  return (
    <section id="valores" className="bg-navy py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-display text-pink text-sm tracking-[0.3em] uppercase mb-4">Nossos valores</p>
          <h2 className="font-display font-black uppercase text-white leading-[0.92]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
            O QUE NOS<br /><span className="text-lavender">MOVE</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {VALUES.map((v, i) => (
            <div key={v.num}
              className={`${v.bg} border ${v.color} border-opacity-40 rounded-2xl p-8 hover:border-opacity-80 transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}>
              <p className="font-display font-black text-6xl text-white/10 mb-4">{v.num}</p>
              <h3 className="font-display font-black text-white uppercase text-2xl mb-3">{v.title}</h3>
              <p className="text-white/60 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Projects / Initiatives ─────────────────────────────────────────────────
const PROJECTS = [
  {
    tag: 'Evento',
    title: 'Conectando Dados, Criando Futuro',
    desc: 'Encontros presenciais e online que conectam mulheres interessadas em ciência de dados, com workshops, palestras e networking.',
    img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=500&fit=crop&auto=format',
  },
  {
    tag: 'Pesquisa',
    title: 'Ciência, Cultura e Ancestralidade',
    desc: 'Projeto que explora a interseção entre conhecimento científico, cultura afro-brasileira e ancestralidade nas ciências exatas.',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&auto=format',
  },
  {
    tag: 'Formação',
    title: 'PROSEL — Programa de Seleção',
    desc: 'Processo seletivo para mulheres que desejam integrar o coletivo e desenvolver habilidades em ciência de dados.',
    img: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&h=500&fit=crop&auto=format',
  },
]

function Projects() {
  const { ref, inView } = useInView()
  return (
    <section id="projetos" className="bg-navy-light py-32 px-6 grain relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <p className="font-display text-pink text-sm tracking-[0.3em] uppercase mb-4">Iniciativas</p>
            <h2 className="font-display font-black uppercase text-white leading-[0.92]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
              O QUE<br /><span className="text-pink">FAZEMOS</span>
            </h2>
          </div>
          <a href="https://instagram.com/herdata.ba" target="_blank" rel="noreferrer"
            className="text-sm font-semibold text-white/50 hover:text-pink transition-colors underline underline-offset-4 font-display uppercase tracking-wider">
            Ver tudo no Instagram
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <article key={p.title}
              className={`group cursor-pointer transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="overflow-hidden rounded-xl mb-5 aspect-[16/10] bg-navy-mid">
                <img src={p.img} alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal" />
              </div>
              <span className="font-display text-xs text-pink tracking-[0.2em] uppercase">{p.tag}</span>
              <h3 className="font-display font-black text-white uppercase text-xl mt-2 mb-2 group-hover:text-pink transition-colors leading-tight">
                {p.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA / Manifesto ───────────────────────────────────────────────────────
function Manifesto() {
  const { ref, inView } = useInView()
  return (
    <section className="py-32 px-6 overflow-hidden relative grain" ref={ref}
      style={{ background: 'linear-gradient(135deg, #e8569a 0%, #9b4dca 60%, #5b2d8e 100%)' }}>
      {/* big decorative text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <p className="font-display font-black uppercase text-white/5 whitespace-nowrap"
          style={{ fontSize: '20vw' }}>HERDATA</p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`max-w-3xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-display text-sm tracking-[0.3em] uppercase text-white/60 mb-8">Nossa crença</p>
          <h2 className="font-display font-black uppercase text-white leading-[0.92] mb-10"
            style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}>
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

// ─── Contact / Join ─────────────────────────────────────────────────────────
function Contact() {
  const { ref, inView } = useInView()
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  function handle(e: React.FormEvent) { e.preventDefault(); if (email) setSent(true) }

  return (
    <section id="contato" className="bg-navy py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-display text-pink text-sm tracking-[0.3em] uppercase mb-6">Faça parte</p>
          <h2 className="font-display font-black uppercase text-white leading-[0.92] mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
            JUNTE-SE<br />
            AO<br />
            <span className="text-pink">MOVIMENTO</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            O HerData é um coletivo em crescimento. Se você é mulher e tem interesse em ciência de dados, IA ou estatística — seu lugar é aqui.
          </p>
          <div className="flex flex-col gap-3">
            <a href="https://instagram.com/herdata.ba" target="_blank" rel="noreferrer"
              className="flex items-center gap-3 text-white/60 hover:text-pink transition-colors group">
              <span className="w-10 h-10 rounded-full border border-white/10 group-hover:border-pink flex items-center justify-center text-sm transition-colors">IG</span>
              <span className="font-display font-bold uppercase">@herdata.ba</span>
            </a>
            <a href="https://herdata.ba" target="_blank" rel="noreferrer"
              className="flex items-center gap-3 text-white/60 hover:text-pink transition-colors group">
              <span className="w-10 h-10 rounded-full border border-white/10 group-hover:border-pink flex items-center justify-center text-sm transition-colors">🌐</span>
              <span className="font-display font-bold uppercase">herdata.ba</span>
            </a>
            <a href="https://linktr.ee/herdata.lab" target="_blank" rel="noreferrer"
              className="flex items-center gap-3 text-white/60 hover:text-pink transition-colors group">
              <span className="w-10 h-10 rounded-full border border-white/10 group-hover:border-pink flex items-center justify-center text-sm transition-colors">🔗</span>
              <span className="font-display font-bold uppercase">linktr.ee/herdata.lab</span>
            </a>
          </div>
        </div>

        <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {sent ? (
            <div className="bg-navy-mid border border-pink/30 rounded-2xl p-12 text-center">
              <p className="font-display font-black text-pink text-5xl uppercase mb-4">Bora!</p>
              <p className="text-white/70">Obrigada por se juntar ao HerData. Entraremos em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handle} className="bg-navy-mid border border-white/10 rounded-2xl p-8">
              <h3 className="font-display font-black text-white uppercase text-2xl mb-6">Fique por dentro</h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-white/50 text-sm mb-2 font-display uppercase tracking-wider">Nome</label>
                  <input type="text" placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-pink transition-colors" />
                </div>
                <div>
                  <label className="block text-white/50 text-sm mb-2 font-display uppercase tracking-wider">E-mail</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="seu@email.com" required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-pink transition-colors" />
                </div>
                <div>
                  <label className="block text-white/50 text-sm mb-2 font-display uppercase tracking-wider">Interesse</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 focus:outline-none focus:border-pink transition-colors">
                    <option value="" className="bg-navy">Selecione uma área</option>
                    <option value="dados" className="bg-navy">Ciência de Dados</option>
                    <option value="ia" className="bg-navy">Inteligência Artificial</option>
                    <option value="estatistica" className="bg-navy">Estatística</option>
                    <option value="tudo" className="bg-navy">Tudo acima!</option>
                  </select>
                </div>
                <button type="submit"
                  className="mt-2 w-full py-4 bg-pink text-white font-display font-black uppercase tracking-wider rounded-xl hover:bg-pink-light transition-colors">
                  Quero fazer parte
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

// ─── Footer ────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-navy-light border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div>
            <HerdataLogo size={40} textSize="text-2xl" />
            <p className="text-white/40 text-sm mt-4 max-w-xs leading-relaxed">
              Coletivo de Ciência de Dados. Representatividade de Gênero e Raça na STEM. Salvador, BA.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-2">
            {[
              { g: 'Coletivo', ls: ['Sobre', 'Missão', 'Valores', 'Projetos'] },
              { g: 'Redes', ls: ['Instagram', 'Linktree', 'herdata.ba', 'Contato'] },
            ].map(col => (
              <div key={col.g}>
                <p className="font-display text-xs text-white/30 tracking-[0.2em] uppercase mb-3">{col.g}</p>
                {col.ls.map(l => (
                  <p key={l}><a href="#" className="text-white/50 hover:text-pink text-sm transition-colors">{l}</a></p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-display uppercase tracking-wider">© 2024 HerData · Todos os direitos reservados</p>
          <p className="text-white/20 text-xs">Protagonismo · Transformação · Inovação · Diversidade</p>
        </div>
      </div>
    </footer>
  )
}

// ─── App ───────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Mission />
      <ValuesSection />
      <Projects />
      <Manifesto />
      <Contact />
      <Footer />
    </div>
  )
}
