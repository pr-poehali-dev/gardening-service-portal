import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Scissors',
      title: 'Стрижка газона',
      description: 'Профессиональная стрижка и уход за газоном',
      price: 'от 500 ₽/м²',
      details: 'Регулярная стрижка, выравнивание краев, уборка скошенной травы. Используем профессиональное оборудование для идеального результата.'
    },
    {
      icon: 'TreeDeciduous',
      title: 'Посадка деревьев',
      description: 'Подбор и высадка деревьев',
      price: 'от 2500 ₽',
      details: 'Консультация по выбору деревьев, подготовка посадочных ям, профессиональная посадка с учетом особенностей участка и климата.'
    },
    {
      icon: 'Leaf',
      title: 'Уход за садом',
      description: 'Комплексный сезонный уход',
      price: 'от 3000 ₽/мес',
      details: 'Регулярный уход: полив, прополка, подкормка, борьба с вредителями, подготовка к зиме и весенние работы.'
    },
    {
      icon: 'Scissors',
      title: 'Обрезка деревьев',
      description: 'Формирующая и санитарная обрезка',
      price: 'от 2000 ₽',
      details: 'Санитарная и декоративная обрезка деревьев и кустарников, удаление сухих веток, формирование кроны.'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      text: 'Замечательная работа! Мой сад преобразился до неузнаваемости. Профессиональный подход и внимание к деталям.',
      rating: 5
    },
    {
      name: 'Дмитрий Сидоров',
      text: 'Очень довольны результатом. Газон выглядит идеально, а цветники радуют глаз. Рекомендую!',
      rating: 5
    },
    {
      name: 'Елена Иванова',
      text: 'Отличный сервис! Помогли с ландшафтным дизайном участка. Все сделано качественно и в срок.',
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: 'Как подготовить сад к зиме',
      date: '15 октября 2024',
      preview: 'Осенние работы в саду — важный этап подготовки растений к холодам...',
      image: '/img/8a970793-43e2-4c8d-86a2-68a5cfb7ade3.jpg'
    },
    {
      title: 'Топ-10 растений для тенистых участков',
      date: '8 октября 2024',
      preview: 'Не все растения любят солнце. Рассказываем о лучших вариантах для тени...',
      image: '/img/8a970793-43e2-4c8d-86a2-68a5cfb7ade3.jpg'
    },
    {
      title: 'Системы автополива: виды и преимущества',
      date: '1 октября 2024',
      preview: 'Автоматический полив экономит время и обеспечивает растениям правильный уход...',
      image: '/img/8a970793-43e2-4c8d-86a2-68a5cfb7ade3.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sprout" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">ЭкоСад</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('blog')} className="hover:text-primary transition-colors">
                Блог
              </button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <Button>Заказать звонок</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Создаём сады вашей мечты
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональный уход за садом и ландшафтный дизайн с заботой о природе
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('services')}>
                  Наши услуги
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="/img/8a970793-43e2-4c8d-86a2-68a5cfb7ade3.jpg" 
                alt="Красивый сад" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр услуг по уходу за садом и ландшафтному дизайну
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-slide-up">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="details" className="border-none">
                      <AccordionTrigger className="text-primary font-semibold">
                        {service.price}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{service.details}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">О нас</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Мы — команда профессионалов, влюбленных в свое дело. Уже более 10 лет помогаем создавать 
                и поддерживать красивые сады по всей России.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Наша философия — бережное отношение к природе и индивидуальный подход к каждому клиенту. 
                Мы используем только экологичные материалы и современные технологии.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Гарантия качества</div>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="bg-white rounded-lg p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Почему выбирают нас?</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" />
                    <p>Профессиональная команда с опытом работы более 10 лет</p>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" />
                    <p>Использование только экологичных материалов</p>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" />
                    <p>Индивидуальный подход к каждому проекту</p>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" />
                    <p>Гарантия на все виды работ</p>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" />
                    <p>Доступные цены и гибкая система скидок</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
            <p className="text-xl text-muted-foreground">
              Что говорят о нас те, кто уже доверил нам свой сад
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-slide-up">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Блог</h2>
            <p className="text-xl text-muted-foreground">
              Полезные советы по уходу за садом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow animate-slide-up">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.preview}</p>
                  <Button variant="link" className="p-0">
                    Читать далее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle>Наши контакты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3 items-center">
                  <Icon name="Phone" className="text-primary" />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <Icon name="Mail" className="text-primary" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@ekosad.ru</div>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <Icon name="MapPin" className="text-primary" />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Садовая, д. 10</div>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <Icon name="Clock" className="text-primary" />
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Вс: 9:00 - 20:00</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
                <CardDescription>Мы ответим в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Сообщение" 
                      rows={4}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Sprout" size={24} />
              <span className="text-xl font-bold">ЭкоСад</span>
            </div>
            <div className="text-sm">
              © 2024 ЭкоСад. Все права защищены.
            </div>
            <div className="flex gap-4">
              <Icon name="Instagram" size={24} className="cursor-pointer hover:opacity-80" />
              <Icon name="Facebook" size={24} className="cursor-pointer hover:opacity-80" />
              <Icon name="Twitter" size={24} className="cursor-pointer hover:opacity-80" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}