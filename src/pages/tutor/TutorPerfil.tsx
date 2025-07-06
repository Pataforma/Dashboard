
import React from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, Dog, Plus, Search, Edit, Mail, Phone, MapPin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TutorPerfil = () => {
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
                <h1 className="text-2xl font-bold text-gray-900">Meu Perfil</h1>
                <p className="text-gray-600">Gerencie suas informações pessoais</p>
              </div>
              <Button className="bg-turquesa hover:bg-turquesa/90">
                <Edit className="w-4 h-4 mr-2" />
                Editar Perfil
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Informações Pessoais */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Informações Pessoais</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src="" alt="Maria Silva" />
                      <AvatarFallback className="bg-turquesa text-white text-2xl">MS</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h2 className="text-xl font-semibold">Maria Silva</h2>
                      <p className="text-gray-600">Tutora de pets desde 2020</p>
                      <Button size="sm" variant="outline">
                        Alterar Foto
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Nome Completo</label>
                      <p className="p-3 bg-gray-50 rounded-lg">Maria Silva Santos</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">CPF</label>
                      <p className="p-3 bg-gray-50 rounded-lg">***.***.***-**</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Data de Nascimento</label>
                      <p className="p-3 bg-gray-50 rounded-lg">15/08/1985</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Telefone</label>
                      <p className="p-3 bg-gray-50 rounded-lg">(11) 99999-9999</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Resumo da Conta */}
              <Card>
                <CardHeader>
                  <CardTitle>Resumo da Conta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Pets cadastrados</span>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Consultas realizadas</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Vacinas aplicadas</span>
                    <span className="font-semibold">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Membro desde</span>
                    <span className="font-semibold">Jan 2020</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contato */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        E-mail
                      </label>
                      <p className="p-3 bg-gray-50 rounded-lg">maria.silva@email.com</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        Telefone
                      </label>
                      <p className="p-3 bg-gray-50 rounded-lg">(11) 99999-9999</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Endereço
                    </label>
                    <p className="p-3 bg-gray-50 rounded-lg">
                      Rua das Flores, 123 - Apartamento 45<br />
                      Vila Madalena - São Paulo/SP<br />
                      CEP: 05433-000
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Preferências */}
              <Card>
                <CardHeader>
                  <CardTitle>Preferências</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Notificações</h4>
                    <div className="space-y-2 text-sm">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span>E-mail</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span>WhatsApp</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span>SMS</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Lembretes</h4>
                    <div className="space-y-2 text-sm">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span>Vacinas</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span>Consultas</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span>Medicamentos</span>
                      </label>
                    </div>
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

export default TutorPerfil;
