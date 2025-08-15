import React, { useState } from 'react';
import { MapPin, Clock, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

const Clinic = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const clinicImages = [
    {
      url: "https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Recepção acolhedora com design sofisticado",
      description: "Ambiente luxuoso que transmite confiança desde o primeiro momento"
    },
    {
      url: "https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Consultório privativo para avaliações",
      description: "Espaço exclusivo para consultas personalizadas e planejamento"
    },
    {
      url: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Sala de procedimentos com tecnologia avançada",
      description: "Ambiente estéril com equipamentos de última geração"
    },
    {
      url: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Área de recuperação confortável",
      description: "Espaço relaxante para seu pós-procedimento"
    }
  ];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % clinicImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + clinicImages.length) % clinicImages.length);

  const features = [
    "Design luxuoso e acolhedor",
    "Privacidade total garantida",
    "Tecnologia de ponta",
    "Ambiente totalmente estéril",
    "Equipe altamente qualificada",
    "Conforto em todos os detalhes"
  ];

  const contact = {
    address: "Rua das Magnólias, 1234 - Jardins, São Paulo - SP",
    phone: "(11) 99999-9999",
    hours: "Segunda à Sexta: 9h às 18h | Sábado: 9h às 14h"
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-800 mb-6">
            Conheça Nossa Clínica
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Um Ambiente de Luxo e Conforto Criado Especialmente para Você
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={clinicImages[currentImage].url}
                  alt={clinicImages[currentImage].caption}
                  className="w-full h-96 object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white transition-all duration-300 rounded-full p-3 shadow-lg"
              >
                <ChevronLeft className="w-6 h-6 text-neutral-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white transition-all duration-300 rounded-full p-3 shadow-lg"
              >
                <ChevronRight className="w-6 h-6 text-neutral-800" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-2 rounded-full text-sm">
                {currentImage + 1} / {clinicImages.length}
              </div>
            </div>

            {/* Image Description */}
            <div className="bg-gradient-to-r from-amber-50 to-emerald-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                {clinicImages[currentImage].caption}
              </h3>
              <p className="text-neutral-600">
                {clinicImages[currentImage].description}
              </p>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 gap-3">
              {clinicImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentImage
                      ? 'ring-2 ring-amber-400 ring-offset-2'
                      : 'hover:opacity-80'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-neutral-800">
                Ambiente Pensado nos Mínimos Detalhes
              </h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed">
                Na Lilabelle Luxé, cada elemento foi cuidadosamente planejado para 
                proporcionar uma experiência única de bem-estar, conforto e sofisticação. 
                Nossa clínica boutique oferece um ambiente exclusivo onde você se sente 
                acolhida desde o primeiro momento.
              </p>

              <p className="text-lg text-neutral-600 leading-relaxed">
                Combinamos design elegante com tecnologia de ponta, criando um espaço 
                que transmite segurança, privacidade e a excelência que você merece em 
                cada detalhe da sua jornada de transformação.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-neutral-800">
                Diferenciais do Nosso Espaço
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full"></div>
                    <span className="text-neutral-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-neutral-900 text-white rounded-2xl p-8 space-y-6">
              <h4 className="text-2xl font-semibold text-amber-200">
                Informações de Contato
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Endereço</div>
                    <div className="text-neutral-300 text-sm">{contact.address}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Telefone</div>
                    <div className="text-neutral-300 text-sm">{contact.phone}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Horário de Funcionamento</div>
                    <div className="text-neutral-300 text-sm">{contact.hours}</div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300">
                📍 Ver Localização no Maps
              </button>
            </div>

            {/* Visit CTA */}
            <div className="text-center p-6 bg-gradient-to-r from-amber-50 to-emerald-50 rounded-xl border border-amber-200">
              <h4 className="text-xl font-semibold text-neutral-800 mb-3">
                Que tal conhecer pessoalmente?
              </h4>
              <p className="text-neutral-600 mb-4">
                Agende uma visita e conheça todos os detalhes que fazem da 
                Lilabelle Luxé um espaço único.
              </p>
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                🏢 Agendar Visita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clinic;