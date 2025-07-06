
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  userType: 'veterinario' | 'tutor' | 'parceiro' | 'anunciante';
  userName: string;
  userImage?: string;
  alerts?: number;
}

const Header = ({ userType, userName, userImage, alerts = 0 }: HeaderProps) => {
  const getUserTypeLabel = () => {
    switch (userType) {
      case 'veterinario': return 'Veterinário';
      case 'tutor': return 'Tutor';
      case 'parceiro': return 'Parceiro';
      case 'anunciante': return 'Anunciante';
      default: return '';
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-turquesa rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">🐾</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">Pataforma</h1>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        {alerts > 0 && (
          <Badge variant="destructive" className="bg-vermelho-alaranjado">
            {alerts} alertas
          </Badge>
        )}
        
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">{userName}</p>
            <p className="text-xs text-gray-500">{getUserTypeLabel()}</p>
          </div>
          <Avatar>
            <AvatarImage src={userImage} alt={userName} />
            <AvatarFallback className="bg-turquesa text-white">
              {userName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>
        
        <Button 
          variant="outline" 
          size="sm"
          className="text-turquesa border-turquesa hover:bg-turquesa hover:text-white"
        >
          Copiar Link Público
        </Button>
      </div>
    </header>
  );
};

export default Header;
