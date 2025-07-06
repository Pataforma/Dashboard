
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
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Meus Pets</h1>
                <p className="text-gray-600">Gerencie as informações dos seus companheiros</p>
              </div>
              <Button className="bg-turquesa hover:bg-turquesa/90">
                <Plus className="w-4 h-4 mr-2" />
                Cadastrar Novo Pet
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pets.map((pet) => (
                <Card key={pet.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <div className="text-6xl mb-4">{pet.foto}</div>
                    <CardTitle className="text-xl">{pet.nome}</CardTitle>
                    <p className="text-gray-500">{pet.especie} • {pet.raca}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Idade:</p>
                        <p className="font-medium">{pet.idade}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Peso:</p>
                        <p className="font-medium">{pet.peso}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Castrado:</p>
                        <p className="font-medium">{pet.castrado ? 'Sim' : 'Não'}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Temperamento:</p>
                        <p className="font-medium text-xs">{pet.temperamento}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Badge 
                        variant={pet.status === 'saudavel' ? 'default' : 'destructive'}
                        className={pet.status === 'saudavel' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {pet.saude}
                      </Badge>
                      <p className="text-xs text-gray-500">
                        Próxima vacina: {pet.proximaVacina}
                      </p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="w-3 h-3 mr-1" />
                        Editar
                      </Button>
                      <Button size="sm" className="flex-1 bg-turquesa hover:bg-turquesa/90">
                        Ver Histórico
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TutorPets;
