import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Clock, Users, Award } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      alt: "Elegância feminina"
    },
    {
      image: "https://images.pexels.com/photos/3738974/pexels-photo-3738974.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      alt: "Beleza natural"
    },
    {
      image: "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      alt: "Sofisticação"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-neutral-50 to-amber-50">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/40 to-transparent"></div>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full p-3"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full p-3"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                  Transforme Seus Glúteos
                </h1>
                <h2 className="text-2xl lg:text-3xl font-serif text-amber-200">
                  A Arte da Harmonização para a Mulher Moderna
                </h2>
                <p className="text-xl text-neutral-100 max-w-2xl leading-relaxed">
                  Conquiste o bumbum dos seus sonhos de forma segura, natural e sem cirurgia, 
                  com a expertise do Dr. Hélio Millan.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-white">Resultados naturais e harmoniosos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-white">Procedimento minimamente invasivo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-white">Aumento da autoestima e confiança</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-white">Segurança comprovada</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <button className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full md:w-auto animate-pulse">
                  <span className="flex items-center justify-center space-x-3">
                    <span>📱</span>
                    <span>Agende Sua Avaliação Gratuita via WhatsApp</span>
                  </span>
                </button>
                
                <div className="flex items-center space-x-3 text-amber-200">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">Últimas vagas para avaliação gratuita este mês!</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">+1000</div>
                  <div className="text-sm text-neutral-600">Procedimentos Realizados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">98%</div>
                  <div className="text-sm text-neutral-600">Satisfação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">15</div>
                  <div className="text-sm text-neutral-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-neutral-600">Avaliação Média</div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="flex items-center justify-center space-x-2">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-300 to-pink-400 border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-sm text-neutral-600 ml-3">+500 clientes satisfeitas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;