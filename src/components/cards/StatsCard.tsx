
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color?: 'primary' | 'secondary' | 'accent' | 'warning';
  subtitle?: string;
}

const StatsCard = ({ title, value, icon, color = 'primary', subtitle }: StatsCardProps) => {
  const getColorClasses = () => {
    switch (color) {
      case 'primary':
        return 'bg-turquesa/10 text-turquesa border-turquesa/20';
      case 'secondary':
        return 'bg-vermelho-alaranjado/10 text-vermelho-alaranjado border-vermelho-alaranjado/20';
      case 'accent':
        return 'bg-amarelo-dourado/10 text-amarelo-dourado border-amarelo-dourado/20';
      case 'warning':
        return 'bg-red-50 text-red-600 border-red-200';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  return (
    <Card className="border hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            {subtitle && (
              <p className="text-xs text-gray-500">{subtitle}</p>
            )}
          </div>
          <div className={`p-3 rounded-lg ${getColorClasses()}`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
