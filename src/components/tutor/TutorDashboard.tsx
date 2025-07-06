
import React from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import StatsCard from '@/components/cards/StatsCard';
import { Calendar, User, Dog, Plus, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const TutorDashboard = () => {
  const sidebarItems = [
    { label: 'Dashboard', href: '/tutor', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Meus Pets', href: '/tutor/pets', icon: <Dog className="w-4 h-4" /> },
    { label: 'Consultas', href: '/tutor/consultas', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Vacinas', href: '/tutor/vacinas', icon: <Plus className="w-4 h-4" /> },
    { label: 'Serviços Locais', href: '/tutor/servicos', icon: <Search className="w-4 h-4" /> },
    { label: 'Perfil', href: '/tutor/perfil', icon: <User className="w-4 h-4" /> },
  ];

  const meusPets = [
    { 
      id: 1, 
      nome: 'Rex', 
      especie: 'Cão', 
      foto: '🐕', 
      idade: '3 anos',
      saude: 'Em dia',
      proximaVacina: '15/02/2024',
      status: 'saudavel'
    },
    { 
      id: 2, 
      nome: 'Mimi', 
      especie: 'Gato', 
      foto: '🐱', 
      idade: '2 anos',
      saude: 'Vacina pendente',
      proximaVacina: '10/01/2024',
      status: 'atencao'
    },
    { 
      id: 3, 
      nome: 'Thor', 
      especie: 'Cão', 
      foto: '🐕', 
      idade: '5 anos',
      saude: 'Em dia',
      proximaVacina: '20/03/2024',
      status: 'saudavel'
    },
  ];

  const proximasAtividades = [
    { data: '2024-01-10', atividade: 'Vacinação - Mimi', tipo: 'vacina' },
    { data: '2024-01-15', atividade: 'Consulta de rotina - Rex', tipo: 'consulta' },
    { data: '2024-01-20', atividade: 'Banho e tosa - Thor', tipo: 'servico' },
  ];

  const servicosRecomendados = [
    { nome: 'Pet Shop Central', tipo: 'Banho e Tosa', distancia: '0.5 km', avaliacao: 4.8 },
    { nome: 'Clínica VetLife', tipo: 'Veterinário', distancia: '1.2 km', avaliacao: 4.9 },
    { nome: 'Hotel Pet', tipo: 'Hospedagem', distancia: '2.1 km', avaliacao: 4.7 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        userType="tutor" 
        userName="Maria Silva" 
        alerts={2}
      />
      
      <div className="flex">
        <Sidebar items={sidebarItems} userType="tutor" />
        
        <main className="flex-1 p-6">
          <div className="space-y-6">
            {/* Cards de Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Meus Pets"
                value={3}
                icon={<Dog className="w-5 h-5" />}
                color="primary"
              />
              <StatsCard
                title="Vacinas Pendentes"
                value={1}
                icon={<Plus className="w-5 h-5" />}
                color="warning"
              />
              <StatsCard
                title="Próxima Consulta"
                value="15/01"
                icon={<Calendar className="w-5 h-5" />}
                color="secondary"
              />
              <StatsCard
                title="Lembretes Ativos"
                value={5}
                icon={<Calendar className="w-5 h-5" />}
                color="accent"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Meus Pets */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Meus Pets</span>
                    <Button size="sm" className="bg-turquesa hover:bg-turquesa/90">
                      <Plus className="w-4 h-4 mr-2" />
                      Cadastrar Pet
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {meusPets.map((pet) => (
                      <div key={pet.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl">{pet.foto}</div>
                          <div>
                            <p className="font-medium">{pet.nome}</p>
                            <p className="text-sm text-gray-500">{pet.especie} • {pet.idade}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge 
                                variant={pet.status === 'saudavel' ? 'default' : 'destructive'}
                                className={pet.status === 'saudavel' ? 'bg-green-100 text-green-800' : ''}
                              >
                                {pet.saude}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">Próxima vacina:</p>
                          <p className="text-sm font-medium">{pet.proximaVacina}</p>
                          <Button size="sm" variant="outline" className="mt-2">
                            Ver Histórico
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Próximas Atividades */}
              <Card>
                <CardHeader>
                  <CardTitle>Próximas Atividades</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {proximasAtividades.map((atividade, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="text-sm font-medium text-turquesa">
                            {atividade.data}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{atividade.atividade}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {atividade.tipo}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Serviços Recomendados */}
            <Card>
              <CardHeader>
                <CardTitle>Serviços Recomendados na Sua Região</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {servicosRecomendados.map((servico, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <h3 className="font-medium">{servico.nome}</h3>
                      <p className="text-sm text-gray-500">{servico.tipo}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-400">{servico.distancia}</span>
                        <div className="flex items-center space-x-1">
                          <span className="text-amarelo-dourado">⭐</span>
                          <span className="text-xs">{servico.avaliacao}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full mt-3">
                        Entrar em Contato
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TutorDashboard;
