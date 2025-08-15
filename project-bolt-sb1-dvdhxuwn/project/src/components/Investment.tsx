import React from 'react';
import { Heart, Shield, Star, TrendingUp } from 'lucide-react';

const Investment = () => {
  const benefits = [
    {
      icon: <Heart className="w-12 h-12 text-rose-500" />,
      title: "Autoestima Renovada",
      description: "Desperte uma nova versão de si mesma, mais confiante e radiante a cada dia."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-emerald-500" />,
      title: "Resultados Duradouros",
      description: "Investimento que perdura por 12 a 18 meses, com resultados que superam expectativas."
    },
    {
      icon: <Shield className="w-12 h-12 text-amber-500" />,
      title: "Procedimento Seguro",
      description: "Técnica comprovada, produtos certificados e acompanhamento integral para sua tranquilidade."
    }
  ];

  const testimonials = [
    {
      name: "Ana Carolina",
      age: "32 anos",
      text: "Melhor investimento que já fiz em mim mesma. A autoconfiança que ganhei não tem preço!",
      rating: 5
    },
    {
      name: "Fernanda Silva",
      age: "28 anos", 
      text: "Dr. Hélio é um artista! O resultado ficou exatamente como eu sonhava, muito natural.",
      rating: 5
    },
    {
      name: "Mariana Costa",
      age: "35 anos",
      text: "Procedimento tranquilo, resultado incrível. Recomendo para todas as minhas amigas!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Seu Investimento em Você
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Beleza, Confiança e Bem-Estar que Transformam Sua Vida
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-amber-200">
                Mais que um Procedimento Estético
              </h3>
              
              <div className="space-y-4 text-lg text-neutral-300 leading-relaxed">
                <p>
                  Investir na harmonização dos seus glúteos vai muito além da transformação 
                  física. É um investimento na sua autoestima, na sua confiança e na qualidade 
                  de vida que você merece ter.
                </p>
                
                <p>
                  Quando você se olha no espelho e se sente genuinamente feliz com o que vê, 
                  essa energia positiva se reflete em todos os aspectos da sua vida - 
                  relacionamentos, carreira e bem-estar geral.
                </p>
                
                <p>
                  Na Lilabelle Luxé, entendemos que cada real investido em você é um passo 
                  em direção à melhor versão de si mesma. Por isso, oferecemos não apenas 
                  um procedimento, mas uma experiência completa de transformação.
                </p>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-gradient-to-r from-amber-500/20 to-emerald-500/20 p-6 rounded-xl border border-amber-400/30">
              <h4 className="text-xl font-semibold text-amber-200 mb-4">
                O que está incluído no seu investimento:
              </h4>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-amber-400" />
                  <span>Consulta e avaliação detalhada gratuita</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-emerald-400" />
                  <span>Planejamento 3D personalizado</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-purple-400" />
                  <span>Procedimento com produtos premium</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-rose-400" />
                  <span>Acompanhamento pós-procedimento</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-amber-400" />
                  <span>Garantia de satisfação</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-emerald-400" />
                  <span>Suporte 24h nos primeiros dias</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center text-white">
              O que nossas pacientes dizem:
            </h3>
            
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-neutral-200 mb-4 italic">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-white">{testimonial.name}</div>
                      <div className="text-neutral-300 text-sm">{testimonial.age}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-6 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="mx-auto w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              <p className="text-neutral-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <h3 className="text-3xl font-serif font-bold text-white mb-6">
            Pronta para Transformar Sua Vida?
          </h3>
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
            Não deixe para amanhã o investimento mais importante: você mesma. 
            Solicite seu orçamento personalizado agora mesmo.
          </p>
          
          <div className="space-y-4">
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-12 py-4 rounded-full font-semibold text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-pulse">
              <span className="flex items-center justify-center space-x-3">
                <span>💎</span>
                <span>Solicitar Orçamento Personalizado</span>
              </span>
            </button>
            
            <p className="text-sm text-neutral-400">
              📞 Resposta em até 5 minutos via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;