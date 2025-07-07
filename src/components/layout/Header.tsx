
import React from 'react';
import { Bell, User } from 'lucide-react';

interface HeaderProps {
  userType: string;
  userName: string;
  alerts?: number;
}

const Header: React.FC<HeaderProps> = ({ userType, userName, alerts = 0 }) => {
  return (
    <header className="pata-header fade-in">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center bg-pata-turquesa text-white rounded-3 me-3 shadow-sm" 
               style={{ width: '3rem', height: '3rem' }}>
            <span className="fw-bold fs-4">🐾</span>
          </div>
          <div>
            <h4 className="mb-0 fw-bold">Pataforma</h4>
            <small className="text-muted">Sistema de Gestão Pet</small>
          </div>
        </div>
        
        <div className="d-flex align-items-center gap-4">
          <div className="position-relative">
            <button className="btn btn-link text-muted p-2 position-relative">
              <Bell size={20} />
              {alerts > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill">
                  {alerts}
                </span>
              )}
            </button>
          </div>
          
          <div className="d-flex align-items-center bg-white rounded-3 px-3 py-2 shadow-sm border">
            <div className="d-flex align-items-center justify-content-center bg-pata-turquesa text-white rounded-circle me-3"
                 style={{ width: '2.5rem', height: '2.5rem' }}>
              <User size={18} />
            </div>
            <div>
              <div className="fw-semibold text-dark">{userName}</div>
              <small className="text-muted text-capitalize">{userType}</small>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
