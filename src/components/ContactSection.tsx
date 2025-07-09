import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(98) 98404-8712',
      description: 'Ligue para falar conosco'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'cyberinfosjc@gmail.com',
      description: 'Envie sua mensagem'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Rua da Palmeira, 176, Centro',
      description: 'São João do Caru - Maranhão'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Segunda a Sexta',
      description: '08h às 12h - 14h às 17h'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Entre em{' '}
            <span className="text-transparent bg-clip-text bg-cyber-gradient">
              Contato
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tem alguma dúvida ou precisa de ajuda? Nossa equipe está pronta para atendê-lo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="hover:shadow-cyber transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-cyber-gradient rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-primary font-medium">{item.info}</p>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-cyber-gradient p-6 rounded-lg text-white">
              <h4 className="font-semibold mb-2">Dúvidas Frequentes</h4>
              <p className="text-sm opacity-90">
                Visite nossa seção de perguntas frequentes ou entre em contato 
                diretamente conosco através dos canais disponíveis.
              </p>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Envie sua Mensagem</h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome</label>
                      <Input placeholder="Seu nome completo" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">E-mail</label>
                      <Input type="email" placeholder="seu@email.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <Input placeholder="(00) 00000-0000" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Assunto</label>
                    <Input placeholder="Sobre que você gostaria de falar?" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensagem</label>
                    <Textarea 
                      placeholder="Descreva sua dúvida ou mensagem aqui..."
                      rows={5}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="cyber"
                    className="w-full"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;