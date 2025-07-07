
import React from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { Calendar, User, Dog, Plus, Search, FileText } from 'lucide-react';

const ParceiroEventos = () => {
  const sidebarItems = [
    { label: 'Dashboard', href: '/parceiro', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Pets Cadastrados', href: '/parceiro/pets', icon: <Dog className="w-4 h-4" /> },
    { label: 'Eventos e Feiras', href: '/parceiro/eventos', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Interessados', href: '/parceiro/interessados', icon: <User className="w-4 h-4" /> },
    { label: 'Relatórios', href: '/parceiro/relatorios', icon: <FileText className="w-4 h-4" /> },
    { label: 'Configurações', href: '/parceiro/configuracoes', icon: <Search className="w-4 h-4" /> },
  ];

  return (
    <div className="min-vh-100 bg-gray-50">
      <Header 
        userType="parceiro" 
        userName="ONG Patinhas" 
        alerts={5}
      />
      
      <div className="d-flex">
        <Sidebar items={sidebarItems} userType="parceiro" />
        
        <main className="flex-fill p-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h1 className="h2 fw-bold text-dark mb-3">Eventos e Feiras</h1>
                <p className="text-muted">Em desenvolvimento...</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ParceiroEventos;
