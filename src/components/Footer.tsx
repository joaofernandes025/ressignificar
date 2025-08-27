import { Phone, MessageCircle, Mail, MapPin, Heart } from "lucide-react";
import logoImage from "@/assets/logo-ressignificar.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={logoImage} 
                alt="Ressignificar" 
                className="h-12 w-auto brightness-110 contrast-110"
              />
              <div>
                <h3 className="font-bold text-xl">Ressignificar</h3>
                <p className="text-primary-foreground/80">Clínica Psiquiátrica</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 max-w-md leading-relaxed">
              Um espaço seguro, onde sua dor é acolhida e a recuperação se torna possível. 
              Ressignificar a dor, reconstruir os vínculos, recuperar a vida.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="tel:+5581993666369" 
                className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/5581993666369" 
                className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contato@ressignificarpe.com.br" 
                className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/80" />
                <div>
                  <p className="font-medium">(81) 99366-6369</p>
                  <p className="text-sm text-primary-foreground/80">Resgate 24h</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/80" />
                <div>
                  <p className="font-medium">contato@ressignificarpe.com.br</p>
                  <p className="text-sm text-primary-foreground/80">Resposta rápida</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground/80 mt-1" />
                <div>
                  <p className="font-medium">Pernambuco, Brasil</p>
                  <p className="text-sm text-primary-foreground/80">Ambiente acolhedor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Nossos Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/90 hover:text-white transition-colors">Internação Psiquiátrica</a></li>
              <li><a href="#" className="text-primary-foreground/90 hover:text-white transition-colors">Tratamento da Depressão</a></li>
              <li><a href="#" className="text-primary-foreground/90 hover:text-white transition-colors">Transtornos de Ansiedade</a></li>
              <li><a href="#" className="text-primary-foreground/90 hover:text-white transition-colors">Dependência Química</a></li>
              <li><a href="#" className="text-primary-foreground/90 hover:text-white transition-colors">Acompanhamento Familiar</a></li>
              <li><a href="#" className="text-primary-foreground/90 hover:text-white transition-colors">Resgate 24 horas</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/80 flex items-center justify-center space-x-1">
            <span>© 2024 Ressignificar Clínica Psiquiátrica. Feito com</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>para cuidar de você.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;