
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import StatsCard from '@/components/cards/StatsCard';
import { Calendar, User, FileText, Plus, Search, Dog } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const VeterinarioDashboard = () => {
  const sidebarItems = [
    { label: 'Dashboard', href: '/veterinario', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Pacientes', href: '/veterinario/pacientes', icon: <Dog className="w-4 h-4" /> },
    { label: 'Consultas', href: '/veterinario/consultas', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Prontuários', href: '/veterinario/prontuarios', icon: <FileText className="w-4 h-4" /> },
    { label: 'Prescrições', href: '/veterinario/prescricoes', icon: <FileText className="w-4 h-4" /> },
    { label: 'Exames', href: '/veterinario/exames', icon: <Search className="w-4 h-4" /> },
    { label: 'Financeiro', href: '/veterinario/financeiro', icon: <User className="w-4 h-4" /> },
    { label: 'Perfil', href: '/veterinario/perfil', icon: <User className="w-4 h-4" /> },
  ];

  const pacientesRecentes = [
    { id: 1, nome: 'Rex', tutor: 'Maria Silva', foto: '🐕', ultimaConsulta: '2024-01-15', proximaVacina: '2024-02-15' },
    { id: 2, nome: 'Mimi', tutor: 'João Santos', foto: '🐱', ultimaConsulta: '2024-01-10', proximaVacina: '2024-03-10' },
    { id: 3, nome: 'Thor', tutor: 'Ana Costa', foto: '🐕', ultimaConsulta: '2024-01-08', proximaVacina: '2024-02-08' },
  ];

  const consultasHoje = [
    { horario: '09:00', pet: 'Rex', tutor: 'Maria Silva', tipo: 'Consulta de rotina' },
    { horario: '10:30', pet: 'Mimi', tutor: 'João Santos', tipo: 'Vacinação' },
    { horario: '14:00', pet: 'Thor', tutor: 'Ana Costa', tipo: 'Retorno' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        userType="veterinario" 
        userName="Dr. Carlos Veterinário" 
        alerts={3}
      />
      
      <div className="flex">
        <Sidebar items={sidebarItems} userType="veterinario" />
        
        <main className="flex-1 p-6">
          <div className="space-y-6">
            {/* Cards de Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Consultas Hoje"
                value={3}
                icon={<Calendar className="w-5 h-5" />}
                color="primary"
              />
              <StatsCard
                title="Vacinas do Dia"
                value={2}
                icon={<Plus className="w-5 h-5" />}
                color="secondary"
              />
              <StatsCard
                title="Exames Pendentes"
                value={5}
                icon={<Search className="w-5 h-5" />}
                color="accent"
              />
              <StatsCard
                title="Retornos Marcados"
                value={1}
                icon={<FileText className="w-5 h-5" />}
                color="warning"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Consultas de Hoje */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Consultas de Hoje</span>
                    <Button size="sm" className="bg-turquesa hover:bg-turquesa/90">
                      <Plus className="w-4 h-4 mr-2" />
                      Nova Consulta
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {consultasHoje.map((consulta, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="text-sm font-medium text-turquesa">
                            {consulta.horario}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{consulta.pet}</p>
                            <p className="text-xs text-gray-500">{consulta.tutor}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {consulta.tipo}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pacientes Ativos */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Pacientes Recentes</span>
                    <Button variant="outline" size="sm">
                      Ver Todos
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pacientesRecentes.map((paciente) => (
                      <div key={paciente.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{paciente.foto}</div>
                          <div>
                            <p className="text-sm font-medium">{paciente.nome}</p>
                            <p className="text-xs text-gray-500">{paciente.tutor}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">Última consulta:</p>
                          <p className="text-xs font-medium">{paciente.ultimaConsulta}</p>
                          <Button size="sm" variant="outline" className="mt-2 text-xs">
                            Abrir Prontuário
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Calendário Interativo */}
            <Card>
              <CardHeader>
                <CardTitle>Agenda Semanal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((dia) => (
                    <div key={dia} className="text-center text-sm font-medium text-gray-500 py-2">
                      {dia}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 35 }, (_, i) => (
                    <div key={i} className="aspect-square border rounded-lg p-2 hover:bg-gray-50 cursor-pointer">
                      <div className="text-sm">{((i % 31) + 1)}</div>
                      {(i + 1) % 7 === 0 && i < 14 && (
                        <div className="w-2 h-2 bg-turquesa rounded-full mt-1"></div>
                      )}
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

export default VeterinarioDashboard;
