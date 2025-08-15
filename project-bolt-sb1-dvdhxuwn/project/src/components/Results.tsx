import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Results = () => {
  const [currentResult, setCurrentResult] = useState(0);

  const results = [
    {
      before: "https://images.pexels.com/photos/3738974/pexels-photo-3738974.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Harmonização natural com aumento de volume sutil",
      age: "32 anos",
      procedure: "Preenchimento com Ácido Hialurônico"
    },
    {
      before: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Correção de assimetria e melhora dos contornos",
      age: "28 anos",
      procedure: "Harmonização de Glúteos"
    },
    {
      before: "https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Resultados naturais e proporcionais",
      age: "35 anos",
      procedure: "Preenchimento e Harmonização"
    }
  ];

  const nextResult = () => setCurrentResult((prev) => (prev + 1) % results.length);
  const prevResult = () => setCurrentResult((prev) => (prev - 1 + results.length) % results.length);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-800 mb-6">
            Resultados que Inspiram
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Sua Transformação Começa Aqui - Veja os Resultados Reais
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Before/After Images */}
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <img
                        src={results[currentResult].before}
                        alt="Antes do procedimento"
                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                      />
                      <div className="text-center">
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                          Antes
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <img
                        src={results[currentResult].after}
                        alt="Depois do procedimento"
                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                      />
                      <div className="text-center">
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                          Depois
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-neutral-800">
                      {results[currentResult].description}
                    </h3>
                    
                    <div className="space-y-2">
                      <p className="text-neutral-600">
                        <strong>Idade:</strong> {results[currentResult].age}
                      </p>
                      <p className="text-neutral-600">
                        <strong>Procedimento:</strong> {results[currentResult].procedure}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-emerald-50 p-6 rounded-xl">
                    <div className="flex items-center space-x-2 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-neutral-700 italic">
                      "O resultado superou minhas expectativas! Me sinto mais confiante e o 
                      procedimento foi muito mais tranquilo do que imaginava. Dr. Hélio é 
                      realmente um artista."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between p-6 bg-neutral-50">
              <button
                onClick={prevResult}
                className="flex items-center space-x-2 text-neutral-600 hover:text-amber-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Anterior</span>
              </button>

              <div className="flex space-x-2">
                {results.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentResult(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentResult
                        ? 'bg-amber-500 w-8'
                        : 'bg-neutral-300 hover:bg-neutral-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextResult}
                className="flex items-center space-x-2 text-neutral-600 hover:text-amber-600 transition-colors"
              >
                <span>Próximo</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500 max-w-2xl mx-auto">
            *Imagens ilustrativas para fins demonstrativos. Resultados podem variar de acordo 
            com o biotipo e características individuais de cada paciente. Consulte sempre um 
            profissional especializado.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-serif font-bold text-neutral-800 mb-6">
            Pronta para Seus Próprios Resultados?
          </h3>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Agende sua avaliação gratuita e descubra como podemos transformar 
            seus sonhos em realidade.
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <span className="flex items-center justify-center space-x-3">
              <span>✨</span>
              <span>Quero Meus Resultados</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Results;