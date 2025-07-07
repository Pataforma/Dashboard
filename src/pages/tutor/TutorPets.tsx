
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Dog, Plus, Search, Edit, Trash2 } from 'lucide-react';

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
      temperamento: 'Calmo e brincalhão'
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
      temperamento: 'Independente'
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
      temperamento: 'Energético'
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
        
        <main className="flex-fill p-4">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h1 className="h2 fw-bold text-dark mb-1">Meus Pets</h1>
                <p className="text-muted">Gerencie as informações dos seus companheiros</p>
              </div>
              <Button className="bg-pata-turquesa border-0">
                <Plus className="w-4 h-4 me-2" />
                Cadastrar Novo Pet
              </Button>
            </div>

            <div className="row">
              {pets.map((pet) => (
                <div key={pet.id} className="col-md-6 col-lg-4 mb-4">
                  <Card className="h-100 hover-scale">
                    <CardHeader className="text-center pb-2">
                      <div className="mb-3" style={{ fontSize: '4rem' }}>{pet.foto}</div>
                      <CardTitle className="h5 mb-1">{pet.nome}</CardTitle>
                      <p className="text-muted small">{pet.especie} • {pet.raca}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="row g-3 mb-3">
                        <div className="col-6">
                          <p className="text-muted small mb-1">Idade:</p>
                          <p className="fw-medium small">{pet.idade}</p>
                        </div>
                        <div className="col-6">
                          <p className="text-muted small mb-1">Peso:</p>
                          <p className="fw-medium small">{pet.peso}</p>
                        </div>
                        <div className="col-6">
                          <p className="text-muted small mb-1">Castrado:</p>
                          <p className="fw-medium small">{pet.castrado ? 'Sim' : 'Não'}</p>
                        </div>
                        <div className="col-6">
                          <p className="text-muted small mb-1">Temperamento:</p>
                          <p className="fw-medium small">{pet.temperamento}</p>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <Badge 
                          variant={pet.status === 'saudavel' ? 'default' : 'destructive'}
                          className={pet.status === 'saudavel' ? 'bg-success' : ''}
                        >
                          {pet.saude}
                        </Badge>
                        <p className="small text-muted mt-2 mb-0">
                          Próxima vacina: {pet.proximaVacina}
                        </p>
                      </div>
                      
                      <div className="d-flex gap-2">
                        <Button size="sm" variant="outline" className="flex-fill">
                          <Edit className="w-3 h-3 me-1" />
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default TutorPets;
