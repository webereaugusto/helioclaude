import React, { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "O procedimento de preenchimento de glúteos é seguro?",
      answer: "Sim, é um procedimento extremamente seguro quando realizado por profissional qualificado. Utilizamos apenas ácido hialurônico aprovado pela ANVISA, que é biocompatível e totalmente reversível. Dr. Hélio Millan possui mais de 15 anos de experiência e segue rigorosamente todos os protocolos de segurança internacionais."
    },
    {
      question: "Quanto tempo duram os resultados?",
      answer: "Os resultados do preenchimento com ácido hialurônico duram entre 12 a 18 meses, dependendo do organismo de cada paciente, estilo de vida e cuidados pós-procedimento. O produto é gradualmente absorvido pelo corpo de forma natural, permitindo manutenções personalizadas conforme necessário."
    },
    {
      question: "Como é o processo de recuperação?",
      answer: "A recuperação é rápida e tranquila. Nas primeiras 24-48h pode haver leve inchaço e sensibilidade local, que são normais. Recomendamos evitar exercícios intensos por 48h e seguir as orientações pós-procedimento. A maioria das pacientes retorna às atividades normais no dia seguinte."
    },
    {
      question: "Os resultados ficam naturais?",
      answer: "Absolutamente! Nossa especialidade é criar resultados extremamente naturais e harmoniosos. Dr. Hélio Millan utiliza técnicas avançadas e uma abordagem artística para realçar seus contornos naturais, respeitando sua anatomia única. O objetivo é que você se sinta mais confiante e bela, mantendo sua essência."
    },
    {
      question: "Qual a diferença entre preenchimento e cirurgia plástica?",
      answer: "O preenchimento é minimamente invasivo, não requer anestesia geral, tem recuperação rápida e resultados imediatos. Diferente da cirurgia, não há cortes, cicatrizes ou tempo de afastamento prolongado. É reversível e permite ajustes graduais conforme seus desejos evoluem."
    },
    {
      question: "Como funciona a primeira consulta?",
      answer: "A consulta inicial é gratuita e completamente personalizada. Dr. Hélio fará uma avaliação detalhada, discutirá suas expectativas, explicará o procedimento e mostrará simulações 3D dos resultados esperados. É o momento para esclarecer todas as suas dúvidas e se sentir completamente segura."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-800 mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Esclarecemos suas principais dúvidas sobre o procedimento
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-neutral-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center transition-transform duration-300">
                  {openItems.includes(index) ? (
                    <Minus className="w-5 h-5 text-white transform rotate-0 transition-transform duration-300" />
                  ) : (
                    <Plus className="w-5 h-5 text-white transform rotate-0 transition-transform duration-300" />
                  )}
                </div>
              </button>
              
              <div 
                className={`px-8 transition-all duration-300 overflow-hidden ${
                  openItems.includes(index) 
                    ? 'max-h-96 pb-6 opacity-100' 
                    : 'max-h-0 pb-0 opacity-0'
                }`}
              >
                <div className="bg-gradient-to-r from-amber-50 to-transparent p-6 rounded-xl border-l-4 border-amber-400">
                  <p className="text-neutral-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-12 text-white">
            <MessageCircle className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            
            <h3 className="text-3xl font-serif font-bold mb-4">
              Ainda tem alguma dúvida?
            </h3>
            
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para esclarecer qualquer questão e 
              oferecer todas as informações que você precisa para se sentir 
              completamente segura.
            </p>
            
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span className="flex items-center justify-center space-x-3">
                <span>💬</span>
                <span>Falar com Especialista</span>
              </span>
            </button>
            
            <p className="text-sm text-neutral-400 mt-4">
              📱 Resposta imediata via WhatsApp
            </p>
          </div>
        </div>

        {/* Quick contact cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-100 text-center">
            <h4 className="font-semibold text-neutral-800 mb-2">
              Consulta Presencial
            </h4>
            <p className="text-neutral-600 text-sm mb-4">
              Agende uma conversa pessoalmente em nossa clínica
            </p>
            <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
              🏢 Agendar Consulta
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-100 text-center">
            <h4 className="font-semibold text-neutral-800 mb-2">
              Atendimento Online
            </h4>
            <p className="text-neutral-600 text-sm mb-4">
              Tire suas dúvidas por videochamada com Dr. Hélio
            </p>
            <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
              💻 Consulta Online
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;