export const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Missão', href: '#missao' },
  { label: 'Valores', href: '#valores' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export const VALUES = [
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

const PROJECT_ASSETS = {
  formacaoInterna: 'formacao-interna',
  meninasCiencia: 'projeto-meninas-ciencia-dados',
  recepcaoMembros: 'recepcao-novos-membros-2026-2',
  staatweek: 'staatweek',
} as const

const projectImages = import.meta.glob<string>('../assets/projects/**/*.jpeg', {
  eager: true,
  import: 'default',
  query: '?url',
})

const makeProjectImages = (folder: string, names: string[]) =>
  names.map((name) => projectImages[`../assets/projects/${folder}/${name}`])

export const PROJECTS = [
  {
    tag: 'Formação',
    title: 'HERDATA START',
    desc: 'Programa de formação interna voltado para dados, estatística, probabilidade e desenvolvimento de base para atuação em ciência de dados.',
    slides: makeProjectImages(PROJECT_ASSETS.formacaoInterna, [
      'WhatsApp Image 2026-10-10 at 10.12.43.jpeg',
      'WhatsApp Image 2026-10-10 at 10.39.49.jpeg',
      'WhatsApp Image 2026-10-10 at 12.50.29.jpeg',
    ]),
  },
  {
    tag: 'Projeto',
    title: 'Projeto meninas na ciência de dados',
    desc: 'Iniciativas com foco em educação, representatividade e acesso ao conhecimento em dados, tecnologia e pesquisa.',
    slides: makeProjectImages(PROJECT_ASSETS.meninasCiencia, [
      'WhatsApp Image 2026-09-19 at 13.49.54 (1).jpeg',
      'WhatsApp Image 2026-09-19 at 13.49.54.jpeg',
      'WhatsApp Image 2026-09-19 at 13.49.55 (1).jpeg',
      'WhatsApp Image 2026-09-19 at 13.49.55 (2).jpeg',
      'WhatsApp Image 2026-09-19 at 13.49.55.jpeg',
    ]),
  },
  {
    tag: 'Evento',
    title: 'Recepção de novos membros 2026.2',
    desc: 'Acolhimento, conexão e integração de novas pessoas ao coletivo para fortalecer a comunidade HerData.',
    slides: makeProjectImages(PROJECT_ASSETS.recepcaoMembros, [
      'WhatsApp Image 2026-09-19 at 13.47.14.jpeg',
    ]),
  },
  {
    tag: 'Evento',
    title: 'StatWeek',
    desc: 'A Semana de Estatística da UFBA, com atividades, eventos e mobilização em torno de estatística, ciência e protagonismo feminino.',
    slides: makeProjectImages(PROJECT_ASSETS.staatweek, [
      'WhatsApp Image 2026-09-19 at 13.14.46 (1).jpeg',
      'WhatsApp Image 2026-09-19 at 13.14.46 (2).jpeg',
      'WhatsApp Image 2026-09-19 at 13.14.46 (3).jpeg',
      'WhatsApp Image 2026-09-19 at 13.14.46.jpeg',
      'WhatsApp Image 2026-09-19 at 13.14.47.jpeg',
    ]),
  },
]
