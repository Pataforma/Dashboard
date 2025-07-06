
import React from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import StatsCard from '@/components/cards/StatsCard';
import { Calendar, User, Plus, Search, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const AnuncianteDashboard = () => {
  const sidebarItems = [
    { label: 'Dashboard', href: '/anunciante', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Meus Eventos', href: '/anunciante/eventos', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Inscritos', href: '/anunciante/inscritos', icon: <User className="w-4 h-4" /> },
    { label: 'Divulgação', href: '/anunciante/divulgacao', icon: <Search className="w-4 h-4" /> },
    { label: 'Relatórios', href: '/anunciante/relatorios', icon: <FileText className="w-4 h-4" /> },
    { label: 'Perfil', href: '/anunciante/perfil', icon: <User className="w-4 h-4" /> },
  ];

  const meusEventos = [
    { 
      id: 1, 
      titulo: 'Festival Pet 2024', 
      data: '2024-02-15',
      status: 'Publicado',
      inscritos: 124,
      visualizacoes: 1850
    },
    { 
      id: 2, 
      titulo: 'Workshop de Adestramento', 
      data: '2024-01-28',
      status: 'Rascunho',
      inscritos: 0,
      visualizacoes: 0
    },
    { 
      id: 3, 
      titulo: 'Feira de Adoção Shopping Center', 
      data: '2024-01-20',
      status: 'Encerrado',
      inscritos: 89,
      visualizacoes: 2340
    },
  ];

  const inscricoesRecentes = [
    { nome: 'Maria Silva', evento: 'Festival Pet 2024', cidade: 'São Paulo', confirmado: true },
    { nome: 'João Santos', evento: 'Festival Pet 2024', cidade: 'São Paulo', confirmado: false },
    { nome: 'Ana Costa', evento: 'Feira de Adoção', cidade: 'Campinas', confirmado: true },
  ];

  const estatisticasEngajamento = [
    { metrica: 'Visualizações Total', valor: '4.190', crescimento: '+15%' },
    { metrica: 'Inscrições Total', valor: '213', crescimento: '+28%' },
    { metrica: 'Taxa de Conversão', valor: '5.1%', crescimento: '+2%' },
    { metrica: 'Compartilhamentos', valor: '89', crescimento: '+45%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        userType="anunciante" 
        userName="Eventos Pet Brasil" 
        alerts={2}
      />
      
      <div className="flex">
        <Sidebar items={sidebarItems} userType="anunciante" />
        
        <main className="flex-1 p-6">
          <div className="space-y-6">
            {/* Cards de Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Eventos Ativos"
                value={2}
                icon={<Calendar className="w-5 h-5" />}
                color="primary"
              />
              <StatsCard
                title="Total de Inscritos"
                value={213}
                icon={<User className="w-5 h-5" />}
                color="secondary"
              />
              <StatsCard
                title="Visualizações"
                value="4.1k"
                icon={<Search className="w-5 h-5" />}
                color="accent"
              />
              <StatsCard
                title="Compartilhamentos"
                value={89}
                icon={<FileText className="w-5 h-5" />}
                color="warning"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Meus Eventos */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Meus Eventos</span>
                    <Button size="sm" className="bg-turquesa hover:bg-turquesa/90">
                      <Plus className="w-4 h-4 mr-2" />
                      Criar Evento
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {meusEventos.map((evento) => (
                      <div key={evento.id} className="p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-medium">{evento.titulo}</h3>
                            <p className="text-sm text-gray-500">{evento.data}</p>
                          </div>
                          <Badge 
                            variant={evento.status === 'Publicado' ? 'default' : 
                              evento.status === 'Rascunho' ? 'secondary' : 'outline'}
                            className={
                              evento.status === 'Publicado' ? 'bg-green-100 text-green-800' :
                              evento.status === 'Rascunho' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }
                          >
                            {evento.status}
                          </Badge>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600 mb-3">
                          <span>{evento.inscritos} inscritos</span>
                          <span>{evento.visualizacoes} visualizações</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            Editar
                          </Button>
                          <Button size="sm" variant="outline">
                            Ver Inscritos
                          </Button>
                          {evento.status === 'Publicado' && (
                            <Button size="sm" className="bg-vermelho-alaranjado hover:bg-vermelho-alaranjado/90">
                              Divulgar
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Inscrições Recentes */}
              <Card>
                <CardHeader>
                  <CardTitle>Inscrições Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {inscricoesRecentes.map((inscricao, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium">{inscricao.nome}</p>
                          <p className="text-xs text-gray-500">{inscricao.evento}</p>
                          <p className="text-xs text-turquesa">{inscricao.cidade}</p>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant={inscricao.confirmado ? 'default' : 'secondary'}
                            className={inscricao.confirmado ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                          >
                            {inscricao.confirmado ? 'Confirmado' : 'Pendente'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Estatísticas de Engajamento */}
            <Card>
              <CardHeader>
                <CardTitle>Estatísticas de Engajamento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {estatisticasEngajamento.map((stat, index) => (
                    <div key={index} className="p-4 border rounded-lg text-center">
                      <p className="text-2xl font-bold text-turquesa">{stat.valor}</p>
                      <p className="text-sm text-gray-600">{stat.metrica}</p>
                      <p className="text-xs text-green-600 font-medium">{stat.crescimento}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Ferramentas de Divulgação */}
            <Card>
              <CardHeader>
                <CardTitle>Ferramentas de Divulgação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <div className="w-12 h-12 bg-turquesa/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Search className="w-6 h-6 text-turquesa" />
                    </div>
                    <h3 className="font-medium mb-2">Gerar Arte</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Crie imagens promocionais automaticamente
                    </p>
                    <Button size="sm" variant="outline">
                      Criar Arte
                    </Button>
                  </div>
                  
                  <div className="p-4 border rounded-lg text-center">
                    <div className="w-12 h-12 bg-vermelho-alaranjado/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6 text-vermelho-alaranjado" />
                    </div>
                    <h3 className="font-medium mb-2">QR Code</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Gere QR codes para inscrições rápidas
                    </p>
                    <Button size="sm" variant="outline">
                      Gerar QR
                    </Button>
                  </div>
                  
                  <div className="p-4 border rounded-lg text-center">
                    <div className="w-12 h-12 bg-amarelo-dourado/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Plus className="w-6 h-6 text-amarelo-dourado" />
                    </div>
                    <h3 className="font-medium mb-2">Link de Compartilhamento</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Copie links para redes sociais
                    </p>
                    <Button size="sm" variant="outline">
                      Copiar Link
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AnuncianteDashboard;
