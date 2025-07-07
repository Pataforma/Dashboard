
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
    <div className="min-vh-100 bg-gray-50">
      <Header 
        userType="tutor" 
        userName="Maria Silva" 
        alerts={2}
      />
      
      <div className="d-flex">
        <Sidebar items={sidebarItems} userType="tutor" />
        
        <main className="flex-fill p-4">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h1 className="h2 fw-bold text-dark mb-1">Consultas</h1>
                <p className="text-muted">Acompanhe o histórico médico dos seus pets</p>
              </div>
              <Button className="bg-pata-turquesa border-0">
                <Calendar className="w-4 h-4 me-2" />
                Agendar Consulta
              </Button>
            </div>

            <div className="row">
              <div className="col-12">
                {consultas.map((consulta) => (
                  <Card key={consulta.id} className="mb-3 hover-scale">
                    <CardContent className="p-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="me-3" style={{ fontSize: '2rem' }}>🐕</div>
                          <div>
                            <h3 className="h5 fw-semibold mb-1">{consulta.pet}</h3>
                            <p className="text-muted mb-1">{consulta.tipo}</p>
                            <p className="small text-muted mb-0">Dr. {consulta.veterinario}</p>
                          </div>
                        </div>
                        
                        <div className="text-end">
                          <div className="d-flex align-items-center mb-1">
                            <Calendar className="w-4 h-4 text-pata-turquesa me-2" />
                            <span className="fw-medium">{consulta.data}</span>
                          </div>
                          <div className="d-flex align-items-center mb-1">
                            <Clock className="w-4 h-4 text-pata-turquesa me-2" />
                            <span>{consulta.hora}</span>
                          </div>
                          <div className="d-flex align-items-center">
                            <MapPin className="w-4 h-4 text-pata-turquesa me-2" />
                            <span className="small text-muted">{consulta.endereco}</span>
                          </div>
                        </div>
                        
                        <div className="d-flex flex-column align-items-end">
                          <Badge 
                            variant={consulta.status === 'agendada' ? 'default' : 'secondary'}
                            className={`mb-2 ${consulta.status === 'agendada' ? 'badge-pata-turquesa' : 'bg-success'}`}
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default TutorConsultas;
