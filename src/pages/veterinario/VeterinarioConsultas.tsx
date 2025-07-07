
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
    <div className="min-vh-100 bg-gray-50">
      <Header 
        userType="veterinario" 
        userName="Dr. João Silva" 
        alerts={3}
      />
      
      <div className="d-flex">
        <Sidebar items={sidebarItems} userType="veterinario" />
        
        <main className="flex-fill p-4">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h1 className="h2 fw-bold text-dark mb-1">Consultas</h1>
                <p className="text-muted">Gerencie sua agenda de atendimentos</p>
              </div>
              <Button className="bg-pata-turquesa border-0">
                <Plus className="w-4 h-4 me-2" />
                Nova Consulta
              </Button>
            </div>

            <div className="row">
              <div className="col-12">
                {consultas.map((consulta) => (
                  <Card key={consulta.id} className="mb-3 hover-scale">
                    <CardContent className="p-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="me-3" style={{ fontSize: '3rem' }}>🐕</div>
                          <div>
                            <h3 className="h5 fw-semibold mb-1">{consulta.paciente}</h3>
                            <p className="text-muted mb-1">{consulta.tipo}</p>
                            <p className="small text-muted mb-0">Tutor: {consulta.tutor}</p>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="d-flex align-items-center mb-1">
                            <Calendar className="w-4 h-4 text-pata-turquesa me-2" />
                            <span className="fw-medium">{consulta.data}</span>
                          </div>
                          <div className="d-flex align-items-center">
                            <Clock className="w-4 h-4 text-pata-turquesa me-2" />
                            <span>{consulta.hora}</span>
                          </div>
                        </div>
                        
                        <div className="d-flex flex-column align-items-end">
                          <Badge 
                            variant={consulta.status === 'agendada' ? 'default' : 'secondary'}
                            className={`mb-2 ${consulta.status === 'em_andamento' ? 'badge-pata-amarelo' : 'badge-pata-turquesa'}`}
                          >
                            {consulta.status === 'agendada' ? 'Agendada' : 'Em Andamento'}
                          </Badge>
                          <Button size="sm" className="bg-pata-turquesa border-0">
                            Iniciar Consulta
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VeterinarioConsultas;
