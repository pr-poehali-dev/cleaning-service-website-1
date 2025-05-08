
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
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
  );
};

export default Header;
