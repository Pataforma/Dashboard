
import React from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Dog, Plus, Search, Clock, MapPin } from 'lucide-react';

const TutorConsultas = () => {
  const sidebarItems = [
    { label: 'Dashboard', href: '/tutor', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Meus Pets', href: '/tutor/pets', icon: <Dog className="w-4 h-4" /> },
    { label: 'Consultas', href: '/tutor/consultas', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Vacinas', href: '/tutor/vacinas', icon: <Plus className="w-4 h-4" /> },
    { label: 'Serviços Locais', href: '/tutor/servicos', icon: <Search className="w-4 h-4" /> },
    { label: 'Perfil', href: '/tutor/perfil', icon: <User className="w-4 h-4" /> },
  ];

  const consultas = [
    {
      id: 1,
      pet: 'Rex',
      veterinario: 'Dr. João Silva',
      data: '2024-01-15',
      hora: '14:00',
      tipo: 'Consulta de rotina',
      status: 'agendada',
      endereco: 'Clínica VetLife - Centro'
    },
    {
      id: 2,
      pet: 'Mimi',
      veterinario: 'Dra. Ana Costa',
      data: '2024-01-10',
      hora: '09:30',
      tipo: 'Vacinação',
      status: 'concluida',
      endereco: 'Pet Care - Zona Sul'
    },
    {
      id: 3,
      pet: 'Thor',
      veterinario: 'Dr. Carlos Mendes',
      data: '2024-01-20',
      hora: '16:00',
      tipo: 'Exame de rotina',
      status: 'agendada',
      endereco: 'Clínica Animal Care'
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
                <h1 className="text-2xl font-bold text-gray-900">Consultas</h1>
                <p className="text-gray-600">Acompanhe o histórico médico dos seus pets</p>
              </div>
              <Button className="bg-turquesa hover:bg-turquesa/90">
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Consulta
              </Button>
            </div>

            <div className="space-y-4">
              {consultas.map((consulta) => (
                <Card key={consulta.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">🐕</div>
                        <div>
                          <h3 className="font-semibold text-lg">{consulta.pet}</h3>
                          <p className="text-gray-600">{consulta.tipo}</p>
                          <p className="text-sm text-gray-500">Dr. {consulta.veterinario}</p>
                        </div>
                      </div>
                      
                      <div className="text-right space-y-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-turquesa" />
                          <span className="font-medium">{consulta.data}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-turquesa" />
                          <span>{consulta.hora}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-turquesa" />
                          <span className="text-sm text-gray-500">{consulta.endereco}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end space-y-2">
                        <Badge 
                          variant={consulta.status === 'agendada' ? 'default' : 'secondary'}
                          className={consulta.status === 'agendada' ? 'bg-turquesa' : 'bg-green-100 text-green-800'}
                        >
                          {consulta.status === 'agendada' ? 'Agendada' : 'Concluída'}
                        </Badge>
                        <Button size="sm" variant="outline">
                          Ver Detalhes
                        </Button>
                      </div>
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

export default TutorConsultas;
