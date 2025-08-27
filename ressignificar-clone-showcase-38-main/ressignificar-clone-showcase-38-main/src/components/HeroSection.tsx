import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import logoImage from "@/assets/logo-ressignificar.png";
const heroImage = "/lovable-uploads/67ff025e-a0a8-4628-96f8-98da0c2c5030.png";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-4 bg-primary-lighter/30 rounded-full rotate-12 hidden md:block"></div>
        <div className="absolute top-40 right-20 w-48 h-4 bg-primary-light/20 rounded-full rotate-12 hidden md:block"></div>
        <div className="absolute bottom-40 left-10 w-40 h-4 bg-primary-lighter/25 rounded-full -rotate-12 hidden md:block"></div>
        <div className="absolute bottom-20 left-20 w-60 h-4 bg-primary-light/15 rounded-full -rotate-12 hidden md:block"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <img 
                src={logoImage} 
                alt="Ressignificar Clínica Psiquiátrica" 
                className="h-32 w-auto"
              />
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ressignificar a dor.
                <br />
                Reconstruir os vínculos.
                <br />
                Recuperar a vida.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl">
                Um espaço seguro, onde sua dor é acolhida e a recuperação se torna possível.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center lg:justify-start">
              <Button variant="orange" size="lg" className="text-xl font-bold px-12 py-6 h-auto">
                <Phone className="w-6 h-6 mr-3" />
                Resgate 24h
              </Button>
            </div>
          </div>

          {/* Right Content - Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              {/* Main therapy image */}
              <div className="col-span-2 relative overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <img 
                  src={heroImage} 
                  alt="Terapia acolhedora"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/60"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-background/40"></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;