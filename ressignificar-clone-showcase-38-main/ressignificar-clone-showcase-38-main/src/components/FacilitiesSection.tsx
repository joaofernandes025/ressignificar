import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bed, TreePine, Utensils, Dumbbell, Sparkles, Phone, Check, MessageCircle } from "lucide-react";
import facilitiesImage from "@/assets/clinic-facilities.jpg";

const facilities = [
  {
    icon: Bed,
    title: "Quartos individuais com banheiro",
    subtitle: "privativo e ar-condicionado"
  },
  {
    icon: TreePine,
    title: "Ambientes tranquilos e",
    subtitle: "integrados à natureza"
  },
  {
    icon: Utensils,
    title: "Alimentação personalizada,",
    subtitle: "saborosa e balanceada"
  },
  {
    icon: Dumbbell,
    title: "Academia equipada, espaços",
    subtitle: "de lazer e convivência"
  },
  {
    icon: Sparkles,
    title: "Lavanderia inclusa,",
    subtitle: "sem cobranças adicionais"
  }
];

const FacilitiesSection = () => {
  return (
    <>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="/lovable-uploads/5945ebea-4a0c-4b9a-a14a-73568718f290.png" 
                alt="Instalações da Clínica Ressignificar"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-light rounded-full opacity-50 blur-sm"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-lighter/40 rounded-full opacity-60 blur-sm"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Um espaço que acolhe, conforta e transforma
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl">
                Um lugar pensado para recomeços. Cada detalhe da estrutura foi projetado para acolher, 
                promover bem-estar e oferecer dignidade a quem mais precisa.
              </p>
            </div>

            {/* Facilities Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {facilities.map((facility, index) => (
                <Card key={index} className="border-0 bg-gradient-light/30 hover:bg-gradient-light/50 transition-all duration-300 group">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full group-hover:scale-110 transition-transform duration-300">
                      <facility.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary text-lg leading-tight">
                        {facility.title}
                      </h3>
                      <p className="text-primary/80 font-medium">
                        {facility.subtitle}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Button variant="orange" size="lg" className="text-lg font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Agende uma visita ou ligue agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Care Section - Independent Container */}
    <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 p-8 bg-gradient-light rounded-2xl border border-primary/20 shadow-lg">
            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-primary">
                Cuidado integral e contínuo
              </h3>
              <p className="text-lg text-muted-foreground">
                Aqui, a atenção à saúde mental e física é completa — e diária:
              </p>
            </div>

            {/* Care Services List */}
            <div className="grid gap-4">
              {[
                "Psicoterapia individual de segunda a sexta",
                "Acompanhamento psiquiátrico semanal", 
                "Suporte clínico geral",
                "Equipe de enfermagem 24h",
                "Educador físico e massoterapeuta",
                "Assistente social como elo entre paciente, família e equipe"
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-primary font-medium">{service}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="outline" size="lg" className="flex-1 border-primary text-primary hover:bg-primary hover:text-white">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar pelo Whatsapp
              </Button>
              <Button variant="orange" size="lg" className="flex-1">
                <Phone className="w-5 h-5 mr-2" />
                (81) 99366-6369
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default FacilitiesSection;