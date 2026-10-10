import { BrandLogo } from '../ui/BrandLogo'

export function Footer() {
  return (
    <footer className="bg-navy-light border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div>
            <BrandLogo size={40} textSize="text-2xl" />
            <p className="text-white/40 text-sm mt-4 max-w-xs leading-relaxed">
              Coletivo de Ciência de Dados. Representatividade de Gênero e Raça na STEM. Salvador, BA.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-2">
            {[
              { g: 'Coletivo', ls: ['Sobre', 'Missão', 'Valores', 'Projetos'] },
              { g: 'Redes', ls: ['Instagram', 'Linktree', 'herdata.ba', 'Contato'] },
            ].map((col) => (
              <div key={col.g}>
                <p className="font-display text-xs text-white/30 tracking-[0.2em] uppercase mb-3">{col.g}</p>
                {col.ls.map((item) => (
                  <p key={item}>
                    <a href="#" className="text-white/50 hover:text-pink text-sm transition-colors">{item}</a>
                  </p>
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
