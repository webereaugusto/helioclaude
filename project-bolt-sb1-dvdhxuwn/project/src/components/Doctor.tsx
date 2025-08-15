import React from 'react';
import { Award, GraduationCap, Users, Heart, CheckCircle, Star } from 'lucide-react';

const Doctor = () => {
  const credentials = [
    {
      icon: <GraduationCap className="w-6 h-6 text-amber-500" />,
      title: "Formação Médica Especializada",
      description: "Medicina pela USP, Especialização em Dermatologia e Procedimentos Estéticos"
    },
    {
      icon: <Award className="w-6 h-6 text-emerald-500" />,
      title: "Certificações Internacionais",
      description: "Membro da SBCD, ISAPS e certificações em técnicas avançadas na Europa"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Mais de 5.000 Pacientes",
      description: "Experiência comprovada com resultados excepcionais e segurança total"
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Abordagem Humanizada",
      description: "Cuidado integral que prioriza sua segurança, conforto e bem-estar"
    }
  ];

  const achievements = [
    "15+ Anos de Experiência",
    "5.000+ Procedimentos Realizados",
    "Top 1% Especialistas no Brasil",
    "98% Satisfação dos Pacientes",
    "Certificações Internacionais",
    "Membro de 3 Sociedades Médicas"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Dr. Hélio Millan
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Sua Referência em Estética e Harmonização Avançada
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Doctor Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dr. Hélio Millan"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Achievement Cards */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-400 to-amber-500 p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">Anos</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-400 to-emerald-500 p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">5K+</div>
                  <div className="text-sm">Pacientes</div>
                </div>
              </div>
            </div>

            {/* Achievement Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-sm text-neutral-200">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-amber-200">
                A Arte de Realçar Sua Beleza Natural
              </h3>
              
              <div className="space-y-4 text-lg text-neutral-300 leading-relaxed">
                <p>
                  Com mais de 15 anos dedicados à medicina estética, Dr. Hélio Millan 
                  é reconhecido como uma das principais referências em harmonização 
                  corporal e preenchimento de glúteos no Brasil.
                </p>
                
                <p>
                  Sua filosofia de trabalho combina técnica científica avançada com 
                  sensibilidade artística, sempre priorizando resultados naturais que 
                  respeitam a individualidade e beleza única de cada paciente.
                </p>
                
                <p>
                  Formado pela USP e com especializações nas principais instituições 
                  internacionais, Dr. Hélio mantém-se sempre atualizado com as mais 
                  modernas técnicas e tecnologias em estética corporal.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-white">
                Credenciais e Especialidades
              </h4>
              
              <div className="space-y-4">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex space-x-4 p-4 bg-white/5 rounded-lg">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      {credential.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">{credential.title}</h5>
                      <p className="text-neutral-300 text-sm">{credential.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-amber-500/20 to-emerald-500/20 p-6 rounded-xl border-l-4 border-amber-400">
              <blockquote className="text-lg text-white italic mb-4">
                "Minha missão é despertar a confiança e autoestima de cada paciente, 
                sempre respeitando sua essência natural e proporcionando resultados 
                seguros e harmoniosos."
              </blockquote>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <span className="text-neutral-300">- Dr. Hélio Millan</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-serif font-bold text-white mb-6">
            Agende Sua Consulta com Dr. Hélio Millan
          </h3>
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
            Converse diretamente com quem entende verdadeiramente de harmonização 
            corporal e transformação natural.
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <span className="flex items-center justify-center space-x-3">
              <span>👨‍⚕️</span>
              <span>Falar com Dr. Hélio Millan</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Doctor;