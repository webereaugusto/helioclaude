import React from 'react';
import { Shield, Heart, Sparkles, Award, CheckCircle, Star } from 'lucide-react';

const Procedure = () => {
  const benefits = [
    {
      icon: <Star className="w-8 h-8 text-amber-500" />,
      title: "Resultados Naturais e Personalizados",
      description: "Cada tratamento é único, respeitando sua anatomia e desejos pessoais para resultados harmoniosos."
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-500" />,
      title: "Segurança Comprovada",
      description: "Utilizamos apenas produtos aprovados pela ANVISA, com total reversibilidade e biocompatibilidade."
    },
    {
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      title: "Procedimento Minimamente Invasivo",
      description: "Técnica avançada com mínimo desconforto, permitindo retorno rápido às atividades normais."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      title: "Melhora da Qualidade da Pele",
      description: "O ácido hialurônico hidrata, estimula colágeno e melhora a textura, reduzindo celulite e flacidez."
    },
    {
      icon: <Award className="w-8 h-8 text-amber-500" />,
      title: "Aumento da Autoestima",
      description: "Transformação que vai além do físico, promovendo bem-estar e confiança duradoura."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-emerald-500" />,
      title: "Resultados Duradouros",
      description: "Efeitos que perduram por 12 a 18 meses, com possibilidade de manutenção personalizada."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-800 mb-6">
            A Ciência por Trás da Beleza
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Entenda o Preenchimento e Harmonização de Glúteos com Ácido Hialurônico
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-neutral-700 leading-relaxed">
                O <strong>Preenchimento e Harmonização de Glúteos</strong> é um procedimento estético 
                revolucionário que utiliza ácido hialurônico de alta qualidade para esculpir e 
                harmonizar os contornos dos glúteos de forma natural e segura.
              </p>
              
              <p className="text-neutral-700 leading-relaxed">
                Esta técnica avançada não apenas aumenta o volume, mas também melhora a textura 
                da pele, estimula a produção natural de colágeno e proporciona resultados 
                completamente personalizados às suas características únicas.
              </p>

              <p className="text-neutral-700 leading-relaxed">
                Com nossa abordagem artística e científica, cada aplicação é estrategicamente 
                planejada para realçar sua beleza natural, garantindo harmonia e proporção 
                perfeita com seu biotipo.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Procedimento estético"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-amber-200 transform hover:-translate-y-2"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                {benefit.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-serif font-bold text-neutral-800 mb-4">
              Pronta para Sua Transformação?
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Agende uma avaliação gratuita e descubra como podemos realçar sua beleza natural 
              com segurança e excelência.
            </p>
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span className="flex items-center justify-center space-x-3">
                <span>📱</span>
                <span>Solicitar Avaliação Gratuita</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Procedure;