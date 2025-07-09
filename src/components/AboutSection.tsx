import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, BookOpen, Target, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: 'Certificado Reconhecido',
      description: 'Certificados digitais com validade nacional'
    },
    {
      icon: Users,
      title: 'Suporte Especializado',
      description: 'Professores experientes e suporte técnico'
    },
    {
      icon: Clock,
      title: 'Flexibilidade Total',
      description: 'Estude no seu ritmo, quando e onde quiser'
    },
    {
      icon: BookOpen,
      title: 'Material Atualizado',
      description: 'Conteúdo sempre atualizado com o mercado'
    },
    {
      icon: Target,
      title: 'Foco na Prática',
      description: 'Projetos reais e aplicações práticas'
    },
    {
      icon: Lightbulb,
      title: 'Metodologia Inovadora',
      description: 'Aprendizado interativo e dinâmico'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Sobre a{' '}
            <span className="text-transparent bg-clip-text bg-cyber-gradient">
              Cyber Informática
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Há anos transformando vidas através da educação profissionalizante. 
            Somos especialistas em cursos online que preparam você para o mercado de trabalho.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Nossa Missão</h3>
            <p className="text-muted-foreground">
              Democratizar o acesso à educação profissionalizante de qualidade, 
              oferecendo cursos práticos e atualizados que capacitem nossos alunos 
              para os desafios do mercado de trabalho moderno.
            </p>
            
            <h3 className="text-2xl font-bold">Nossa Visão</h3>
            <p className="text-muted-foreground">
              Ser a principal referência em educação profissionalizante online no Brasil, 
              reconhecida pela excelência do ensino e pelo impacto positivo na carreira 
              de nossos alunos.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-cyber-gradient rounded-lg text-white">
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-sm">Alunos Formados</div>
              </div>
              <div className="text-center p-4 bg-cyber-gradient rounded-lg text-white">
                <div className="text-2xl font-bold">19</div>
                <div className="text-sm">Cursos Disponíveis</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-cyber-gradient rounded-2xl flex items-center justify-center">
              <div className="text-white text-8xl font-bold opacity-20">CI</div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-cyber-glow">
              <Award className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-cyber transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-cyber-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="xl" 
            variant="cyber"
            onClick={() => document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conheça Nossos Cursos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;