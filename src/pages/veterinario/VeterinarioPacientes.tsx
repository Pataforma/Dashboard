
import React from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, FileText, Plus, Search, Stethoscope, Users, BookOpen, Clipboard, DollarSign, Settings } from 'lucide-react';

const VeterinarioPacientes = () => {
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

  const pacientes = [
    {
      id: 1,
      nome: 'Rex',
      tutor: 'Maria Silva',
      especie: 'Cão',
      raca: 'Golden Retriever',
      idade: '3 anos',
      ultimaConsulta: '2024-01-05',
      proximaConsulta: '2024-01-15',
      status: 'ativo',
      observacoes: 'Alérgico a frango'
    },
    {
      id: 2,
      nome: 'Mimi',
      tutor: 'João Santos',
      especie: 'Gato',
      raca: 'Persa',
      idade: '2 anos',
      ultimaConsulta: '2023-12-20',
      proximaConsulta: '2024-01-10',
      status: 'atencao',
      observacoes: 'Vacina pendente'
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
                <h1 className="text-2xl font-bold text-gray-900">Pacientes</h1>
                <p className="text-gray-600">Gerencie seus pacientes ativos</p>
              </div>
              <Button className="bg-turquesa hover:bg-turquesa/90">
                <Plus className="w-4 h-4 mr-2" />
                Novo Paciente
              </Button>
            </div>

            <div className="space-y-4">
              {pacientes.map((paciente) => (
                <Card key={paciente.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">
                          {paciente.especie === 'Cão' ? '🐕' : '🐱'}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{paciente.nome}</h3>
                          <p className="text-gray-600">{paciente.especie} • {paciente.raca}</p>
                          <p className="text-sm text-gray-500">Tutor: {paciente.tutor}</p>
                          <p className="text-sm text-gray-500">{paciente.idade}</p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Última consulta</p>
                        <p className="font-medium">{paciente.ultimaConsulta}</p>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Próxima consulta</p>
                        <p className="font-medium">{paciente.proximaConsulta}</p>
                      </div>
                      
                      <div className="flex flex-col items-end space-y-2">
                        <Badge 
                          variant={paciente.status === 'ativo' ? 'default' : 'destructive'}
                          className={paciente.status === 'ativo' ? 'bg-green-100 text-green-800' : ''}
                        >
                          {paciente.status === 'ativo' ? 'Ativo' : 'Atenção'}
                        </Badge>
                        <Button size="sm" className="bg-turquesa hover:bg-turquesa/90">
                          Ver Prontuário
                        </Button>
                      </div>
                    </div>
                    
                    {paciente.observacoes && (
                      <div className="mt-4 p-3 bg-amarelo-dourado/10 rounded-lg">
                        <p className="text-sm text-amarelo-dourado font-medium">⚠️ {paciente.observacoes}</p>
                      </div>
                    )}
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

export default VeterinarioPacientes;
