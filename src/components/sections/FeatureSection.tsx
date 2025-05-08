
import Icon from '@/components/ui/icon';

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

// Компонент для отображения одного преимущества
const FeatureItem = ({ title, description, icon }: FeatureProps) => (
  <div className="text-center">
    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
      <Icon name={icon} className="h-8 w-8 text-blue-500" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Почему выбирают нас</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Более 5 лет опыта и сотни довольных клиентов</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureItem 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Данные для секции преимуществ
const features = [
  {
    title: 'Опытные сотрудники',
    description: 'Наши специалисты проходят профессиональное обучение и имеют большой опыт работы',
    icon: 'Users'
  },
  {
    title: 'Современное оборудование',
    description: 'Используем профессиональную технику ведущих производителей',
    icon: 'Wrench'
  },
  {
    title: 'Безопасные средства',
    description: 'Применяем только сертифицированные экологичные чистящие средства',
    icon: 'ShieldCheck'
  },
  {
    title: 'Гарантия качества',
    description: 'Предоставляем гарантию на все виды выполненных работ',
    icon: 'Award'
  }
];

export default FeatureSection;
