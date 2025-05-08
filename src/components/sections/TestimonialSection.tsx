
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import Icon from '@/components/ui/icon';

interface TestimonialProps {
  text: string;
  name: string;
  position: string;
}

// Компонент для отображения одного отзыва
const TestimonialCard = ({ text, name, position }: TestimonialProps) => (
  <Card className="shadow-sm">
    <CardHeader>
      <div className="flex items-center mb-4">
        {Array(5).fill(0).map((_, i) => (
          <Icon key={i} name="Star" className="h-5 w-5 text-yellow-400" />
        ))}
      </div>
      <CardDescription className="text-gray-700 italic">"{text}"</CardDescription>
    </CardHeader>
    <CardFooter className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
        <span className="text-blue-500 font-semibold">{name.charAt(0)}</span>
      </div>
      <div>
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-gray-500">{position}</p>
      </div>
    </CardFooter>
  </Card>
);

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Отзывы наших клиентов</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Узнайте, что говорят о нас те, кто уже воспользовался нашими услугами</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              text={testimonial.text}
              name={testimonial.name}
              position={testimonial.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Данные для секции отзывов
const testimonials = [
  {
    text: 'Заказывала генеральную уборку квартиры. Очень довольна результатом! Всё сделали быстро и качественно.',
    name: 'Елена Смирнова',
    position: 'Владелец квартиры'
  },
  {
    text: 'Регулярно пользуемся услугами этой компании для уборки нашего офиса. Всегда идеальная чистота и порядок.',
    name: 'Александр Петров',
    position: 'Генеральный директор'
  },
  {
    text: 'Обращались для уборки после ремонта. Результат превзошел все ожидания. Рекомендую всем!',
    name: 'Ирина Ковалева',
    position: 'Дизайнер интерьеров'
  }
];

export default TestimonialSection;
