
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Dog, Plus, Search, Edit, Heart, Activity } from 'lucide-react';

const TutorPets = () => {
  const [pets] = useState([
    { 
      id: 1, 
      nome: 'Rex', 
      especie: 'Cão', 
      raca: 'Golden Retriever',
      foto: '🐕', 
      idade: '3 anos',
      peso: '28kg',
      saude: 'Em dia',
      proximaVacina: '15/02/2024',
      status: 'saudavel',
      castrado: true,
      temperamento: 'Calmo e brincalhão',
      cor: 'dourado'
    },
    { 
      id: 2, 
      nome: 'Mimi', 
      especie: 'Gato', 
      raca: 'Persa',
      foto: '🐱', 
      idade: '2 anos',
      peso: '4kg',
      saude: 'Vacina pendente',
      proximaVacina: '10/01/2024',
      status: 'atencao',
      castrado: true,
      temperamento: 'Independente',
      cor: 'branco'
    },
    { 
      id: 3, 
      nome: 'Thor', 
      especie: 'Cão', 
      raca: 'Labrador',
      foto: '🐕', 
      idade: '5 anos',
      peso: '32kg',
      saude: 'Em dia',
      proximaVacina: '20/03/2024',
      status: 'saudavel',
      castrado: false,
      temperamento: 'Energético',
      cor: 'preto'
    },
  ]);

  const sidebarItems = [
    { label: 'Dashboard', href: '/tutor', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Meus Pets', href: '/tutor/pets', icon: <Dog className="w-4 h-4" /> },
    { label: 'Consultas', href: '/tutor/consultas', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Vacinas', href: '/tutor/vacinas', icon: <Plus className="w-4 h-4" /> },
    { label: 'Serviços Locais', href: '/tutor/servicos', icon: <Search className="w-4 h-4" /> },
    { label: 'Perfil', href: '/tutor/perfil', icon: <User className="w-4 h-4" /> },
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
        
        <main className="flex-fill p-4 fade-in">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center mb-5">
              <div>
                <h1 className="h2 fw-bold text-dark mb-2">Meus Companheiros</h1>
                <p className="text-muted mb-0">Gerencie as informações e cuidados dos seus pets</p>
              </div>
              <Button className="bg-pata-turquesa border-0 shadow-sm">
                <Plus className="w-4 h-4 me-2" />
                Cadastrar Novo Pet
              </Button>
            </div>

            <div className="row g-4">
              {pets.map((pet) => (
                <div key={pet.id} className="col-lg-4 col-md-6">
                  <Card className="pata-card hover-scale h-100">
                    <CardHeader className="text-center pb-3">
                      <div className="mb-3">
                        <div className="pet-emoji">{pet.foto}</div>
                      </div>
                      <CardTitle className="h4 mb-2 text-dark">{pet.nome}</CardTitle>
                      <div className="d-flex justify-content-center gap-2 flex-wrap">
                        <Badge variant="outline" className="border-pata-turquesa text-pata-turquesa">
                          {pet.especie}
                        </Badge>
                        <Badge variant="outline" className="border-muted text-muted">
                          {pet.raca}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="row g-3 mb-4">
                        <div className="col-6">
                          <div className="bg-light rounded-3 p-3 text-center">
                            <p className="text-muted small mb-1 fw-medium">Idade</p>
                            <p className="fw-semibold mb-0 text-dark">{pet.idade}</p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="bg-light rounded-3 p-3 text-center">
                            <p className="text-muted small mb-1 fw-medium">Peso</p>
                            <p className="fw-semibold mb-0 text-dark">{pet.peso}</p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="bg-light rounded-3 p-3 text-center">
                            <p className="text-muted small mb-1 fw-medium">Castrado</p>
                            <p className="fw-semibold mb-0 text-dark">{pet.castrado ? 'Sim' : 'Não'}</p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="bg-light rounded-3 p-3 text-center">
                            <p className="text-muted small mb-1 fw-medium">Cor</p>
                            <p className="fw-semibold mb-0 text-dark text-capitalize">{pet.cor}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="d-flex align-items-center mb-2">
                          <Activity className="w-4 h-4 text-pata-turquesa me-2" />
                          <span className="small fw-medium text-muted">Status de Saúde</span>
                        </div>
                        <Badge 
                          variant={pet.status === 'saudavel' ? 'default' : 'destructive'}
                          className={pet.status === 'saudavel' ? 'bg-success' : 'bg-warning text-dark'}
                        >
                          {pet.saude}
                        </Badge>
                        <p className="small text-muted mt-2 mb-0">
                          <Calendar className="w-3 h-3 me-1 d-inline" />
                          Próxima vacina: {pet.proximaVacina}
                        </p>
                      </div>

                      <div className="mb-4">
                        <div className="d-flex align-items-center mb-2">
                          <Heart className="w-4 h-4 text-pata-vermelho me-2" />
                          <span className="small fw-medium text-muted">Temperamento</span>
                        </div>
                        <p className="small text-dark mb-0">{pet.temperamento}</p>
                      </div>
                      
                      <div className="d-flex gap-2">
                        <Button size="sm" variant="outline" className="flex-fill">
                          <Edit className="w-3 h-3 me-2" />
                          Editar
                        </Button>
                        <Button size="sm" className="flex-fill bg-pata-turquesa border-0">
                          Ver Histórico
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="row mt-5">
              <div className="col-12">
                <div className="text-center">
                  <p className="text-muted">
                    <Dog className="w-4 h-4 me-2 d-inline" />
                    {pets.length} pets cadastrados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TutorPets;
