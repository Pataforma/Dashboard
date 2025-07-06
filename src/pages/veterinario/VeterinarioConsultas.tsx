
import React from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, FileText, Plus, Stethoscope, Users, BookOpen, Clipboard, DollarSign, Clock } from 'lucide-react';

const VeterinarioConsultas = () => {
  const sidebarItems = [
    { label: 'Dashboard', href: '/veterinario', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Pacientes', href: '/veterinario/pacientes', icon: <Users className="w-4 h-4" /> },
    { label: 'Consultas', href: '/veterinario/consultas', icon: <Stethoscope className="w-4 h-4" /> },
    { label: 'Prontuários', href: '/veterinario/prontuarios', icon: <BookOpen className="w-4 h-4" /> },
    { label: 'Prescrições', href: '/veterinario/prescricoes', icon: <FileText className="w-4 h-4" /> },
    { label: 'Exames', href: '/veterinario/exames', icon: <Clipboard className="w-4 h-4" /> },
    { label: 'Financeiro', href: '/veterinario/financeiro', icon: <DollarSign className="w-4 h-4" /> },
    { label: 'Perfil', href: '/veterinario/perfil', icon: <User className="w-4 h-4" /> },
  ];

  const consultas = [
    {
      id: 1,
      paciente: 'Rex',
      tutor: 'Maria Silva',
      data: '2024-01-15',
      hora: '14:00',
      tipo: 'Consulta de rotina',
      status: 'agendada'
    },
    {
      id: 2,
      paciente: 'Mimi',
      tutor: 'João Santos',
      data: '2024-01-15',
      hora: '15:30',
      tipo: 'Vacinação',
      status: 'em_andamento'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        userType="veterinario" 
        userName="Dr. João Silva" 
        alerts={3}
      />
      
      <div className="flex">
        <Sidebar items={sidebarItems} userType="veterinario" />
        
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Consultas</h1>
                <p className="text-gray-600">Gerencie sua agenda de atendimentos</p>
              </div>
              <Button className="bg-turquesa hover:bg-turquesa/90">
                <Plus className="w-4 h-4 mr-2" />
                Nova Consulta
              </Button>
            </div>

            <div className="space-y-4">
              {consultas.map((consulta) => (
                <Card key={consulta.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">🐕</div>
                        <div>
                          <h3 className="font-semibold text-lg">{consulta.paciente}</h3>
                          <p className="text-gray-600">{consulta.tipo}</p>
                          <p className="text-sm text-gray-500">Tutor: {consulta.tutor}</p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-turquesa" />
                          <span className="font-medium">{consulta.data}</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <Clock className="w-4 h-4 text-turquesa" />
                          <span>{consulta.hora}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end space-y-2">
                        <Badge 
                          variant={consulta.status === 'agendada' ? 'default' : 'secondary'}
                          className={consulta.status === 'em_andamento' ? 'bg-amarelo-dourado text-white' : 'bg-turquesa'}
                        >
                          {consulta.status === 'agendada' ? 'Agendada' : 'Em Andamento'}
                        </Badge>
                        <Button size="sm" className="bg-turquesa hover:bg-turquesa/90">
                          Iniciar Consulta
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

export default VeterinarioConsultas;
