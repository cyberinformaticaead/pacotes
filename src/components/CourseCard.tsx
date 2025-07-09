import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Clock, Users } from 'lucide-react';
import { Course } from '@/data/courses';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(course.price);

  const handleBuyClick = () => {
    if (course.checkoutUrl) {
      window.open(course.checkoutUrl, '_blank');
    } else {
      // For now, we'll just show an alert since the user will add checkout URLs later
      alert(`Redirecionando para checkout do curso: ${course.name}`);
    }
  };

  return (
    <Card className="h-full group hover:shadow-cyber transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={course.image || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop'} 
            alt={course.name}
            className="h-48 w-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-cyber-gradient opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          <Badge 
            variant={course.status === 'Ativo' ? 'default' : 'secondary'}
            className="absolute top-2 right-2 bg-primary text-primary-foreground"
          >
            {course.status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {course.name}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {course.description}
        </p>

        {course.features && (
          <div className="flex flex-wrap gap-1 mb-4">
            {course.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {course.features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{course.features.length - 3} mais
              </Badge>
            )}
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{course.rating || 4.8}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{course.students || 234}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration || '40h'}</span>
            </div>
          </div>
        </div>

        <div className="text-2xl font-bold text-primary mb-4">
          {formattedPrice}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={handleBuyClick}
          variant="cyber"
          className="w-full group"
        >
          <ShoppingCart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
          Comprar Agora
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;