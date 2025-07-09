export interface Course {
  id: string;
  name: string;
  price: number;
  status: 'Ativo' | 'Inativo';
  description?: string;
  features?: string[];
  checkoutUrl?: string;
}

export const courses: Course[] = [
  {
    id: 'atendente-farmacia',
    name: 'Atendente de Farmácia',
    price: 1799.90,
    status: 'Ativo',
    description: 'Aprenda a atender clientes em farmácias e drogarias com excelência e profissionalismo.',
    features: ['Atendimento ao cliente', 'Medicamentos', 'Vendas farmacêuticas', 'Legislação']
  },
  {
    id: 'administracao',
    name: 'Administração',
    price: 1579.90,
    status: 'Ativo',
    description: 'Domine as técnicas de administração e gestão empresarial.',
    features: ['Gestão empresarial', 'Finanças', 'Marketing', 'Recursos humanos']
  },
  {
    id: 'contabilidade',
    name: 'Contabilidade',
    price: 1579.90,
    status: 'Ativo',
    description: 'Aprenda contabilidade do básico ao avançado com aplicações práticas.',
    features: ['Balanços', 'Impostos', 'Demonstrativos', 'Legislação tributária']
  },
  {
    id: 'ingles-basico',
    name: 'Inglês básico',
    price: 697.27,
    status: 'Ativo',
    description: 'Primeiros passos no idioma inglês com metodologia prática.',
    features: ['Vocabulário essencial', 'Gramática básica', 'Conversação', 'Listening']
  },
  {
    id: 'ingles-intermediario',
    name: 'Inglês intermediário',
    price: 797.27,
    status: 'Ativo',
    description: 'Evolua seu inglês para o nível intermediário com mais confiança.',
    features: ['Conversação avançada', 'Textos complexos', 'Listening', 'Writing']
  },
  {
    id: 'ingles-avancado',
    name: 'Inglês Avançado – Fluência, confiança e preparação para o mundo real!',
    price: 997.25,
    status: 'Ativo',
    description: 'Alcance a fluência em inglês com preparação completa para situações reais.',
    features: ['Fluência completa', 'Mundo real', 'Confiança', 'Comunicação avançada']
  },
  {
    id: 'ingles-business',
    name: 'Inglês Business – Fluência Profissional para o Mundo Corporativo',
    price: 997.29,
    status: 'Ativo',
    description: 'Inglês voltado para o ambiente corporativo e negócios internacionais.',
    features: ['Inglês corporativo', 'Negócios', 'Reuniões', 'Apresentações']
  },
  {
    id: 'ingles-turismo',
    name: 'Inglês para Turismo e Hotelaria – Atenda com excelência e fale com o mundo',
    price: 697.29,
    status: 'Ativo',
    description: 'Inglês especializado para profissionais do turismo e hotelaria.',
    features: ['Turismo', 'Hotelaria', 'Atendimento', 'Comunicação internacional']
  },
  {
    id: 'programacao',
    name: 'Curso de Programação – Comece sua carreira em tecnologia do zero!',
    price: 1197.90,
    status: 'Ativo',
    description: 'Aprenda programação do zero e inicie sua carreira na tecnologia.',
    features: ['Lógica de programação', 'Desenvolvimento web', 'Projetos práticos', 'Carreira tech']
  },
  {
    id: 'recursos-humanos',
    name: 'Recursos Humanos – Comece sua carreira no setor administrativo',
    price: 697.90,
    status: 'Ativo',
    description: 'Formação completa em RH para atuar no setor administrativo.',
    features: ['Gestão de pessoas', 'Recrutamento', 'Treinamento', 'Legislação trabalhista']
  },
  {
    id: 'financeiro',
    name: 'Departamento Financeiro – Formação prática para atuar no setor que move as empresas',
    price: 797.29,
    status: 'Ativo',
    description: 'Formação prática para atuar no departamento financeiro das empresas.',
    features: ['Gestão financeira', 'Análise de dados', 'Controle', 'Relatórios']
  },
  {
    id: 'vendedor-loja',
    name: 'Vendedor de Loja – Torne-se um profissional de vendas com resultado e empregabilidade',
    price: 747.29,
    status: 'Ativo',
    description: 'Torne-se um profissional de vendas com alta empregabilidade.',
    features: ['Técnicas de vendas', 'Atendimento', 'Negociação', 'Resultados']
  },
  {
    id: 'influencer',
    name: 'Influencer Profissional – Construa sua marca e ganhe dinheiro com o que você posta',
    price: 797.90,
    status: 'Ativo',
    description: 'Construa sua marca pessoal e monetize suas redes sociais.',
    features: ['Personal branding', 'Redes sociais', 'Monetização', 'Conteúdo digital']
  },
  {
    id: 'designer-interiores',
    name: 'Designer de Interiores – Comece a criar projetos incríveis em 3D!',
    price: 747.90,
    status: 'Ativo',
    description: 'Aprenda design de interiores e crie projetos incríveis em 3D.',
    features: ['Design 3D', 'Decoração', 'Projetos', 'Softwares especializados']
  },
  {
    id: 'design-grafico',
    name: 'Design Gráfico',
    price: 2997.00,
    status: 'Ativo',
    description: 'Curso completo de design gráfico com ferramentas profissionais.',
    features: ['Adobe Creative', 'Identidade visual', 'Impressos', 'Design digital']
  },
  {
    id: 'empreendedor',
    name: 'Empreendedor Profissional',
    price: 2219.40,
    status: 'Ativo',
    description: 'Desenvolva mindset empreendedor e aprenda a criar seu próprio negócio.',
    features: ['Mindset', 'Plano de negócios', 'Gestão', 'Inovação']
  },
  {
    id: 'supermercado',
    name: 'Supermercado',
    price: 1968.50,
    status: 'Ativo',
    description: 'Formação completa para trabalhar no setor supermercadista.',
    features: ['Gestão de estoque', 'Atendimento', 'Operações', 'Varejo']
  },
  {
    id: 'edicao-video',
    name: 'Edição de Vídeo & Motion Design Pro',
    price: 2409.70,
    status: 'Ativo',
    description: 'Curso profissional de edição de vídeo e motion design.',
    features: ['Edição profissional', 'Motion graphics', 'Efeitos visuais', 'Produção audiovisual']
  },
  {
    id: 'operador-computador',
    name: 'Operador de Computador - Básico',
    price: 997.00,
    status: 'Ativo',
    description: 'Aprenda informática básica e torne-se um operador de computador.',
    features: ['Windows', 'Office', 'Internet', 'Informática básica']
  }
];