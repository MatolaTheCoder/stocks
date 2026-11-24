export const navLinks = [
  { label: 'Percurso', href: '#percurso' },
  { label: 'Projecto', href: '#projecto' },
  { label: 'Visão', href: '#visao' },
  { label: 'Prospectiva', href: '#prospectiva' },
]

export const profile = {
  name: 'Jay',
  greeting: 'Olá, eu sou o Jay',
  role: 'Engenheiro de software a construir com calma.',
  intro: 'Desenvolvo produtos digitais simples de usar, do primeiro esboço até ao código em produção.',
  cv: '', // coloca o ficheiro em public/cv.pdf e muda para '/cv.pdf'
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  /** Caminho em public/, ex.: '/images/projectos/loja.webp'. Sem imagem mostra um fundo de reserva. */
  image?: string
  imageAlt?: string
  href?: string
}

// TODO: substituir pelos 4 projectos reais
export const projects: Project[] = [
  { id: 'p1', title: 'Projecto 1', description: 'Descrição curta do projecto: o problema, a solução e o resultado.', tags: ['Nuxt', 'Tailwind'] },
  { id: 'p2', title: 'Projecto 2', description: 'Descrição curta do projecto: o problema, a solução e o resultado.', tags: ['Vue', 'API'] },
  { id: 'p3', title: 'Projecto 3', description: 'Descrição curta do projecto: o problema, a solução e o resultado.', tags: ['TypeScript'] },
  { id: 'p4', title: 'Projecto 4', description: 'Descrição curta do projecto: o problema, a solução e o resultado.', tags: ['Node', 'SQL'] },
]


// TODO: substituir pelo percurso real
export const journey = [
  { period: '2024 – hoje', title: 'Cargo ou projecto actual', text: 'Uma ou duas frases sobre o que fazes e o que aprendeste.' },
  { period: '2022 – 2024', title: 'Etapa anterior', text: 'Uma ou duas frases sobre o que fazes e o que aprendeste.' },
  { period: '2020 – 2022', title: 'Primeiros passos', text: 'Uma ou duas frases sobre o que fazes e o que aprendeste.' },
]

// TODO: escrever a visão real
export const vision = {
  title: 'Software simples, feito com cuidado.',
  text: 'Parágrafo curto sobre como pensas o trabalho: o que valorizas, como decides e o que queres que os teus produtos façam pelas pessoas.',
}

// TODO: escrever a prospectiva real
export const outlook = [
  { title: 'O que quero aprender', text: 'Uma frase sobre a próxima área de estudo.' },
  { title: 'O que quero construir', text: 'Uma frase sobre o tipo de produto ou projecto que procuras.' },
  { title: 'Onde quero chegar', text: 'Uma frase sobre o objectivo a médio prazo.' },
]

// TODO: contactos reais
export const contact = {
  email: 'ola@exemplo.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
}
