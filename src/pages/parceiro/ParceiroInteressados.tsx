
import React from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { Calendar, User, Dog, Plus, Search, FileText } from 'lucide-react';

const ParceiroInteressados = () => {
  const sidebarItems = [
    { label: 'Dashboard', href: '/parceiro', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Pets Cadastrados', href: '/parceiro/pets', icon: <Dog className="w-4 h-4" /> },
    { label: 'Eventos e Feiras', href: '/parceiro/eventos', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Interessados', href: '/parceiro/interessados', icon: <User className="w-4 h-4" /> },
    { label: 'Relatórios', href: '/parceiro/relatorios', icon: <FileText className="w-4 h-4" /> },
    { label: 'Configurações', href: '/parceiro/configuracoes', icon: <Search className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        userType="parceiro" 
        userName="ONG Patinhas" 
        alerts={5}
      />
      
      <div className="flex">
        <Sidebar items={sidebarItems} userType="parceiro" />
        
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Interessados</h1>
            <p className="text-gray-600">Em desenvolvimento...</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ParceiroInteressados;
