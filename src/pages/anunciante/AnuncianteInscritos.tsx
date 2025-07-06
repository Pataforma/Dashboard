
import React from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { Calendar, User, Plus, FileText, Users, BarChart3 } from 'lucide-react';

const AnuncianteInscritos = () => {
  const sidebarItems = [
    { label: 'Dashboard', href: '/anunciante', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Eventos', href: '/anunciante/eventos', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Inscritos', href: '/anunciante/inscritos', icon: <Users className="w-4 h-4" /> },
    { label: 'Divulgação', href: '/anunciante/divulgacao', icon: <FileText className="w-4 h-4" /> },
    { label: 'Relatórios', href: '/anunciante/relatorios', icon: <BarChart3 className="w-4 h-4" /> },
    { label: 'Perfil', href: '/anunciante/perfil', icon: <User className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        userType="anunciante" 
        userName="EventPet Pro" 
        alerts={1}
      />
      
      <div className="flex">
        <Sidebar items={sidebarItems} userType="anunciante" />
        
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Inscritos</h1>
            <p className="text-gray-600">Em desenvolvimento...</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AnuncianteInscritos;
