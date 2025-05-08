
import Icon from '@/components/ui/icon';

// Компонент для отображения колонки ссылок
interface FooterLinksProps {
  title: string;
  links: {label: string; url: string}[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} className="text-gray-300 hover:text-blue-400 transition-colors">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const serviceLinks = [
    { label: 'Уборка квартир', url: '#' },
    { label: 'Уборка офисов', url: '#' },
    { label: 'Мытье окон', url: '#' },
    { label: 'Генеральная уборка', url: '#' },
    { label: 'Уборка после ремонта', url: '#' },
  ];

  const usefulLinks = [
    { label: 'О компании', url: '#' },
    { label: 'Цены', url: '#' },
    { label: 'Акции', url: '#' },
    { label: 'Блог', url: '#' },
    { label: 'Вакансии', url: '#' },
  ];

  const socialIcons = [
    { name: 'Instagram', url: '#' },
    { name: 'Facebook', url: '#' },
    { name: 'Twitter', url: '#' },
  ];

  return (
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
              {socialIcons.map((social, index) => (
                <a key={index} href={social.url} className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Icon name={social.name} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <FooterLinks title="Услуги" links={serviceLinks} />
          <FooterLinks title="Полезные ссылки" links={usefulLinks} />
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 ЧистоТа. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
