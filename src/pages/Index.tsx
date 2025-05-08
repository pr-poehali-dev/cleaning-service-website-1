
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном проекте здесь будет отправка данных на сервер
    alert(`Спасибо за заявку, ${name}! Мы свяжемся с вами в ближайшее время.`);
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="min-h-screen">
      {/* Навигация */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Icon name="Sparkles" className="h-8 w-8 text-blue-500 mr-2" />
            <span className="text-xl font-bold text-blue-600">ЧистоТа</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-gray-600 hover:text-blue-500 font-medium transition-colors">Услуги</a>
            <a href="#features" className="text-gray-600 hover:text-blue-500 font-medium transition-colors">Преимущества</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-500 font-medium transition-colors">Отзывы</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500 font-medium transition-colors">Контакты</a>
          </nav>
          <Button className="bg-blue-500 hover:bg-blue-600">
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Главный блок */}
      <section className="relative bg-gradient-to-r from-blue-500 to-blue-600 py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Профессиональный клининг для вашего комфорта</h1>
            <p className="text-xl text-blue-100 mb-8">Мы обеспечиваем идеальную чистоту в любых помещениях, используя экологичные средства и современное оборудование.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-600">
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Секция услуг */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Мы предлагаем полный спектр клининговых услуг для жилых и коммерческих помещений</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">Подробнее</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Почему выбирают нас</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Более 5 лет опыта и сотни довольных клиентов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Секция отзывов */}
      <section id="testimonials" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Отзывы наших клиентов</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Узнайте, что говорят о нас те, кто уже воспользовался нашими услугами</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-sm">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Icon name="Star" className="h-5 w-5 text-yellow-400" />
                    <Icon name="Star" className="h-5 w-5 text-yellow-400" />
                    <Icon name="Star" className="h-5 w-5 text-yellow-400" />
                    <Icon name="Star" className="h-5 w-5 text-yellow-400" />
                    <Icon name="Star" className="h-5 w-5 text-yellow-400" />
                  </div>
                  <CardDescription className="text-gray-700 italic">"{testimonial.text}"</CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-blue-500 font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Контактная форма */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Оставьте заявку</h2>
              <p className="text-gray-600 mb-8">Заполните форму, и мы свяжемся с вами для консультации и расчета стоимости услуг</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                  <Input 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Введите ваше имя"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                  <Input 
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Введите ваш телефон"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                  <Textarea 
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Опишите, что необходимо сделать"
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                  Отправить заявку
                </Button>
              </form>
            </div>
            <div className="lg:w-1/2 bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Icon name="MapPin" className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-gray-600">г. Москва, ул. Чистопрудная, д. 10, офис 200</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Icon name="Phone" className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Icon name="Mail" className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">info@chistota.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Icon name="Clock" className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Время работы</h4>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Sparkles" className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-xl font-bold text-white">ЧистоТа</span>
              </div>
              <p className="text-gray-300 mb-4">Профессиональные клининговые услуги для дома и бизнеса</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Icon name="Instagram" className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Icon name="Facebook" className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Icon name="Twitter" className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Уборка квартир</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Уборка офисов</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Мытье окон</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Генеральная уборка</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Уборка после ремонта</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Полезные ссылки</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">О компании</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Цены</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Акции</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Блог</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Вакансии</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 ЧистоТа. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
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

export default Index;
