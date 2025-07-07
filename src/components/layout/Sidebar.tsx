
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

  return (
    <aside className="pata-sidebar">
      <nav className="py-4">
        <div className="px-3 mb-4">
          <h6 className="text-muted text-uppercase fw-bold small">Menu {userType}</h6>
        </div>
        
        <ul className="list-unstyled">
          {items.map((item, index) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={index}>
                <a 
                  href={item.href}
                  className={`pata-sidebar-item ${isActive ? 'active' : ''}`}
                >
                  <span className="me-3">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
