
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
}

// Отдельный компонент для карточки услуги
const ServiceCard = ({ title, description, icon }: ServiceProps) => (
  <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
    <CardHeader>
      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
        <Icon name={icon} className="h-6 w-6 text-blue-500" />
      </div>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardFooter>
      <Button variant="outline" className="w-full">Подробнее</Button>
    </CardFooter>
  </Card>
);

const ServiceSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Наши услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Мы предлагаем полный спектр клининговых услуг для жилых и коммерческих помещений</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Данные для секции услуг
const services = [
  {
    title: 'Уборка квартир и домов',
    description: 'Регулярная и генеральная уборка жилых помещений с использованием профессиональных средств',
    icon: 'Home'
  },
  {
    title: 'Уборка офисов и коммерческих помещений',
    description: 'Поддержание чистоты в офисах, магазинах и других коммерческих объектах',
    icon: 'Building2'
  },
  {
    title: 'Мытьё окон и фасадов',
    description: 'Профессиональная очистка окон, витрин и фасадов зданий на любой высоте',
    icon: 'PanelTop'
  },
  {
    title: 'Химчистка мебели и ковров',
    description: 'Глубокая чистка мягкой мебели, ковров и текстильных покрытий',
    icon: 'Sofa'
  },
  {
    title: 'Уборка после ремонта',
    description: 'Комплексная очистка помещений от строительной пыли и загрязнений',
    icon: 'Construction'
  },
  {
    title: 'Дезинфекция помещений',
    description: 'Обработка помещений с использованием профессиональных дезинфицирующих средств',
    icon: 'ShieldCheck'
  }
];

export default ServiceSection;
