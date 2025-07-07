
import React from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { Calendar, User, Plus, FileText, Users, BarChart3 } from 'lucide-react';

const AnuncianteEventos = () => {
  const sidebarItems = [
    { label: 'Dashboard', href: '/anunciante', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Eventos', href: '/anunciante/eventos', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Inscritos', href: '/anunciante/inscritos', icon: <Users className="w-4 h-4" /> },
    { label: 'Divulgação', href: '/anunciante/divulgacao', icon: <FileText className="w-4 h-4" /> },
    { label: 'Relatórios', href: '/anunciante/relatorios', icon: <BarChart3 className="w-4 h-4" /> },
    { label: 'Perfil', href: '/anunciante/perfil', icon: <User className="w-4 h-4" /> },
  ];

  return (
    <div className="min-vh-100 bg-gray-50">
      <Header 
        userType="anunciante" 
        userName="EventPet Pro" 
        alerts={1}
      />
      
      <div className="d-flex">
        <Sidebar items={sidebarItems} userType="anunciante" />
        
        <main className="flex-fill p-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h1 className="h2 fw-bold text-dark mb-3">Eventos</h1>
                <p className="text-muted">Em desenvolvimento...</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AnuncianteEventos;
