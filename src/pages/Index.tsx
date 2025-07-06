
import React, { useState } from 'react';
import VeterinarioDashboard from '@/components/veterinario/VeterinarioDashboard';
import TutorDashboard from '@/components/tutor/TutorDashboard';
import ParceiroDashboard from '@/components/parceiro/ParceiroDashboard';
import AnuncianteDashboard from '@/components/anunciante/AnuncianteDashboard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [selectedDashboard, setSelectedDashboard] = useState<string | null>(null);

  if (selectedDashboard) {
    switch (selectedDashboard) {
      case 'veterinario':
        return <VeterinarioDashboard />;
      case 'tutor':
        return <TutorDashboard />;
      case 'parceiro':
        return <ParceiroDashboard />;
      case 'anunciante':
        return <AnuncianteDashboard />;
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-turquesa/5 via-white to-amarelo-dourado/5">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-turquesa rounded-xl flex items-center justify-center">
              <span className="text-white text-2xl">🐾</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Pataforma</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Centro de Referência Animal - Conectando veterinários, tutores, ONGs e eventos pet em uma única plataforma
          </p>
        </div>

        {/* Dashboard Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Veterinário */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => setSelectedDashboard('veterinario')}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-turquesa/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-turquesa/20 transition-colors">
                <span className="text-3xl">🩺</span>
              </div>
              <CardTitle className="text-turquesa">Veterinário Autônomo</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 text-sm mb-4">
                Gerencie consultas, prontuários, prescrições e seu perfil profissional
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Agenda de consultas</li>
                <li>• Prontuários digitais</li>
                <li>• Controle financeiro</li>
                <li>• Perfil público</li>
              </ul>
            </CardContent>
          </Card>

          {/* Tutor */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => setSelectedDashboard('tutor')}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-vermelho-alaranjado/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-vermelho-alaranjado/20 transition-colors">
                <span className="text-3xl">🐕</span>
              </div>
              <CardTitle className="text-vermelho-alaranjado">Tutor de Pet</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 text-sm mb-4">
                Acompanhe a saúde dos seus pets e encontre serviços na sua região
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Histórico médico</li>
                <li>• Lembretes de vacinas</li>
                <li>• Serviços locais</li>
                <li>• Agendamentos</li>
              </ul>
            </CardContent>
          </Card>

          {/* Parceiro (ONG/Protetor) */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => setSelectedDashboard('parceiro')}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-amarelo-dourado/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amarelo-dourado/20 transition-colors">
                <span className="text-3xl">🤝</span>
              </div>
              <CardTitle className="text-amarelo-dourado">Parceiro ONG</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 text-sm mb-4">
                Gerencie pets para adoção, eventos e campanhas sociais
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Gestão de adoções</li>
                <li>• Eventos e feiras</li>
                <li>• Controle de interessados</li>
                <li>• Relatórios de impacto</li>
              </ul>
            </CardContent>
          </Card>

          {/* Anunciante */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => setSelectedDashboard('anunciante')}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gray-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-500/20 transition-colors">
                <span className="text-3xl">📣</span>
              </div>
              <CardTitle className="text-gray-700">Anunciante de Evento</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 text-sm mb-4">
                Organize e promova eventos pet com ferramentas de divulgação
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Criação de eventos</li>
                <li>• Gestão de inscritos</li>
                <li>• Ferramentas de divulgação</li>
                <li>• Métricas de engajamento</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Uma plataforma completa para o universo pet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-turquesa rounded-lg flex items-center justify-center mx-auto">
                <span className="text-white text-xl">💊</span>
              </div>
              <h3 className="font-semibold text-gray-900">Gestão de Saúde</h3>
              <p className="text-gray-600 text-sm">
                Prontuários digitais, controle de vacinas e histórico médico completo
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-vermelho-alaranjado rounded-lg flex items-center justify-center mx-auto">
                <span className="text-white text-xl">🏠</span>
              </div>
              <h3 className="font-semibold text-gray-900">Adoção Responsável</h3>
              <p className="text-gray-600 text-sm">
                Conecte pets que precisam de lar com famílias amorosas
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-amarelo-dourado rounded-lg flex items-center justify-center mx-auto">
                <span className="text-white text-xl">🎉</span>
              </div>
              <h3 className="font-semibold text-gray-900">Eventos Pet</h3>
              <p className="text-gray-600 text-sm">
                Encontre e organize eventos para fortalecer a comunidade pet
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Pronto para fazer parte da Pataforma?
            </h3>
            <p className="text-gray-600 mb-6">
              Escolha o tipo de conta que melhor se adequa ao seu perfil e comece a usar nossa plataforma
            </p>
            <div className="space-y-3">
              <p className="text-sm text-gray-500">
                Clique em qualquer dashboard acima para explorar as funcionalidades
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
