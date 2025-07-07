
import React from 'react';
import { useLocation } from 'react-router-dom';

interface SidebarItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  items: SidebarItem[];
  userType: string;
}

const Sidebar: React.FC<SidebarProps> = ({ items, userType }) => {
  const location = useLocation();

  const getUserTypeTitle = (type: string) => {
    const titles = {
      anunciante: 'Anunciante',
      parceiro: 'Parceiro ONG',
      veterinario: 'Veterinário',
      tutor: 'Tutor'
    };
    return titles[type as keyof typeof titles] || type;
  };

  return (
    <aside className="pata-sidebar fade-in">
      <div className="p-4">
        <div className="mb-4 pb-3 border-bottom border-gray-200">
          <h6 className="text-muted text-uppercase fw-bold small mb-2">Menu Principal</h6>
          <p className="small text-pata-turquesa fw-medium mb-0">{getUserTypeTitle(userType)}</p>
        </div>
        
        <nav>
          <ul className="list-unstyled mb-0">
            {items.map((item, index) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={index} className="mb-1">
                  <a 
                    href={item.href}
                    className={`pata-sidebar-item ${isActive ? 'active' : ''}`}
                  >
                    <span className="me-3 d-flex align-items-center justify-content-center" style={{ width: '20px' }}>
                      {item.icon}
                    </span>
                    <span className="fw-medium">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
