
import React from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { Calendar, User, FileText, Stethoscope, Users, BookOpen, Clipboard, DollarSign } from 'lucide-react';

const VeterinarioFinanceiro = () => {
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
            <h1 className="text-2xl font-bold text-gray-900">Financeiro</h1>
            <p className="text-gray-600">Em desenvolvimento...</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VeterinarioFinanceiro;
