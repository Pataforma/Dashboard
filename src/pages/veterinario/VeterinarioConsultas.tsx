
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
      status: 'agendada',
      emoji: '🐕'
    },
    {
      id: 2,
      paciente: 'Mimi',
      tutor: 'João Santos',
      data: '2024-01-15',
      hora: '15:30',
      tipo: 'Vacinação',
      status: 'em_andamento',
      emoji: '🐱'
    },
    {
      id: 3,
      paciente: 'Luna',
      tutor: 'Ana Costa',
      data: '2024-01-15',
      hora: '16:00',
      tipo: 'Castração',
      status: 'agendada',
      emoji: '🐕'
    }
  ];

  return (
    <div className="min-vh-100 bg-gray-50">
      <Header 
        userType="veterinario" 
        userName="Dr. João Silva" 
        alerts={3}
      />
      
      <div className="d-flex">
        <Sidebar items={sidebarItems} userType="veterinario" />
        
        <main className="flex-fill p-4 fade-in">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center mb-5">
              <div>
                <h1 className="h2 fw-bold text-dark mb-2">Consultas Agendadas</h1>
                <p className="text-muted mb-0">Gerencie sua agenda de atendimentos veterinários</p>
              </div>
              <Button className="bg-pata-turquesa border-0 shadow-sm">
                <Plus className="w-4 h-4 me-2" />
                Nova Consulta
              </Button>
            </div>

            <div className="row g-4">
              {consultas.map((consulta) => (
                <div key={consulta.id} className="col-12">
                  <Card className="pata-card hover-scale">
                    <CardContent className="p-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="me-4">
                            <div className="pet-emoji">{consulta.emoji}</div>
                          </div>
                          <div>
                            <h3 className="h5 fw-semibold mb-2 text-dark">{consulta.paciente}</h3>
                            <p className="text-muted mb-2 fw-medium">{consulta.tipo}</p>
                            <p className="small text-muted mb-0">
                              <User className="w-3 h-3 me-1 d-inline" />
                              Tutor: {consulta.tutor}
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-center px-4">
                          <div className="d-flex align-items-center mb-2 justify-content-center">
                            <Calendar className="w-4 h-4 text-pata-turquesa me-2" />
                            <span className="fw-semibold text-dark">{consulta.data}</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-center">
                            <Clock className="w-4 h-4 text-pata-turquesa me-2" />
                            <span className="text-muted fw-medium">{consulta.hora}</span>
                          </div>
                        </div>
                        
                        <div className="d-flex flex-column align-items-end gap-3">
                          <Badge 
                            variant={consulta.status === 'agendada' ? 'default' : 'secondary'}
                            className={consulta.status === 'em_andamento' ? 'badge-pata-amarelo' : 'badge-pata-turquesa'}
                          >
                            {consulta.status === 'agendada' ? 'Agendada' : 'Em Andamento'}
                          </Badge>
                          <Button size="sm" className="bg-pata-turquesa border-0 shadow-sm">
                            <Stethoscope className="w-4 h-4 me-2" />
                            Iniciar Consulta
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="row mt-5">
              <div className="col-12">
                <div className="d-flex justify-content-center">
                  <p className="text-muted">
                    <Clock className="w-4 h-4 me-2 d-inline" />
                    Próxima atualização em 5 minutos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VeterinarioConsultas;
