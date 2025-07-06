
import React from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import StatsCard from '@/components/cards/StatsCard';
import { Calendar, User, Dog, Plus, Search, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ParceiroDashboard = () => {
  const sidebarItems = [
    { label: 'Dashboard', href: '/parceiro', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Pets Cadastrados', href: '/parceiro/pets', icon: <Dog className="w-4 h-4" /> },
    { label: 'Eventos e Feiras', href: '/parceiro/eventos', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Interessados', href: '/parceiro/interessados', icon: <User className="w-4 h-4" /> },
    { label: 'Relatórios', href: '/parceiro/relatorios', icon: <FileText className="w-4 h-4" /> },
    { label: 'Configurações', href: '/parceiro/config', icon: <Search className="w-4 h-4" /> },
  ];

  const petsParaAdocao = [
    { 
      id: 1, 
      nome: 'Bela', 
      idade: '2 anos', 
      porte: 'Médio',
      foto: '🐕', 
      status: 'Disponível',
      interessados: 3
    },
    { 
      id: 2, 
      nome: 'Simba', 
      idade: '6 meses', 
      porte: 'Pequeno',
      foto: '🐱', 
      status: 'Em análise',
      interessados: 1
    },
    { 
      id: 3, 
      nome: 'Max', 
      idade: '4 anos', 
      porte: 'Grande',
      foto: '🐕', 
      status: 'Disponível',
      interessados: 5
    },
  ];

  const eventosRecentes = [
    { nome: 'Feira de Adoção Shopping', data: '2024-01-15', participantes: 45, adocoes: 3 },
    { nome: 'Campanha de Castração', data: '2024-01-08', participantes: 32, adocoes: 0 },
    { nome: 'Bazar Beneficente', data: '2024-01-03', participantes: 78, adocoes: 1 },
  ];

  const interessadosRecentes = [
    { nome: 'Ana Paula', pet: 'Bela', status: 'Aguardando visita', contato: '(11) 99999-9999' },
    { nome: 'Carlos Silva', pet: 'Max', status: 'Entrevista marcada', contato: '(11) 88888-8888' },
    { nome: 'Fernanda Costa', pet: 'Simba', status: 'Documentos enviados', contato: '(11) 77777-7777' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        userType="parceiro" 
        userName="ONG Patinhas Solidárias" 
        alerts={4}
      />
      
      <div className="flex">
        <Sidebar items={sidebarItems} userType="parceiro" />
        
        <main className="flex-1 p-6">
          <div className="space-y-6">
            {/* Cards de Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Pets Ativos"
                value={12}
                icon={<Dog className="w-5 h-5" />}
                color="primary"
              />
              <StatsCard
                title="Adoções Realizadas"
                value={8}
                icon={<User className="w-5 h-5" />}
                color="secondary"
              />
              <StatsCard
                title="Eventos Ativos"
                value={3}
                icon={<Calendar className="w-5 h-5" />}
                color="accent"
              />
              <StatsCard
                title="Interessados"
                value={15}
                icon={<FileText className="w-5 h-5" />}
                color="warning"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pets para Adoção */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Pets para Adoção</span>
                    <Button size="sm" className="bg-turquesa hover:bg-turquesa/90">
                      <Plus className="w-4 h-4 mr-2" />
                      Cadastrar Pet
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {petsParaAdocao.map((pet) => (
                      <div key={pet.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl">{pet.foto}</div>
                          <div>
                            <p className="font-medium">{pet.nome}</p>
                            <p className="text-sm text-gray-500">{pet.idade} • {pet.porte}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge 
                                variant={pet.status === 'Disponível' ? 'default' : 'secondary'}
                                className={pet.status === 'Disponível' ? 'bg-green-100 text-green-800' : ''}
                              >
                                {pet.status}
                              </Badge>
                              <span className="text-xs text-gray-500">
                                {pet.interessados} interessados
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Button size="sm" variant="outline">
                            Editar
                          </Button>
                          <Button size="sm" className="bg-vermelho-alaranjado hover:bg-vermelho-alaranjado/90 w-full">
                            Gerar Arte
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Interessados Recentes */}
              <Card>
                <CardHeader>
                  <CardTitle>Interessados Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {interessadosRecentes.map((interessado, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium">{interessado.nome}</p>
                          <p className="text-xs text-gray-500">Interessado em: {interessado.pet}</p>
                          <p className="text-xs text-turquesa">{interessado.contato}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="text-xs mb-2">
                            {interessado.status}
                          </Badge>
                          <Button size="sm" variant="outline" className="block">
                            Contatar
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Eventos e Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Eventos Recentes</span>
                    <Button size="sm" variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Novo Evento
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {eventosRecentes.map((evento, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <h3 className="font-medium">{evento.nome}</h3>
                        <p className="text-sm text-gray-500 mb-2">{evento.data}</p>
                        <div className="flex justify-between text-sm">
                          <span>{evento.participantes} participantes</span>
                          <span className="text-turquesa font-medium">
                            {evento.adocoes} adoções
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Relatório Mensal</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-turquesa/10 rounded-lg">
                      <span className="text-sm font-medium">Pets Adotados</span>
                      <span className="text-lg font-bold text-turquesa">8</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-vermelho-alaranjado/10 rounded-lg">
                      <span className="text-sm font-medium">Eventos Realizados</span>
                      <span className="text-lg font-bold text-vermelho-alaranjado">3</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-amarelo-dourado/10 rounded-lg">
                      <span className="text-sm font-medium">Novos Interessados</span>
                      <span className="text-lg font-bold text-amarelo-dourado">15</span>
                    </div>
                    <Button className="w-full bg-turquesa hover:bg-turquesa/90">
                      Gerar Relatório Completo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ParceiroDashboard;
