import React from 'react';
import { Users, Search, Zap, HeartHandshake, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-amber-500" />,
      title: "Avaliação Personalizada",
      description: "Análise completa do seu biotipo, expectativas e histórico médico para um planejamento individualizado.",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: "Consulta detalhada com exame físico, discussão de objetivos e esclarecimento de dúvidas."
    },
    {
      icon: <Zap className="w-12 h-12 text-emerald-500" />,
      title: "Planejamento Estratégico",
      description: "Desenvolvimento de um plano de tratamento exclusivo com tecnologia 3D para visualizar os resultados.",
      image: "https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: "Mapeamento digital dos pontos de aplicação e simulação dos resultados esperados."
    },
    {
      icon: <HeartHandshake className="w-12 h-12 text-rose-500" />,
      title: "Procedimento de Excelência",
      description: "Aplicação precisa com técnicas avançadas em ambiente totalmente seguro e acolhedor.",
      image: "https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: "Execução cuidadosa com anestesia local e monitoramento contínuo do seu conforto."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-purple-500" />,
      title: "Acompanhamento Dedicado",
      description: "Suporte completo pós-procedimento com orientações e avaliações regulares dos resultados.",
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: "Consultas de retorno, orientações de cuidados e monitoramento da evolução."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-800 mb-6">
            Sua Jornada de Transformação
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Nosso Processo Exclusivo em 4 Etapas Cuidadosas
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Content */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-neutral-50 to-amber-50 rounded-2xl flex items-center justify-center shadow-lg">
                    {step.icon}
                  </div>
                  <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold text-sm">
                    Etapa {index + 1}
                  </div>
                </div>
                
                <h3 className="text-3xl font-serif font-bold text-neutral-800">
                  {step.title}
                </h3>
                
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="bg-gradient-to-r from-amber-50 to-transparent p-6 rounded-xl border-l-4 border-amber-400">
                  <p className="text-neutral-700 font-medium">
                    {step.details}
                  </p>
                </div>

                {/* Progress indicator */}
                <div className="flex items-center space-x-2">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i <= index
                          ? 'bg-gradient-to-r from-amber-400 to-amber-500 w-8'
                          : 'bg-neutral-200 w-4'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  
                  {/* Floating number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline connector */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-amber-200 to-emerald-200 h-full"></div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-serif font-bold mb-6">
              Comece Sua Jornada Hoje Mesmo
            </h3>
            <p className="text-lg text-neutral-200 mb-8 max-w-2xl mx-auto">
              Nossa equipe especializada está pronta para guiá-la em cada etapa 
              da sua transformação com o máximo cuidado e atenção.
            </p>
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span className="flex items-center justify-center space-x-3">
                <span>🚀</span>
                <span>Iniciar Minha Transformação</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;