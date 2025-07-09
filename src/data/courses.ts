export interface Course {
  id: string;
  name: string;
  price: number;
  status: 'Ativo' | 'Inativo';
  description?: string;
  features?: string[];
  checkoutUrl?: string;
  image?: string;
  category: string;
  duration?: string;
  students?: number;
  rating?: number;
}

export const courses: Course[] = [
  {
    id: 'atendente-farmacia',
    name: 'Atendente de Farmácia',
    price: 1799.90,
    status: 'Ativo',
    description: 'Aprenda a atender clientes em farmácias e drogarias com excelência e profissionalismo. Curso qualificado reconhecido.',
    features: ['Atendimento ao cliente', 'Medicamentos', 'Vendas farmacêuticas', 'Legislação'],
    checkoutUrl: 'https://www.cyberinformaticaead.com.br/c/4IP9XCFD8P',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
    category: 'Saúde',
    duration: '120h',
    students: 850,
    rating: 4.8
  },
  {
    id: 'administracao',
    name: 'Administração',
    price: 1579.90,
    status: 'Ativo',
    description: 'Domine as técnicas de administração e gestão empresarial. Forme-se para o mercado de trabalho.',
    features: ['Gestão empresarial', 'Finanças', 'Marketing', 'Recursos humanos'],
    checkoutUrl: 'https://www.cyberinformaticaead.com.br/c/9ICBH5IHEK',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    category: 'Negócios',
    duration: '100h',
    students: 1200,
    rating: 4.7
  },
  {
    id: 'contabilidade',
    name: 'Contabilidade',
    price: 1579.90,
    status: 'Ativo',
    description: 'Aprenda contabilidade do básico ao avançado com aplicações práticas no mercado de trabalho.',
    features: ['Balanços', 'Impostos', 'Demonstrativos', 'Legislação tributária'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
    category: 'Negócios',
    duration: '110h',
    students: 750,
    rating: 4.6
  },
  {
    id: 'ingles-basico',
    name: 'Inglês básico',
    price: 697.27,
    status: 'Ativo',
    description: 'Primeiros passos no idioma inglês com metodologia prática e dinâmica.',
    features: ['Vocabulário essencial', 'Gramática básica', 'Conversação', 'Listening'],
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop',
    category: 'Idiomas',
    duration: '60h',
    students: 920,
    rating: 4.5
  },
  {
    id: 'ingles-intermediario',
    name: 'Inglês intermediário',
    price: 797.27,
    status: 'Ativo',
    description: 'Evolua seu inglês para o nível intermediário com mais confiança e fluência.',
    features: ['Conversação avançada', 'Textos complexos', 'Listening', 'Writing'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
    category: 'Idiomas',
    duration: '80h',
    students: 680,
    rating: 4.6
  },
  {
    id: 'ingles-avancado',
    name: 'Inglês Avançado – Fluência, confiança e preparação para o mundo real!',
    price: 997.25,
    status: 'Ativo',
    description: 'Alcance a fluência em inglês com preparação completa para situações reais do dia a dia.',
    features: ['Fluência completa', 'Mundo real', 'Confiança', 'Comunicação avançada'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
    category: 'Idiomas',
    duration: '100h',
    students: 450,
    rating: 4.8
  },
  {
    id: 'ingles-business',
    name: 'Inglês Business – Fluência Profissional para o Mundo Corporativo',
    price: 997.29,
    status: 'Ativo',
    description: 'Inglês voltado para o ambiente corporativo e negócios internacionais.',
    features: ['Inglês corporativo', 'Negócios', 'Reuniões', 'Apresentações'],
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
    category: 'Idiomas',
    duration: '90h',
    students: 380,
    rating: 4.9
  },
  {
    id: 'ingles-turismo',
    name: 'Inglês para Turismo e Hotelaria – Atenda com excelência e fale com o mundo',
    price: 697.29,
    status: 'Ativo',
    description: 'Inglês especializado para profissionais do turismo e hotelaria.',
    features: ['Turismo', 'Hotelaria', 'Atendimento', 'Comunicação internacional'],
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
    category: 'Idiomas',
    duration: '70h',
    students: 520,
    rating: 4.7
  },
  {
    id: 'programacao',
    name: 'Curso de Programação – Comece sua carreira em tecnologia do zero!',
    price: 1197.90,
    status: 'Ativo',
    description: 'Aprenda programação do zero e inicie sua carreira na tecnologia. Do básico ao avançado.',
    features: ['Lógica de programação', 'Desenvolvimento web', 'Projetos práticos', 'Carreira tech'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    category: 'Tecnologia',
    duration: '150h',
    students: 1100,
    rating: 4.9
  },
  {
    id: 'recursos-humanos',
    name: 'Recursos Humanos – Comece sua carreira no setor administrativo',
    price: 697.90,
    status: 'Ativo',
    description: 'Formação completa em RH para atuar no setor administrativo com excelência.',
    features: ['Gestão de pessoas', 'Recrutamento', 'Treinamento', 'Legislação trabalhista'],
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&h=300&fit=crop',
    category: 'Negócios',
    duration: '80h',
    students: 670,
    rating: 4.6
  },
  {
    id: 'financeiro',
    name: 'Departamento Financeiro – Formação prática para atuar no setor que move as empresas',
    price: 797.29,
    status: 'Ativo',
    description: 'Formação prática para atuar no departamento financeiro das empresas.',
    features: ['Gestão financeira', 'Análise de dados', 'Controle', 'Relatórios'],
    image: 'https://images.unsplash.com/photo-1554224154-26032fced8bd?w=400&h=300&fit=crop',
    category: 'Negócios',
    duration: '90h',
    students: 580,
    rating: 4.7
  },
  {
    id: 'vendedor-loja',
    name: 'Vendedor de Loja – Torne-se um profissional de vendas com resultado e empregabilidade',
    price: 747.29,
    status: 'Ativo',
    description: 'Torne-se um profissional de vendas com alta empregabilidade e resultados comprovados.',
    features: ['Técnicas de vendas', 'Atendimento', 'Negociação', 'Resultados'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    category: 'Vendas',
    duration: '60h',
    students: 490,
    rating: 4.5
  },
  {
    id: 'influencer',
    name: 'Influencer Profissional – Construa sua marca e ganhe dinheiro com o que você posta',
    price: 797.90,
    status: 'Ativo',
    description: 'Construa sua marca pessoal e monetize suas redes sociais de forma profissional.',
    features: ['Personal branding', 'Redes sociais', 'Monetização', 'Conteúdo digital'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
    category: 'Marketing Digital',
    duration: '70h',
    students: 720,
    rating: 4.8
  },
  {
    id: 'designer-interiores',
    name: 'Designer de Interiores – Comece a criar projetos incríveis em 3D!',
    price: 747.90,
    status: 'Ativo',
    description: 'Aprenda design de interiores e crie projetos incríveis em 3D com software profissional.',
    features: ['Design 3D', 'Decoração', 'Projetos', 'Softwares especializados'],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    category: 'Design',
    duration: '100h',
    students: 420,
    rating: 4.7
  },
  {
    id: 'design-grafico',
    name: 'Design Gráfico',
    price: 2997.00,
    status: 'Ativo',
    description: 'Curso completo de design gráfico com ferramentas profissionais do mercado.',
    features: ['Adobe Creative', 'Identidade visual', 'Impressos', 'Design digital'],
    checkoutUrl: 'https://www.cyberinformaticaead.com.br/c/BWDYTV5BZE',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    category: 'Design',
    duration: '200h',
    students: 950,
    rating: 4.9
  },
  {
    id: 'empreendedor',
    name: 'Empreendedor Profissional',
    price: 2219.40,
    status: 'Ativo',
    description: 'Desenvolva mindset empreendedor e aprenda a criar seu próprio negócio de sucesso.',
    features: ['Mindset', 'Plano de negócios', 'Gestão', 'Inovação'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    category: 'Negócios',
    duration: '120h',
    students: 320,
    rating: 4.8
  },
  {
    id: 'supermercado',
    name: 'Supermercado',
    price: 1968.50,
    status: 'Ativo',
    description: 'Formação completa para trabalhar no setor supermercadista com técnicas modernas.',
    features: ['Gestão de estoque', 'Atendimento', 'Operações', 'Varejo'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    category: 'Varejo',
    duration: '90h',
    students: 280,
    rating: 4.6
  },
  {
    id: 'edicao-video',
    name: 'Edição de Vídeo & Motion Design Pro',
    price: 2409.70,
    status: 'Ativo',
    description: 'Curso profissional de edição de vídeo e motion design. Torne-se um Editor Profissional com Adobe Premiere Pro.',
    features: ['Edição profissional', 'Motion graphics', 'Efeitos visuais', 'Produção audiovisual'],
    checkoutUrl: 'https://www.cyberinformaticaead.com.br/c/DZMDMEB6S8',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop',
    category: 'Criativo',
    duration: '180h',
    students: 620,
    rating: 4.8
  },
  {
    id: 'operador-computador',
    name: 'Operador de Computador - Básico',
    price: 997.00,
    status: 'Ativo',
    description: 'Aprenda informática básica e torne-se um operador de computador qualificado.',
    features: ['Windows', 'Office', 'Internet', 'Informática básica'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
    category: 'Informática',
    duration: '50h',
    students: 890,
    rating: 4.4
  }
];