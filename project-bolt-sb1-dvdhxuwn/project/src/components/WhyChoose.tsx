import React from 'react';
import { Shield, Heart, Award, Zap, Star, CheckCircle } from 'lucide-react';

const WhyChoose = () => {
  const differentials = [
    {
      icon: <Shield className="w-10 h-10 text-emerald-500" />,
      title: "Segurança Incomparável",
      description: "Protocolos rigorosos, produtos certificados e ambiente hospitalar com total biossegurança.",
      features: ["Produtos ANVISA", "Ambiente estéril", "Protocolos internacionais", "Suporte 24h"]
    },
    {
      icon: <Heart className="w-10 h-10 text-rose-500" />,
      title: "Atendimento Personalizado",
      description: "Cada paciente é única. Oferecemos um tratamento completamente individualizado.",
      features: ["Consulta exclusiva", "Plano personalizado", "Acompanhamento dedicado", "Suporte integral"]
    },
    {
      icon: <Award className="w-10 h-10 text-amber-500" />,
      title: "Resultados de Excelência",
      description: "Mais de 98% de satisfação com resultados naturais e harmoniosos comprovados.",
      features: ["98% satisfação", "Resultados naturais", "Técnicas avançadas", "Garantia de qualidade"]
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-500" />,
      title: "Tecnologia de Ponta",
      description: "Equipamentos de última geração e técnicas mais modernas do mercado mundial.",
      features: ["Tecnologia 3D", "Equipamentos modernos", "Técnicas inovadoras", "Precisão milimétrica"]
    },
    {
      icon: <Star className="w-10 h-10 text-indigo-500" />,
      title: "Ambiente Exclusivo",
      description: "Clínica boutique com design sofisticado, proporcionando máximo conforto e privacidade.",
      features: ["Design luxuoso", "Privacidade total", "Conforto superior", "Experiência única"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-800 mb-6">
            Lilabelle Luxé
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Onde a Excelência Encontra a Sua Beleza
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {differentials.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-amber-200 transform hover:-translate-y-2"
            >
              <div className="text-center space-y-6">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-neutral-50 to-amber-50 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300 group-hover:scale-110 transform duration-300">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-semibold text-neutral-800">
                  {item.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-sm text-neutral-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Two Items */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {differentials.slice(3, 5).map((item, index) => (
            <div
              key={index + 3}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-amber-200 transform hover:-translate-y-2"
            >
              <div className="text-center space-y-6">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-neutral-50 to-amber-50 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300 group-hover:scale-110 transform duration-300">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-semibold text-neutral-800">
                  {item.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-sm text-neutral-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-amber-400">98%</div>
              <div className="text-neutral-300">Satisfação</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-emerald-400">5K+</div>
              <div className="text-neutral-300">Pacientes Atendidas</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-400">15+</div>
              <div className="text-neutral-300">Anos de Experiência</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-rose-400">100%</div>
              <div className="text-neutral-300">Segurança</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Reconhecimento Nacional</h3>
            <div className="flex items-center justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
              ))}
              <span className="ml-3 text-neutral-300">Top 1% Especialistas no Brasil</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-serif font-bold text-neutral-800 mb-6">
            Experimente a Diferença Lilabelle Luxé
          </h3>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Descubra por que somos a escolha de milhares de mulheres que buscam 
            excelência em harmonização corporal.
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <span className="flex items-center justify-center space-x-3">
              <span>💎</span>
              <span>Conhecer a Lilabelle Luxé</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;