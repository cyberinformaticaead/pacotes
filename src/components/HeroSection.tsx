import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Users, BookOpen, Award } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      <div className="absolute inset-0 bg-cyber-gradient-hero/80"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-glow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-blue-light/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Transforme sua{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-glow">
              carreira
            </span>
            {' '}com nossos cursos
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in delay-300">
            Aprenda novas habilidades e conquiste o mercado de trabalho com os melhores 
            cursos profissionalizantes online da Cyber Informática.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-500">
            <Button 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 shadow-cyber-glow group"
              onClick={() => document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Cursos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="xl" 
              variant="hero"
            >
              <Play className="mr-2 h-5 w-5" />
              Assistir Demonstração
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in delay-700">
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">+5000</h3>
              <p className="text-white/80">Alunos Formados</p>
            </div>
            
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">19</h3>
              <p className="text-white/80">Cursos Disponíveis</p>
            </div>
            
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">95%</h3>
              <p className="text-white/80">Taxa de Aprovação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;