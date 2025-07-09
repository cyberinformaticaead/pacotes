import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';
import { courses } from '@/data/courses';
import CourseCard from './CourseCard';

const CoursesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filterPrice, setFilterPrice] = useState('all');

  const filteredCourses = courses
    .filter(course => 
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      course.status === 'Ativo'
    )
    .filter(course => {
      if (filterPrice === 'all') return true;
      if (filterPrice === 'under-1000') return course.price < 1000;
      if (filterPrice === '1000-2000') return course.price >= 1000 && course.price < 2000;
      if (filterPrice === 'over-2000') return course.price >= 2000;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  return (
    <section id="cursos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nossos{' '}
            <span className="text-transparent bg-clip-text bg-cyber-gradient">
              Cursos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha entre nossa seleção de cursos profissionalizantes e 
            comece sua jornada de transformação profissional hoje mesmo.
          </p>
        </div>

        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Pesquisar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Select value={filterPrice} onValueChange={setFilterPrice}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filtrar por preço" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os preços</SelectItem>
                <SelectItem value="under-1000">Até R$ 1.000</SelectItem>
                <SelectItem value="1000-2000">R$ 1.000 - R$ 2.000</SelectItem>
                <SelectItem value="over-2000">Acima de R$ 2.000</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nome (A-Z)</SelectItem>
                <SelectItem value="price-low">Menor preço</SelectItem>
                <SelectItem value="price-high">Maior preço</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Nenhum curso encontrado com os filtros aplicados.
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="cyber-outline"
            onClick={() => document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Todos os Cursos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;