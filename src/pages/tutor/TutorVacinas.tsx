
import React from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Dog, Plus, Search, Shield, AlertCircle } from 'lucide-react';

const TutorVacinas = () => {
  const sidebarItems = [
    { label: 'Dashboard', href: '/tutor', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Meus Pets', href: '/tutor/pets', icon: <Dog className="w-4 h-4" /> },
    { label: 'Consultas', href: '/tutor/consultas', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Vacinas', href: '/tutor/vacinas', icon: <Plus className="w-4 h-4" /> },
    { label: 'Serviços Locais', href: '/tutor/servicos', icon: <Search className="w-4 h-4" /> },
    { label: 'Perfil', href: '/tutor/perfil', icon: <User className="w-4 h-4" /> },
  ];

  const vacinas = [
    {
      pet: 'Rex',
      vacina: 'V10',
      dataAplicacao: '2023-12-15',
      proximaDose: '2024-12-15',
      status: 'em_dia',
      veterinario: 'Dr. João Silva'
    },
    {
      pet: 'Mimi',
      vacina: 'Tríplice Felina',
      dataAplicacao: '2023-11-10',
      proximaDose: '2024-01-10',
      status: 'pendente',
      veterinario: 'Dra. Ana Costa'
    },
    {
      pet: 'Thor',
      vacina: 'Antirrábica',
      dataAplicacao: '2023-10-20',
      proximaDose: '2024-10-20',
      status: 'em_dia',
      veterinario: 'Dr. Carlos Mendes'
    },
    {
      pet: 'Rex',
      vacina: 'Antirrábica',
      dataAplicacao: '2023-11-05',
      proximaDose: '2024-11-05',
      status: 'em_dia',
      veterinario: 'Dr. João Silva'
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
                <h1 className="text-2xl font-bold text-gray-900">Controle de Vacinas</h1>
                <p className="text-gray-600">Mantenha a imunização dos seus pets em dia</p>
              </div>
              <Button className="bg-turquesa hover:bg-turquesa/90">
                <Plus className="w-4 h-4 mr-2" />
                Registrar Vacina
              </Button>
            </div>

            {/* Alertas de vacinas pendentes */}
            <Card className="border-vermelho-alaranjado/20 bg-vermelho-alaranjado/5">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-vermelho-alaranjado">
                  <AlertCircle className="w-5 h-5" />
                  <span>Vacinas Pendentes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {vacinas.filter(v => v.status === 'pendente').map((vacina, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <p className="font-medium">{vacina.pet} - {vacina.vacina}</p>
                        <p className="text-sm text-gray-500">Vencimento: {vacina.proximaDose}</p>
                      </div>
                      <Button size="sm" className="bg-vermelho-alaranjado hover:bg-vermelho-alaranjado/90">
                        Agendar
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Histórico de vacinas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-turquesa" />
                  <span>Histórico de Vacinação</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {vacinas.map((vacina, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">
                          {vacina.pet === 'Rex' ? '🐕' : vacina.pet === 'Mimi' ? '🐱' : '🐕'}
                        </div>
                        <div>
                          <p className="font-medium">{vacina.pet}</p>
                          <p className="text-sm text-gray-600">{vacina.vacina}</p>
                          <p className="text-xs text-gray-500">Aplicada por: {vacina.veterinario}</p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm font-medium">Aplicação</p>
                        <p className="text-xs text-gray-500">{vacina.dataAplicacao}</p>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm font-medium">Próxima Dose</p>
                        <p className="text-xs text-gray-500">{vacina.proximaDose}</p>
                      </div>
                      
                      <Badge 
                        variant={vacina.status === 'em_dia' ? 'default' : 'destructive'}
                        className={vacina.status === 'em_dia' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {vacina.status === 'em_dia' ? 'Em dia' : 'Pendente'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TutorVacinas;
