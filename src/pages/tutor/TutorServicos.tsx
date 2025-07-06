
import React from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Dog, Plus, Search, MapPin, Star, Phone } from 'lucide-react';

const TutorServicos = () => {
  const sidebarItems = [
    { label: 'Dashboard', href: '/tutor', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Meus Pets', href: '/tutor/pets', icon: <Dog className="w-4 h-4" /> },
    { label: 'Consultas', href: '/tutor/consultas', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Vacinas', href: '/tutor/vacinas', icon: <Plus className="w-4 h-4" /> },
    { label: 'Serviços Locais', href: '/tutor/servicos', icon: <Search className="w-4 h-4" /> },
    { label: 'Perfil', href: '/tutor/perfil', icon: <User className="w-4 h-4" /> },
  ];

  const servicos = [
    {
      nome: 'Clínica VetLife',
      tipo: 'Veterinário',
      distancia: '1.2 km',
      avaliacao: 4.9,
      endereco: 'Rua das Flores, 123 - Centro',
      telefone: '(11) 99999-9999',
      especialidades: ['Clínica Geral', 'Cirurgia', 'Dermatologia'],
      preco: 'R$ 80-120',
      funcionamento: 'Seg-Sex: 8h-18h | Sáb: 8h-12h'
    },
    {
      nome: 'Pet Shop Central',
      tipo: 'Banho e Tosa',
      distancia: '0.5 km',
      avaliacao: 4.8,
      endereco: 'Av. Principal, 456 - Centro',
      telefone: '(11) 88888-8888',
      especialidades: ['Banho', 'Tosa', 'Corte de Unhas'],
      preco: 'R$ 40-80',
      funcionamento: 'Seg-Sáb: 8h-17h'
    },
    {
      nome: 'Hotel Pet Paradise',
      tipo: 'Hospedagem',
      distancia: '2.1 km',
      avaliacao: 4.7,
      endereco: 'Rua dos Animais, 789 - Jardins',
      telefone: '(11) 77777-7777',
      especialidades: ['Hospedagem', 'Day Care', 'Recreação'],
      preco: 'R$ 60-100/dia',
      funcionamento: '24h'
    },
    {
      nome: 'Dog Walker Premium',
      tipo: 'Passeador',
      distancia: '0.8 km',
      avaliacao: 4.6,
      endereco: 'Atende toda região central',
      telefone: '(11) 66666-6666',
      especialidades: ['Passeios', 'Exercícios', 'Socialização'],
      preco: 'R$ 25-40/passeio',
      funcionamento: 'Todos os dias: 6h-20h'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        userType="tutor" 
        userName="Maria Silva" 
        alerts={2}
      />
      
      <div className="flex">
        <Sidebar items={sidebarItems} userType="tutor" />
        
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Serviços Locais</h1>
                <p className="text-gray-600">Encontre os melhores profissionais da sua região</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Search className="w-4 h-4 mr-2" />
                  Filtrar
                </Button>
                <Button className="bg-turquesa hover:bg-turquesa/90">
                  <Plus className="w-4 h-4 mr-2" />
                  Recomendar Serviço
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {servicos.map((servico, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{servico.nome}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary">{servico.tipo}</Badge>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-amarelo-dourado fill-current" />
                            <span className="text-sm font-medium">{servico.avaliacao}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-turquesa">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{servico.distancia}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {servico.endereco}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center mt-1">
                        <Phone className="w-3 h-3 mr-1" />
                        {servico.telefone}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Especialidades:</p>
                      <div className="flex flex-wrap gap-1">
                        {servico.especialidades.map((esp, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {esp}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Preço:</p>
                        <p className="font-medium text-turquesa">{servico.preco}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Funcionamento:</p>
                        <p className="font-medium text-xs">{servico.funcionamento}</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Phone className="w-3 h-3 mr-1" />
                        Ligar
                      </Button>
                      <Button size="sm" className="flex-1 bg-turquesa hover:bg-turquesa/90">
                        Agendar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TutorServicos;
