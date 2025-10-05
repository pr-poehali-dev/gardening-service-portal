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
      name: 'Анна М.',
      text: 'Ребята подстригли газон, стало намного аккуратнее. Приедут еще раз через месяц.',
      rating: 5
    },
    {
      name: 'Сергей Иванов',
      text: 'Посадили яблони и вишни. Работу сделали хорошо, но хотелось бы чуть быстрее.',
      rating: 4
    },
    {
      name: 'Мария К.',
      text: 'Доволен обрезкой деревьев. Теперь сад выглядит ухоженно.',
      rating: 5
    },
    {
      name: 'Олег П.',
      text: 'Доволен работой. Все сделали аккуратно и быстро.',
      rating: 5
    },
    {
      name: 'Татьяна Л.',
      text: 'Хорошие специалисты. Газон как на картинке!',
      rating: 5
    },
    {
      name: 'Иван Смирнов',
      text: 'Цена устроила, качество тоже. Буду обращаться еще.',
      rating: 4
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

      <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-secondary via-white to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588773119486-07b5cc85e762?w=1920&q=80')] opacity-15 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <p className="text-primary font-semibold text-sm">🌱 Экологичные решения для вашего сада</p>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                Создаём сады вашей <span className="text-primary">мечты</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Профессиональный уход за садом с заботой о природе. Индивидуальный подход к каждому проекту.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8 py-6" onClick={() => scrollToSection('services')}>
                  Наши услуги
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => scrollToSection('contacts')}>
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="animate-slide-up relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
              <img 
                src="/img/8a970793-43e2-4c8d-86a2-68a5cfb7ade3.jpg" 
                alt="Красивый сад" 
                className="rounded-2xl shadow-2xl relative z-10 border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <p className="text-primary font-semibold text-sm">ЧТО МЫ ПРЕДЛАГАЕМ</p>
            </div>
            <h2 className="text-5xl font-bold mb-6">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по уходу за садом с гарантией качества
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up border-2 hover:border-primary/50 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <CardHeader className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon name={service.icon} size={36} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="details" className="border-none">
                      <AccordionTrigger className="text-primary font-bold text-lg hover:no-underline">
                        {service.price}
                        <Icon name="ChevronDown" className="ml-2" />
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground leading-relaxed">{service.details}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-secondary to-primary/5 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <p className="text-primary font-semibold text-sm">НАША ИСТОРИЯ</p>
              </div>
              <h2 className="text-5xl font-bold mb-6">О нас</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Мы — команда профессионалов, влюбленных в свое дело. Уже более 5 лет помогаем создавать 
                и поддерживать красивые сады по всей России.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Наша философия — бережное отношение к природе и индивидуальный подход к каждому клиенту. 
                Мы используем только экологичные материалы и современные технологии.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-5xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm font-medium text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-5xl font-bold text-primary mb-2">5</div>
                  <div className="text-sm font-medium text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-5xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm font-medium text-muted-foreground">Гарантия качества</div>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="bg-white rounded-2xl p-10 shadow-2xl border-2 border-primary/10">
                <h3 className="text-3xl font-bold mb-6 text-primary">Почему выбирают нас?</h3>
                <div className="space-y-5">
                  <div className="flex gap-4 items-start group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <Icon name="CheckCircle2" className="text-primary group-hover:text-white" size={20} />
                    </div>
                    <p className="text-lg leading-relaxed">Профессиональная команда с опытом работы более 5 лет</p>
                  </div>
                  <div className="flex gap-4 items-start group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <Icon name="CheckCircle2" className="text-primary group-hover:text-white" size={20} />
                    </div>
                    <p className="text-lg leading-relaxed">Использование только экологичных материалов</p>
                  </div>
                  <div className="flex gap-4 items-start group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <Icon name="CheckCircle2" className="text-primary group-hover:text-white" size={20} />
                    </div>
                    <p className="text-lg leading-relaxed">Индивидуальный подход к каждому проекту</p>
                  </div>
                  <div className="flex gap-4 items-start group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <Icon name="CheckCircle2" className="text-primary group-hover:text-white" size={20} />
                    </div>
                    <p className="text-lg leading-relaxed">Гарантия на все виды работ</p>
                  </div>
                  <div className="flex gap-4 items-start group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <Icon name="CheckCircle2" className="text-primary group-hover:text-white" size={20} />
                    </div>
                    <p className="text-lg leading-relaxed">Доступные цены и гибкая система скидок</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <p className="text-primary font-semibold text-sm">ЧТО ГОВОРЯТ КЛИЕНТЫ</p>
            </div>
            <h2 className="text-5xl font-bold mb-4">Отзывы наших клиентов</h2>
            <p className="text-xl text-muted-foreground">
              Что говорят о нас те, кто уже доверил нам свой сад
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-slide-up hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <CardHeader className="relative">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={24} className="text-yellow-400 fill-yellow-400 drop-shadow-sm" />
                    ))}
                  </div>
                  <CardTitle className="text-xl font-bold">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <Icon name="Quote" size={40} className="text-primary/10 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground italic text-base leading-relaxed relative z-10">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-gradient-to-br from-secondary to-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <p className="text-primary font-semibold text-sm">ПОЛЕЗНЫЕ СОВЕТЫ</p>
            </div>
            <h2 className="text-5xl font-bold mb-4">Блог</h2>
            <p className="text-xl text-muted-foreground">
              Полезные советы по уходу за садом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up border-2 hover:border-primary/30 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-2">
                    <Icon name="Calendar" size={16} />
                    {post.date}
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{post.preview}</p>
                  <Button variant="link" className="p-0 text-primary font-semibold group-hover:gap-2 transition-all">
                    Читать далее
                    <Icon name="ArrowRight" size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <p className="text-primary font-semibold text-sm">СВЯЗАТЬСЯ С НАМИ</p>
            </div>
            <h2 className="text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="animate-slide-up shadow-xl border-2 hover:border-primary/30 transition-all">
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
            <Card className="animate-slide-up shadow-xl border-2 hover:border-primary/30 transition-all">
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

      <footer className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/8a970793-43e2-4c8d-86a2-68a5cfb7ade3.jpg')] opacity-5 bg-cover bg-center"></div>
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