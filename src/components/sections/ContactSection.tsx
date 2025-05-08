
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

// Компонент с контактной информацией
const ContactInfo = () => (
  <div className="lg:w-1/2 bg-blue-50 rounded-xl p-8">
    <h3 className="text-2xl font-bold text-gray-800 mb-6">Контактная информация</h3>
    <div className="space-y-6">
      <ContactInfoItem icon="MapPin" title="Адрес" text="г. Москва, ул. Чистопрудная, д. 10, офис 200" />
      <ContactInfoItem icon="Phone" title="Телефон" text="+7 (999) 123-45-67" />
      <ContactInfoItem icon="Mail" title="Email" text="info@chistota.ru" />
      <ContactInfoItem 
        icon="Clock" 
        title="Время работы" 
        text={<>Пн-Пт: 9:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</>} 
      />
    </div>
  </div>
);

interface ContactInfoItemProps {
  icon: string;
  title: string;
  text: React.ReactNode;
}

// Компонент для элемента контактной информации
const ContactInfoItem = ({ icon, title, text }: ContactInfoItemProps) => (
  <div className="flex items-start">
    <div className="mr-4 mt-1">
      <Icon name={icon} className="h-5 w-5 text-blue-500" />
    </div>
    <div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
);

// Компонент формы обратной связи
const ContactForm = () => {
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
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
