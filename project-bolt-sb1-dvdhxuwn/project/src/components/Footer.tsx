import React from 'react';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, href: "#", platform: "Instagram" },
    { icon: <Facebook className="w-6 h-6" />, href: "#", platform: "Facebook" },
    { icon: <Youtube className="w-6 h-6" />, href: "#", platform: "YouTube" }
  ];

  const quickLinks = [
    { title: "Sobre o Dr. Hélio Millan", href: "#doctor" },
    { title: "Procedimentos", href: "#procedures" },
    { title: "Resultados", href: "#results" },
    { title: "Depoimentos", href: "#testimonials" },
    { title: "Blog", href: "#blog" },
    { title: "Contato", href: "#contact" }
  ];

  const legalLinks = [
    { title: "Política de Privacidade", href: "#privacy" },
    { title: "Termos de Uso", href: "#terms" },
    { title: "Código de Ética", href: "#ethics" },
    { title: "LGPD", href: "#lgpd" }
  ];

  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-serif font-bold text-amber-200 mb-2">
                Lilabelle Luxé
              </h3>
              <p className="text-neutral-300">
                Onde a excelência encontra sua beleza natural
              </p>
            </div>

            <p className="text-neutral-400 leading-relaxed">
              Especialistas em harmonização corporal com mais de 15 anos de 
              experiência, oferecendo resultados naturais e seguros com 
              técnicas de ponta.
            </p>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Siga-nos</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={`Seguir no ${social.platform}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Contato</h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Endereço</div>
                  <div className="text-neutral-300 text-sm">
                    Rua das Magnólias, 1234<br />
                    Jardins, São Paulo - SP<br />
                    CEP: 01234-567
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Telefone</div>
                  <div className="text-neutral-300 text-sm">
                    (11) 99999-9999<br />
                    (11) 3333-4444
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Email</div>
                  <div className="text-neutral-300 text-sm">
                    contato@lilabelleluxe.com.br
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-rose-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Horário</div>
                  <div className="text-neutral-300 text-sm">
                    Segunda à Sexta: 9h às 18h<br />
                    Sábado: 9h às 14h<br />
                    Domingo: Fechado
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Links Rápidos</h4>
            
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-neutral-300 hover:text-amber-400 transition-colors duration-300"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter & CTA */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Fique por Dentro</h4>
            
            <p className="text-neutral-400 text-sm">
              Receba dicas exclusivas, novidades e promoções especiais 
              diretamente no seu WhatsApp.
            </p>

            <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              📱 Receber Novidades
            </button>

            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">15+</div>
                <div className="text-xs text-neutral-400">Anos de Excelência</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-neutral-400 text-sm">
                © {currentYear} Lilabelle Luxé. Todos os direitos reservados.
              </p>
              <p className="text-neutral-500 text-xs mt-1">
                Dr. Hélio Millan - CRM/SP 123.456
              </p>
            </div>

            {/* Legal Links */}
            <div className="text-center md:text-right">
              <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-xs">
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="bg-black/50 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-neutral-500 text-xs text-center leading-relaxed">
            <strong>Aviso Médico:</strong> As informações contidas neste site têm caráter 
            meramente informativo e não substituem uma consulta médica presencial. 
            Resultados podem variar de acordo com características individuais. 
            Procedimentos estéticos possuem riscos inerentes que devem ser discutidos 
            em consulta. Dr. Hélio Millan - CRM/SP 123.456.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;