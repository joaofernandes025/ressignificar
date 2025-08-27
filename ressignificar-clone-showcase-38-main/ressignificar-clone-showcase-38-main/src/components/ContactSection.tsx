import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Clock, MessageCircle, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aqui para ajudar você a dar o primeiro passo rumo à recuperação. 
            Nossa equipe está disponível 24 horas para acolher e orientar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 bg-white shadow-xl">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-lg">Resgate 24h</h4>
                      <p className="text-muted-foreground">(81) 99366-6369</p>
                      <p className="text-sm text-muted-foreground">Disponível 24 horas por dia</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-lg">WhatsApp</h4>
                      <p className="text-muted-foreground">(81) 99366-6369</p>
                      <p className="text-sm text-muted-foreground">Atendimento rápido e personalizado</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-lg">E-mail</h4>
                      <p className="text-muted-foreground">contato@ressignificarpe.com.br</p>
                      <p className="text-sm text-muted-foreground">Resposta em até 2 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-lg">Endereço</h4>
                      <p className="text-muted-foreground">Pernambuco, Brasil</p>
                      <p className="text-sm text-muted-foreground">Ambiente seguro e acolhedor</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-lg">Horário de Funcionamento</h4>
                      <p className="text-muted-foreground">24 horas por dia, 7 dias por semana</p>
                      <p className="text-sm text-muted-foreground">Sempre disponível para você</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Button variant="orange" size="lg" className="text-lg font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Ligar Agora: (81) 99366-6369
                </Button>
                
                <Button variant="outline" size="lg" className="text-lg font-semibold border-primary text-primary hover:bg-primary/10">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 bg-white shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Envie uma mensagem
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input 
                      id="name" 
                      placeholder="Seu nome"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input 
                      id="phone" 
                      placeholder="(00) 00000-0000"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input 
                    id="subject" 
                    placeholder="Como podemos ajudar?"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Conte-nos mais sobre sua situação..."
                    rows={4}
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <Button type="submit" variant="orange" size="lg" className="w-full text-lg font-semibold">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;